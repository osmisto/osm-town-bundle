// ----------------------------------------------------------
// OpenStreetMap bundle for easy site integration
//
// License: GNU General Public License version 3 or above
//
// TODO:
// * Permalink need translation
// ----------------------------------------------------------

// Include all necessary libraries if needed
function IncludeJavaScript(jsFile) {
	document.write('<script type="text/javascript" src="' + jsFile + '"></scr' + 'ipt>');
}

// OpenStreetMap
if (typeof OpenLayers.Layer.OSM.Mapnik === 'undefined')
	IncludeJavaScript("http://openstreetmap.org/openlayers/OpenStreetMap.js");

// cdauth
if (typeof OpenLayers.Layer.cdauth === 'undefined')
	IncludeJavaScript("http://github.com/osmisto/osm-town-bundle/raw/master/3party/cdauth/prototypes.js");
if (typeof OpenLayers.Layer.cdauthAddonLoaded === 'undefined')
	IncludeJavaScript("http://github.com/osmisto/osm-town-bundle/raw/master/3party/cdauth/addon.js");
if (typeof OpenLayers.Layer.OpenStreetBugs  === 'undefined')
	IncludeJavaScript("http://osm.cdauth.eu/map/openstreetbugs.js");


var OSMTownBundle = {
	// Consts
	remote_base: 'http://github.com/osmisto/osm-town-bundle/raw/master/',

	// Props
	map: null,  				// map object
	panel: null,				// panel with buttons
	osbControl: null,			// OpenStreetBugs control
	overlayLayer: null,

	// --------   Params ------------------
	// those are overwriten by options from init({....});
	// use it for customization
	params: {
		// Centering
		lat: 0,
		lon: 0,
		zoom: 16,

		// Elem IDs
		map_id: 'osmbundle-map',
		panel_id: 'osmbundle-panel',

		// Customization
		layers: ['osm', 'google-sat'],
		permalink: true,
		openstreetbugs: true,

		// Paths
		images_dir: null
	},

	// ---------- Translation pack ----------
	// Or something like this :)
	translation: {
		'osm-layer': 'OSM maps',
		'google-sat-layer': 'Satellite from Google',
		'osb-layer': 'Errors',
		'overlay-layer': 'Names',
		'permalink': 'Permalink',
		'def-ctl-title': 'Standart mouse behaviour',
		'osb-ctl-title': 'Use this for mark errors or add new information',
		'osm-attribution': '(C) <a target="_blank" href="http://www.openstreetmap.org">OpenStreetMap</a> and contributors, <a target="_blank" href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	},
	t: function(key) { return this.translation[key] || 'Err key: ' + key; },
	up: function(key, str) { this.translation[key] = str; },

	// ----------- Helpers ----------------
	img_url: function(file) {
		if (this.params.images_dir) {
			return this.params.images_dir + file;
		} else {
			return this.remote_base + 'images/' + file;
		}
	},

	// ------ Main initialization code -----
	init: function(options) {
		// Merge settings
		for (attr in options) { this.params[attr] = options[attr]; }

		// Create map and all all all
		this.create_map();
		this.add_layers();
		this.add_controls();
		this.add_panel();

		this.add_OSB();

		if (!this.map.getCenter())  {
			this.map.setCenter(new OpenLayers.LonLat(this.params.lon, this.params.lat), this.params.zoom);
		}

	},

	create_map: function() {
		this.map = new OpenLayers.Map({
										  div: this.params['map_id'],
										  numZoomLevels: 19,
										  controls: [],
										  eventListeners: {
											  changebaselayer: this.mapBaseLayerChanged
										  }
									  });
	},

	add_layers: function() {
		// Mapnik
		this.map.addLayer(new OpenLayers.Layer.OSM.Mapnik(this.t('osm-layer'), {
															  attribution: this.t('osm-attribution')
														  }));

		// Google sat
		this.map.addLayer(new OpenLayers.Layer.Google(this.t('google-sat-layer'), {
														  type: google.maps.MapTypeId.SATELLITE,
														  numZoomLevels: 19
													  }));

		// Overlay
		this.overlayLayer = new OpenLayers.Layer.cdauth.OSM.MapSurfer.Overlay(this.t('overlay-layer'), {
																				  numZoomLevels: 19,
																				  visibility: false
																			  });
		this.map.addLayer(this.overlayLayer);
	},

	add_controls: function() {
		// Standart
		this.map.addControl(new OpenLayers.Control.Navigation());
		this.map.addControl(new OpenLayers.Control.PanZoomBar());
		this.map.addControl(new OpenLayers.Control.LayerSwitcher());
		this.map.addControl(new OpenLayers.Control.KeyboardDefaults());
		this.map.addControl(new OpenLayers.Control.Attribution());

		// Permalink
		if (this.params['permalink']) {
			this.map.addControl(new OpenLayers.Control.Permalink());
		}
	},

	add_panel: function() {
		var defControl = new OpenLayers.Control.MouseDefaults({title : this.t('def-ctl-title')});

		this.panel = new OpenLayers.Control.Panel({defaultControl: defControl});
		this.panel.addControls([defControl]);
		this.map.addControl(this.panel);
	},

	// OpenStreetBugs client
	add_OSB: function() {
		if (!this.params.openstreetbugs) return;
		if (!OpenLayers.Layer.OpenStreetBugs) return;

		var size = new OpenLayers.Size(22, 22);
		var pixel = new OpenLayers.Pixel(-11, -11);
		var bug_red = new OpenLayers.Icon(this.img_url("bug-red.png"), size, pixel);
		var bug_blue = new OpenLayers.Icon(this.img_url("bug-blue.png"), size, pixel);
		var bug_white = new OpenLayers.Icon(this.img_url("bug-white.png"), size, pixel);

		var osbLayer = new OpenLayers.Layer.OpenStreetBugs(
			this.t('osb-layer'), {
				visibility: false,
				iconOpen : bug_red,
				iconClosed : bug_blue
			});
		this.map.addLayers([osbLayer]);

		this.osbControl = new OpenLayers.Control.OpenStreetBugs(
			osbLayer, {
				icon : bug_red,
				title: this.t('osb-ctl-title')
			});

		this.panel.addControls([this.osbControl]);
		this.map.addControl(this.osbControl);
	},

	// -------------- Event handlers ----------------------
	mapBaseLayerChanged: function (event) {
		if (OSMTownBundle.overlayLayer) {
			OSMTownBundle.overlayLayer.setVisibility(event.layer.CLASS_NAME != "OpenLayers.Layer.OSM.Mapnik");
		}
	}
};
