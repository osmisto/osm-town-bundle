/* ---------------------------------------------------------------
 * Nominatim wrapper
 *
 * License: GNU General Public License version 3 or above
 * --------------------------------------------------------------*/

/**
 * Nominatim -- sigleton for creating new iterators and managing them
 */
Nominatim = {
	options: {

		/**
		 *  QUERY OPTIONS
		 */

		// STRING
		// Server to query
		server: 'http://open.mapquestapi.com/nominatim/v1/search',

		// ARRAY [top, left, bottom, right]
		// Viewbox to limit query results only by one square
		viewbox: [],

		// BOOL
		// Should we query address details
		addressdetails: true,

		// BOOL
		// Should we query the poligon of found objects
		poligon: true,

		// STRING
		// Email (see nominatim doc)
		email: null,

		// ARRAY [lang1, lang2, ... ]
		// Lang preference. The 'en' will be added to the end
		lang: [],

		// UNSIGNED INT
		// How many items will be fetched in one query
		limit: 10,


		/**
		 * INTERNAL TUNING
		 */

		// UNSIGNED INT
		// How many items will be fetched total
		limit_total: 50,

		// BOOL
		// Call next just after creating
		call_next: true,

		// BOOL
		// Postpone next for some tiny time
		// Setting to false will be cause to recursion loop:
		//    cb -> next -> cb -> next -> cb -> next ...
		postpone_next: true,

		// INT
		// postpone delay if needed
		postpone_delay: 1
	},

	init: function(options) {
		OpenLayers.Util.applyDefaults(this.options, options);
	},

	search: function(query, callback, options) {
		// Merge default options and given ones
		var iter_opts = {};
		OpenLayers.Util.applyDefaults(iter_opts, this.options);
		OpenLayers.Util.applyDefaults(iter_opts, options);

		return new Nominatim.IterClass(query, callback, iter_opts);
	},

	// Registration of iterators
	iters: {
		last: 0,

		register: function(iter) {
			var i = this.last++;
			this['i' + i] = iter;
			return i;
		},

		unregister: function(iter, i) {
			delete this['i' + i];
		}
	}
};


/**
 * IterClass -- prototype for all iterators
 */
Nominatim.IterClass = OpenLayers.Class({
	results: [],
	head_index: -1,
	end_of_results: false,
	fetched: [],

	initialize: function(query, callback, opts){
		this.params = opts;
		this.callback = callback;
		this.query = query;

		// Register in nominatim
		this.reg_index = Nominatim.iters.register(this);

		// Call next if needed
		if(this.params.call_next)
			this.next();
	},

	// Wrapper for _next function
	// will postpone call if needed
	next: function() {
		if(!this.params.postpone_next)
			return this.next();

		if(this.next_timer)
			clearTimeout(this.next_timer);

		this.next_timer = setTimeout(this._path() + '._next()', this.params.postpone_delay);
		return true;
	},

	// Fetch next result if needed
	// Return next result item if it ready
	// or fetch next packet of results
	_next: function() {
		if(this.results.length)
			this.callback(this, this.results.shift(), ++this.head_index);
		else if(this.end_of_results)
			this.callback(this, null, null);
		else
			this._fetch_next_results();
	},

	// Prepare query and run it
	// will add new <script> tag with query to the end of document
	_fetch_next_results: function() {
		// Stop if already fetched more then limit_total
		if (this.params.limit_total && this.head_index > this.params.limit_total) {
			this.end_of_results = true;
			this.stopped_by_total_limit = true;

			window.console && console.log && console.log('[Nominatim] WARNING: stopped because already fetched more then in the limit_total param');
			this._next();
			return;
		}

		// Prepare query and run it
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = this._query_URL();
		document.body.appendChild(script);
	},

	// Callback for results from nominatim server
	// saves results and calls _next
	_cb: function(data) {
		if (data.length) {
			// Save fetched IDs and append data to results
			this.fetched = this.fetched.concat(data.map(function(d) {return d.place_id;}));
			this.results = this.results.concat(data);
		} else
			this.end_of_results = true;

		this._next();
	},

	_path: function() {
		return 'Nominatim.iters.i' +  this.reg_index;
	},

	_format_viewbox: function() {
		if (!this.params.viewbox.length)
			return '';

		return this.params.viewbox.join(',');
	},

	_format_langs: function() {
		langs = this.params.lang;
		if(langs.indexOf('en') >= 0) {
			langs.push('en');
		}
		return langs.join(',');
	},

	_format_fetched: function() {
		return (this.fetched.length) ? this.fetched.join(',') : '';
	},

	_query_URL: function() {
		var url = OpenLayers.Util.urlAppend(this.params.server, 'format=json');
		url = OpenLayers.Util.urlAppend(url, 'json_callback=' + this._path() + '._cb');
		url = OpenLayers.Util.urlAppend(url, 'limit=' + this.params.limit);
		url = OpenLayers.Util.urlAppend(url, 'addressdetails=' + (this.params.addressdetails ? '1' : '0'));
		url = OpenLayers.Util.urlAppend(url, 'polygon=' + (this.params.polygon ? '1' : '0'));
		url = OpenLayers.Util.urlAppend(url, 'accept-language=' + this._format_langs());
		url = OpenLayers.Util.urlAppend(url, 'viewbox=' + this._format_viewbox());
		url = OpenLayers.Util.urlAppend(url, 'email=' + this.params.email ? this.params.email : '');
		url = OpenLayers.Util.urlAppend(url, 'exclude_place_ids=' + this._format_fetched());

		url = OpenLayers.Util.urlAppend(url, 'q=' + escape(this.query));

		return url;
	}
});
