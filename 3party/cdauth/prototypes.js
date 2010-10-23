/*
	This file is part of cdauth’s map.

	cdauth’s map is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	cdauth’s map is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with cdauth’s map.  If not, see <http://www.gnu.org/licenses/>.

	Obtain the source code from http://gitorious.org/cdauths-map
	or git://gitorious.org/cdauths-map/map.git.
*/

/**
 * Provides basic classes to add features of cdauth’s map to any OpenLayers map.
 * Include http://www.openlayers.org/dev/OpenLayers.js for full OpenLayers support.
*/

/**
 * Necessary improvement to the translate function: Fall back to default language if translated string is not
 * available (see http://trac.openlayers.org/ticket/2308).
*/

OpenLayers.i18n = OpenLayers.Lang.translate = function(key, context) {
	var message = OpenLayers.Lang[OpenLayers.Lang.getCode()][key];
	if(!message)
	{
		if(OpenLayers.Lang[OpenLayers.Lang.defaultCode][key])
			message = OpenLayers.Lang[OpenLayers.Lang.defaultCode][key];
		else
			message = key;
	}
	if(context)
		message = OpenLayers.String.format(message, context);
	return message;
};

OpenLayers.Lang.en = OpenLayers.Util.extend(OpenLayers.Lang.en, {
	"[Zoom]" : "[Zoom]",
	"[Remove]" : "[Remove]",
	"attribution-osm" : "Rendering CC-by-SA by ${rendering}, Data CC-by-SA by <a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a>",
	"attribution-relief" : "Relief by <a href=\"http://hikebikemap.de/\">Hike &amp; Bike Map</a>",
	"attribution-oom-streets" : "Streets overlay CC-by-SA by <a href=\"http://oobrien.com/oom/\">OpenOrienteeringMap</a>/<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> data",
	"attribution-oom-labels" : "Labels overlay CC-by-SA by <a href=\"http://oobrien.com/oom/\">OpenOrienteeringMap</a>/<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> data",
	"attribution-hiking" : "Hiking symbols overlay CC-by-SA by <a href=\"http://osm.lonvia.de/world_hiking.html\">Lonvia's Hiking Map</a>/<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> data",
	"attribution-os-streetview" : "Contains Ordnance Survey data © Crown copyright and database right 2010",
	"Create a marker" : "Create a marker",
	"Coordinates" : "Coordinates",
	"unknown" : "unknown",
	"Error parsing file." : "Error parsing file.",
	"Latitude" : "Latitude",
	"Longitude" : "Longitude",
	"Get directions (OpenRouteService)" : "Get directions (OpenRouteService)",
	"OpenStreetMap Permalink" : "OpenStreetMap Permalink",
	"OpenStreetMap Shortlink" : "OpenStreetMap Shortlink",
	"Google Maps Permalink" : "Google Maps Permalink",
	"Yahoo Maps Permalink" : "Yahoo Maps Permalink",
	"OpenStreetMap Links" : "OpenStreetMap Links",
	"Wikimedia GeoHack" : "Wikimedia GeoHack",
	"Go home" : "Go home",
	"Mapnik" : "Mapnik",
	"MapSurfer Road" : "MapSurfer Road",
	"MapSurfer Topographic" : "MapSurfer Topographic",
	"OpenStreetBrowser" : "OpenStreetBrowser",
	"Osmarender" : "Osmarender",
	"OpenCycleMap" : "OpenCycleMap",
	"Reit- und Wanderkarte" : "Reit- und Wanderkarte",
	"Hike & Bike Map" : "Hike & Bike Map",
	"OpenPisteMap" : "OpenPisteMap",
	"ÖPNV-Karte" : "ÖPNV-Karte",
	"Google Streets" : "Google Streets",
	"Google Satellite" : "Google Satellite",
	"Google Hybrid" : "Google Hybrid",
	"Google Terrain" : "Google Terrain",
	"Google MapMaker" : "Google MapMaker",
	"Google MapMaker Hybrid" : "Google MapMaker Hybrid",
	"Yahoo Street" : "Yahoo Street",
	"Yahoo Satellite" : "Yahoo Satellite",
	"Yahoo Hybrid" : "Yahoo Hybrid",
	"Relief" : "Relief",
	"Hiking symbols" : "Hiking symbols",
	"Coordinate grid" : "Coordinate grid",
	"Izometrická 3D mapa ČR" : "Izometrická 3D mapa ČR",
	"Streets overlay" : "Streets overlay",
	"Labels overlay" : "Labels overlay"
});

OpenLayers.Lang.de = OpenLayers.Util.extend(OpenLayers.Lang.de, {
	"[Zoom]" : "[Zoom]",
	"[Remove]" : "[Entfernen]",
	"attribution-osm" : "Darstellung: ${rendering} (CC-by-SA), Daten: <a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a> (CC-by-SA)",
	"attribution-relief" : "Reliefdarstellung: <a href=\"http://hikebikemap.de/\">Hike &amp; Bike Map</a>",
	"attribution-oom-streets" : "Straßenhybrid von <a href=\"http://oobrien.com/oom/\">OpenOrienteeringMap</a> (<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a>-Daten, CC-by-SA)",
	"attribution-oom-labels" : "Beschriftungen von <a href=\"http://oobrien.com/oom/\">OpenOrienteeringMap</a> (<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a>-Daten, CC-by-SA)",
	"attribution-hiking" : "Wanderbeschilderung von <a href=\"http://osm.lonvia.de/world_hiking.html\">Lonvia's Hiking Map</a>/<a href=\"http://www.openstreetmap.org/\">OpenStreetMap</a>-Daten, CC-by-SA",
	"attribution-os-streetview" : "Enthält Ordnance-Survey-Daten, © Crown copyright and database right 2010",
	"Create a marker" : "Marker anlegen",
	"Coordinates" : "Koordinaten",
	"unknown" : "unbekannt",
	"Error parsing file." : "Fehler beim Parsen der Datei.",
	"Latitude" : "Breite",
	"Longitude" : "Länge",
	"Get directions (OpenRouteService)" : "Route berechnen (OpenRouteService)",
	"OpenStreetMap Permalink" : "OpenStreetMap Permalink",
	"OpenStreetMap Shortlink" : "OpenStreetMap Shortlink",
	"Google Maps Permalink" : "Google Maps Permalink",
	"Yahoo Maps Permalink" : "Yahoo Maps Permalink",
	"OpenStreetMap Links" : "OpenStreetMap Links",
	"Wikimedia GeoHack" : "Wikimedia GeoHack",
	"Go home" : "Zum Aufenthaltsort",
	"Mapnik" : "Mapnik",
	"MapSurfer Road" : "MapSurfer Road",
	"MapSurfer Topographic" : "MapSurfer Topographic",
	"OpenStreetBrowser" : "OpenStreetBrowser",
	"Osmarender" : "Osmarender",
	"OpenCycleMap" : "OpenCycleMap",
	"Reit- und Wanderkarte" : "Reit- und Wanderkarte",
	"Hike & Bike Map" : "Hike & Bike Map",
	"OpenPisteMap" : "OpenPisteMap",
	"ÖPNV-Karte" : "ÖPNV-Karte",
	"Google Streets" : "Google Karte",
	"Google Satellite" : "Google Satellit",
	"Google Hybrid" : "Google Hybrid",
	"Google Terrain" : "Google Gelände",
	"Google MapMaker" : "Google MapMaker",
	"Google MapMaker Hybrid" : "Google MapMaker Hybrid",
	"Yahoo Street" : "Yahoo Karte",
	"Yahoo Satellite" : "Yahoo Satellit",
	"Yahoo Hybrid" : "Yahoo Hybrid",
	"Relief" : "Relief",
	"Hiking symbols" : "Wanderbeschilderung",
	"Coordinate grid" : "Koordinatensystem",
	"Izometrická 3D mapa ČR" : "Izometrická 3D mapa ČR",
	"Streets overlay" : "Straßen-Hybrid",
	"Labels overlay" : "Beschriftungen"
});

OpenLayers.cdauthBackup = { };

// Save parent classes in class objects, needed for makeClassName()
OpenLayers.cdauthBackup.Class = OpenLayers.Class;
OpenLayers.Class = function() {
	var ret = OpenLayers.cdauthBackup.Class.apply(this, arguments);
	ret.prototype.cdauthParentClasses = arguments;
	return ret;
};
OpenLayers.Class.isPrototype = OpenLayers.cdauthBackup.Class.isPrototype;

// Make use of ajax-proxy (http://gitorious.org/ajax-proxy/ajax-proxy)
// Include http://osm.cdauth.eu/ajax-proxy/ajax-proxy.js to "disable" the Same Origin Policy.
loadJavaScript("http://osm.cdauth.eu/ajax-proxy/ajax-proxy.js", function() { return window.AjaxProxyXMLHttpRequest != undefined; }, function() { OpenLayers.Request.XMLHttpRequest = AjaxProxyXMLHttpRequest; });

// Fix displayClass in OpenLayers Controls to also use parent class names
OpenLayers.cdauthBackup.Control = {
	initialize : OpenLayers.Control.prototype.initialize,
	activate : OpenLayers.Control.prototype.activate,
	deactivate : OpenLayers.Control.prototype.deactivate
};

OpenLayers.Control.prototype.initialize = function() {
	OpenLayers.cdauthBackup.Control.initialize.apply(this, arguments);
	this.displayClass = makeClassName(this);
};

// Workaround for http://trac.openlayers.org/ticket/2607
OpenLayers.Control.prototype.activate = function() {
	var ret = OpenLayers.cdauthBackup.Control.activate.apply(this, arguments);
	if(this.map)
	{
		var classNames = this.displayClass.split(/\s+/);
		for(var i=0; i<classNames.length; i++)
		{
			OpenLayers.Element.addClass(
				this.map.viewPortDiv,
				classNames[i] + "Active"
			);
		}
	}
	return ret;
};

OpenLayers.Control.prototype.deactivate = function() {
	var ret = OpenLayers.cdauthBackup.Control.deactivate.apply(this, arguments);
	if(this.map)
	{
		var classNames = this.displayClass.split(/\s+/);
		for(var i=0; i<classNames.length; i++)
		{
			OpenLayers.Element.removeClass(
				this.map.viewPortDiv,
				classNames[i] + "Active"
			);
		}
	}
	return ret;
};

OpenLayers.Control.Panel.prototype.redraw = function() {
	this.div.innerHTML = "";
	if (this.active) {
		for (var i=0, len=this.controls.length; i<len; i++) {
			var element = this.controls[i].panel_div;
			if (this.controls[i].active) {
				element.className = this.controls[i].displayClass.replace(/(\s+|$)/g, "ItemActive$1");
			} else {
				element.className = this.controls[i].displayClass.replace(/(\s+|$)/g, "ItemInactive$1");
			}
			this.div.appendChild(element);
		}
	}
};

/**
 * A map with the default values needed for OpenStreetMap and other world maps.
 * If you plan to use the getQueryMethod() function, remember to set the visibility of your overlay layers _before_ adding them to the map.
 * @event mapResize The map div has been resized.
 * @event newHash The return value of getQueryObject() probably has changed.
*/

OpenLayers.Map.cdauth = OpenLayers.Class(OpenLayers.Map, {
	/**
	 * This CSS file will be additionally loaded.
	*/
	cdauthTheme : "http://osm.cdauth.de/map/prototypes.css",

	/**
	 * The projection to use in coordinates in the Permalink.
	 * @var OpenLayers.Projection
	*/
	permalinkProjection : new OpenLayers.Projection("EPSG:4326"),

	initialize : function(div, options)
	{
		var keyboardControl = new OpenLayers.Control.cdauth.KeyboardDefaults();
		OpenLayers.Map.prototype.initialize.apply(this, [ div, OpenLayers.Util.extend({
			controls: [
				new OpenLayers.Control.Navigation(),
				new OpenLayers.Control.PanZoomBar(),
				new OpenLayers.Control.cdauth.LayerSwitcher(),
				new OpenLayers.Control.Attribution(),
				keyboardControl,
				new OpenLayers.Control.MousePosition(),
				new OpenLayers.Control.ScaleLine() ],
			//maxExtent: new OpenLayers.Bounds(-180, -85, 180, 85), // FIXME: 4326 as projection does not seem to work
			maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
			maxResolution: 156543.0399,
			numZoomLevels: 19,
			units: 'm',
			projection: new OpenLayers.Projection("EPSG:900913"),
			displayProjection: new OpenLayers.Projection("EPSG:4326")
		}, options) ]);

		this.loadCSSFile(this.cdauthTheme);

		this.events.addEventType("mapResize");
		this.events.addEventType("newHash");

		this.events.register("move", this, function(){ this.events.triggerEvent("newHash"); });
		this.events.register("changebaselayer", this, function(){ this.events.triggerEvent("newHash"); });
		this.events.register("changelayer", this, function(){ this.events.triggerEvent("newHash"); });

		OpenLayers.Event.observe(this.viewPortDiv, "mouseover", OpenLayers.Function.bindAsEventListener(function(){ keyboardControl.activate(); }, this));
		OpenLayers.Event.observe(this.viewPortDiv, "mouseout", OpenLayers.Function.bindAsEventListener(function(){ keyboardControl.deactivate(); }, this));
	},

	updateSize : function()
	{
		var ret = OpenLayers.Map.prototype.updateSize.apply(this, arguments);
		this.events.triggerEvent("mapResize");
		return ret;
	},

	addLayer : function(layer)
	{
		var ret = OpenLayers.Map.prototype.addLayer.apply(this, arguments);

		if(typeof layer.shortName == "undefined")
			layer.shortName = layer.name;

		if(typeof layer.cdauthDefaultVisibility == "undefined")
			layer.cdauthDefaultVisibility = layer.getVisibility();

		layer.events.addEventType("queryObjectChanged");

		if(layer.saveInPermalink)
			layer.events.register("queryObjectChanged", this, function() { this.events.triggerEvent("newHash"); });

		layer.getQueryObjectFixed = function() {
			var ret = (this.getQueryObject == undefined || !this.saveInPermalink ? { } : this.getQueryObject());
			if(!this.isBaseLayer && this.getVisibility() != this.cdauthDefaultVisibility)
				ret.visibility = this.getVisibility();
			return ret;
		};

		layer.setQueryObjectFixed = function(obj) {
			if(!this.isBaseLayer)
				this.setVisibility(typeof obj.visibility == "undefined" ? this.cdauthDefaultVisibility : (obj.visibility != "0"));
			if(this.setQueryObject != undefined)
				this.setQueryObject(obj);
		};

		layer.div.className = makeClassName(layer) + " " + layer.div.className;

		if(layer.saveInPermalink && layer.removableInLayerSwitcher)
			this.events.triggerEvent("newHash");
	},

	removeLayer : function(layer)
	{
		var trigger = (layer.saveInPermalink && layer.removableInLayerSwitcher);
		var ret = OpenLayers.Map.prototype.removeLayer.apply(this, arguments);
		if(trigger)
			this.events.triggerEvent("newHash");
		return ret;
	},

	addAllAvailableOSMLayers : function()
	{
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.Mapnik(OpenLayers.i18n("Mapnik"), { shortName : "Mpnk" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.MapSurfer.Road(OpenLayers.i18n("MapSurfer Road"), { shortName : "MSfR" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.MapSurfer.Topographic(OpenLayers.i18n("MapSurfer Topographic"), { shortName : "MSfT" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.OpenStreetBrowser(OpenLayers.i18n("OpenStreetBrowser"), { shortName : "OSBr" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.Osmarender(OpenLayers.i18n("Osmarender"), { shortName : "Osmr" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.CycleMap(OpenLayers.i18n("OpenCycleMap"), { shortName : "OCyc" }));
		//this.addLayer(new OpenLayers.Layer.cdauth.OSM.Wanderkarte(OpenLayers.i18n("Reit- und Wanderkarte"), { shortName : "OSMC" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.HikeAndBike(OpenLayers.i18n("Hike & Bike Map"), { shortName : "HiBi" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.OpenPisteMap(OpenLayers.i18n("OpenPisteMap"), { shortName : "OPis" }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.OPNVKarte(OpenLayers.i18n("ÖPNV-Karte"), { shortName : "OPNV" }));
		//this.addLayer(new OpenLayers.Layer.cdauth.OSM.Kybl3DMap(OpenLayers.i18n("Izometrická 3D mapa ČR"), { shortName : "kybl" }));

		this.addLayer(new OpenLayers.Layer.cdauth.OSM.OOMStreets(OpenLayers.i18n("Streets overlay"), { shortName : "OOMS", visibility : false }));
		this.addLayer(new OpenLayers.Layer.cdauth.OSM.OOMLabels(OpenLayers.i18n("Labels overlay"), { shortName : "OOML", visibility : false }));
	},

	addAllAvailableGoogleLayers : function()
	{
		var map = this;
		OpenLayers.Layer.cdauth.Google.loadAPI(function() {
			map.addLayer(new OpenLayers.Layer.cdauth.Google.Maps(OpenLayers.i18n("Google Streets"), { shortName : "GgSt" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Google.MapsSatellite(OpenLayers.i18n("Google Satellite"), { shortName : "GgSa" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Google.MapsHybrid(OpenLayers.i18n("Google Hybrid"), { shortName : "GgHy" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Google.MapsTerrain(OpenLayers.i18n("Google Terrain"), { shortName : "GgTe" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Google.MapMaker(OpenLayers.i18n("Google MapMaker"), { shortName : "GgMM" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Google.MapMakerHybrid(OpenLayers.i18n("Google MapMaker Hybrid"), { shortName : "GgMH" }));
		});
	},

	addAllAvailableYahooLayers : function()
	{
		var map = this;
		OpenLayers.Layer.cdauth.Yahoo.loadAPI(function() {
			map.addLayer(new OpenLayers.Layer.cdauth.Yahoo.Maps(OpenLayers.i18n("Yahoo Street"), { shortName : "YaSt" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Yahoo.Satellite(OpenLayers.i18n("Yahoo Satellite"), { shortName : "YaSa" }));
			map.addLayer(new OpenLayers.Layer.cdauth.Yahoo.Hybrid(OpenLayers.i18n("Yahoo Hybrid"), { shortName : "YaHy" }));
		});
	},

	/**
	 * Adds all available layers from this library to your map.
	*/
	addAllAvailableLayers : function()
	{
		this.addLayer(new OpenLayers.Layer.cdauth.other.Relief(OpenLayers.i18n("Relief"), { visibility: false, shortName : "Rlie" }));
		this.addLayer(new OpenLayers.Layer.cdauth.other.Hiking(OpenLayers.i18n("Hiking symbols"), { visibility: false, shortName : "Hike" }));

		this.addAllAvailableOSMLayers();
		this.addLayer(new OpenLayers.Layer.cdauth.other.OSStreetView(OpenLayers.i18n("Ordnance Survey (UK)"), { shortName : "OSSV" }));

		this.addAllAvailableGoogleLayers();
		this.addAllAvailableYahooLayers();
	},

	/**
	 * Zoom to the specified query object. Remember to add your layers and to eventually set OpenLayers.ProxyHost before running
	 * this method.
	 * @param Object query Usually decodeQueryString(location.hash.replace(/^#/, ""))
	*/

	zoomToQuery: function(query)
	{
		var map = this;

		// Zoom to search results only if the position is not manually set
		var search_may_zoom = (typeof query.lon == "undefined" && typeof query.lat == "undefined");

		// Set base layer (layer)
		if(query.layer)
		{
			var matching_layers = this.getLayersBy("shortName", query.layer);
			if(matching_layers.length > 0)
				this.setBaseLayer(matching_layers[0]);
		}

		if(this.baseLayer == null)
		{ // Activate first base layer
			for(var i=0; i<this.layers.length; i++)
			{
				if(this.layers[i].isBaseLayer)
				{
					this.setBaseLayer(this.layers[i]);
					break;
				}
			}
		}

		// Set position (lon, lat, zoom)
		if(!query.lon)
			query.lon = 0;
		if(!query.lat)
			query.lat = 0;
		if(!query.zoom)
			query.zoom = 2;
		this.setCenter(new OpenLayers.LonLat(1*query.lon, 1*query.lat).transform(this.permalinkProjection, this.getProjectionObject()), 1*query.zoom);

		// Initialise removable layers
		var removableLayers = { };
		if(typeof query.r == "object")
		{
			var redrawLayerSwitcher = false;
			for(var i in query.r)
			{
				if(query.r[i]["class"] == undefined || query.r[i].name == undefined)
					continue;

				removableLayers[i] = true;

				var existingLayers = this.getLayersBy("shortName", i);
				var alreadyExists = false;
				for(var j=0; j<existingLayers.length; j++)
				{
					if(existingLayers[j].CLASS_NAME == "OpenLayers.Layer."+query.r[i]["class"])
					{
						if(existingLayers[j].name != query.r[i].name)
						{
							existingLayers[j].name = query.r[i].name;
							redrawLayerSwitcher = true;
						}
						alreadyExists = true;
					}
					else
						this.removeLayer(existingLayers[j]);
				}

				if(alreadyExists)
					continue;

				var classNameParts = query.r[i]["class"].split(/\./);
				var layerClass = OpenLayers.Layer;
				for(var j=0; j<classNameParts.length; j++)
				{
					layerClass = layerClass[classNameParts[j]];
					if(!layerClass)
						break;
				}
				if(!layerClass)
					continue;

				var layer = new layerClass(query.r[i].name);
				layer.shortName = i;
				layer.saveInPermalink = true;
				layer.removableInLayerSwitcher = true;
				this.addLayer(layer);
				redrawLayerSwitcher = true;
			}

			if(redrawLayerSwitcher)
			{ // Update the removableInLayerSwitcher links
				for(var i=0; i<this.controls.length; i++)
				{
					if(this.controls[i] instanceof OpenLayers.Control.cdauth.LayerSwitcher)
						this.controls[i].redraw(true);
				}
			}
		}
		// Remove removable layers that are not in the request
		var removeLayers = [ ];
		for(var i=0; i<this.layers.length; i++)
		{
			if(this.layers[i].removableInLayerSwitcher && !removableLayers[this.layers[i].shortName])
				removeLayers.push(this.layers[i]);
		}
		for(var i=0; i<removeLayers.length; i++)
			this.removeLayer(removeLayers[i]);

		// Set layer properties
		for(var i=0; i<this.layers.length; i++)
		{
			var obj = { };
			if(typeof query.l == "object" && typeof query.l[this.layers[i].shortName] == "object")
				obj = query.l[this.layers[i].shortName];

			this.layers[i].setQueryObjectFixed(obj);
		}

		// Adding markers might have moved the map, reset map view
		this.setCenter(new OpenLayers.LonLat(1*query.lon, 1*query.lat).transform(this.permalinkProjection, this.getProjectionObject()), 1*query.zoom);
	},

	/**
	 * Returns a Query object that you can pass to the zoomToQuery() function to restore the current view. Usually you save this to the location
	 * hash part by calling location.hash = "#"+encodeQueryString(map.getQueryObject());
	 * Only non-default settings will be added to this query object. Remember to set the visibility of your overlay layers _before_ adding
	 * them to the map, as the default visibility value will be determined during adding it.
	 * @return Object
	*/

	getQueryObject: function()
	{
		if(!this.getCenter())
			return false;

		var lonlat = this.getCenter().clone().transform(this.getProjectionObject(), this.permalinkProjection);
		var hashObject = {
			lon : Math.round(lonlat.lon*100000000)/100000000,
			lat : Math.round(lonlat.lat*100000000)/100000000,
			zoom : this.getZoom(),
			layer : this.baseLayer.shortName,
			l : { },
			r : { }
		};

		for(var i=0; i<this.layers.length; i++)
		{
			var l = this.layers[i];
			hashObject.l[l.shortName] = l.getQueryObjectFixed();
			if(l.removableInLayerSwitcher && l.saveInPermalink)
				hashObject.r[l.shortName] = {
					"class" : l.CLASS_NAME.replace(/^OpenLayers\.Layer\./, ""),
					name : l.name
				};
		}

		return hashObject;
	},

	loadCSSFile : function(url) {
		if(url == null)
			return;

		var addNode = true;
		var nodes = document.getElementsByTagName('link');
		for(var i=0; i<nodes.length; i++)
		{
			if(OpenLayers.Util.isEquivalentUrl(nodes[i].href, url))
			{
				addNode = false;
				break;
			}
		}
		if(addNode)
		{
			var cssNode = document.createElement('link');
			cssNode.setAttribute('rel', 'stylesheet');
			cssNode.setAttribute('type', 'text/css');
			cssNode.setAttribute('href', url);
			document.getElementsByTagName('head')[0].appendChild(cssNode);
		}
	},

	CLASS_NAME : "OpenLayers.Map.cdauth"
});

OpenLayers.Control.cdauth = { };

/**
 * Disables the keyboard control when the focus is on a form field that is controlled by the keyboard (such as an input field).
 * See bug http://trac.openlayers.org/ticket/1027
*/
OpenLayers.Control.cdauth.KeyboardDefaults = OpenLayers.Class(OpenLayers.Control.KeyboardDefaults, {
	defaultKeyPress : function(evt) {
		if(evt.target && evt.target.nodeName && (evt.target.nodeName.toLowerCase() == "input" && evt.target.type.toLowerCase() != "checkbox" && evt.target.type.toLowerCase() != "button" && evt.target.type.toLowerCase() != "submit" && evt.target.type.toLowerCase() != "clear" || evt.target.tagName.toLowerCase() == "textarea" || evt.target.tagName.toLowerCase() == "select"))
			return true;
		if(evt.altKey || evt.ctrlKey)
			return true;
		OpenLayers.Control.KeyboardDefaults.prototype.defaultKeyPress.apply(this, [ evt ]);
	},
	CLASS_NAME : "OpenLayers.Control.cdauth.KeyboardDefaults"
});

/**
 * A layer switcher that has a scroll bar if the height of the map is too small.
 * Additionally, overlay layers that have the “zoomableInLayerSwitcher” property get a button that zooms to the data extent of the layer.
 * Overlay layers that have the “removableInLayerSwitcher” property set get a button to remove the layer from the map.
*/
OpenLayers.Control.cdauth.LayerSwitcher = OpenLayers.Class(OpenLayers.Control.LayerSwitcher, {
	loadContents : function() {
		var ret = OpenLayers.Control.LayerSwitcher.prototype.loadContents.apply(this, arguments);
		this.layersDiv.style.padding = ".5em";
		this.layersDiv.style.width = "19em";
		this.layersDiv.style.overflow = "auto";

		this.map.events.register("mapResize", this, this.onMapResize);
		return ret;
	},

	onMapResize : function() {
		this.layersDiv.style.maxHeight = (this.map.size.h-100)+"px";
	},

	redraw : function(force) {
		// Display “Zoom” and, if desired, “Remove” links for overlay layers.

		if(force)
			this.layerStates = [];
		var ret = OpenLayers.Control.LayerSwitcher.prototype.redraw.apply(this, arguments);
		this.onMapResize();

		var spans = this.dataLayersDiv.getElementsByTagName("span");
		for(var i=0; i<spans.length; i++)
		{
			var layer = this.map.getLayersByName(spans[i].innerHTML)[0];
			if(!layer) continue;

			var append = [ ];

			if(layer.zoomableInLayerSwitcher)
			{
				var a_zoom = document.createElement("a");
				a_zoom.href = "#";
				OpenLayers.Event.observe(a_zoom, "click", OpenLayers.Function.bindAsEventListener(function(){ var extent = this.getDataExtent(); if(extent) this.map.zoomToExtent(extent); return false; }, layer));
				a_zoom.appendChild(document.createTextNode(OpenLayers.i18n("[Zoom]")));

				append.push(document.createTextNode(" "));
				append.push(a_zoom);
			}

			if(layer.removableInLayerSwitcher)
			{
				var a_remove = document.createElement("a");
				a_remove.href = "#";
				OpenLayers.Event.observe(a_remove, "click", OpenLayers.Function.bindAsEventListener(function(){ this.map.removeLayer(this); this.destroy(); return false; }, layer));
				a_remove.appendChild(document.createTextNode(OpenLayers.i18n("[Remove]")));

				append.push(document.createTextNode(" "));
				append.push(a_remove);
			}

			var nextSibling = spans[i].nextSibling;
			for(var j=0; j<append.length; j++)
			{
				if(nextSibling)
					spans[i].parentNode.insertBefore(append[j], nextSibling);
				else
					spans[i].parentNode.appendChild(append[j]);
			}
		}

		return ret;
	},

	CLASS_NAME : "OpenLayers.Control.cdauth.LayerSwitcher"
});

OpenLayers.Layer.cdauth = {
	OSM : { },
	Google : { },
	Yahoo : { },
	markers : { },
	other : { }
};

/**
 * Mapnik rendering from openstreetmap.org.
*/
OpenLayers.Layer.cdauth.OSM.Mapnik = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize : function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [
			name,
			[ "http://a.tile.openstreetmap.org/${z}/${x}/${y}.png", "http://b.tile.openstreetmap.org/${z}/${x}/${y}.png", "http://c.tile.openstreetmap.org/${z}/${x}/${y}.png" ],
			OpenLayers.Util.extend({ numZoomLevels: 19 }, options)
		]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.Mapnik"
});

/**
 * Osmarender rendering from openstreetmap.org.
*/
OpenLayers.Layer.cdauth.OSM.Osmarender = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize : function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [
			name,
			[ "http://a.tah.openstreetmap.org/Tiles/tile/${z}/${x}/${y}.png", "http://b.tah.openstreetmap.org/Tiles/tile/${z}/${x}/${y}.png", "http://c.tah.openstreetmap.org/Tiles/tile/${z}/${x}/${y}.png" ],
			OpenLayers.Util.extend({ numZoomLevels: 18 }, options)
		]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.Osmarender"
});

/**
 * CycleMap rendering from openstreetmap.org.
*/
OpenLayers.Layer.cdauth.OSM.CycleMap = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize : function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [
			name,
			[ "http://a.andy.sandbox.cloudmade.com/tiles/cycle/${z}/${x}/${y}.png", "http://b.andy.sandbox.cloudmade.com/tiles/cycle/${z}/${x}/${y}.png", "http://c.andy.sandbox.cloudmade.com/tiles/cycle/${z}/${x}/${y}.png" ],
			OpenLayers.Util.extend({
				numZoomLevels: 19,
				attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://www.opencyclemap.org/\">OpenCycleMap</a>" })
			}, options)
		]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.CycleMap"
});

/**
 * OpenStreetBrowser rendering of OpenStreetMap data. See http://openstreetbrowser.org/.
*/
OpenLayers.Layer.cdauth.OSM.OpenStreetBrowser = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://www.openstreetbrowser.org/tiles/base/${z}/${x}/${y}.png", OpenLayers.Util.extend({numZoomLevels: 19, attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://www.openstreetbrowser.org/\">OpenStreetBrowser</a>" })}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.OpenStreetBrowser"
});

/**
 * OpenPisteMap rendering of OpenStreetMap data. See http://openpistemap.org/.
*/
OpenLayers.Layer.cdauth.OSM.OpenPisteMap = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://tiles.openpistemap.org/contours/${z}/${x}/${y}.png", OpenLayers.Util.extend({numZoomLevels: 18, attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://www.openpistemap.org/\">OpenPisteMap</a>" })}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.OpenPisteMap"
});

/**
 * OSM Reit- und Wanderkarte rendering of OSM foot- and bridle ways. See http://osmc.broadbox.de/.
*/
OpenLayers.Layer.cdauth.OSM.Wanderkarte = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://topo.geofabrik.de/trails/${z}/${x}/${y}.png", OpenLayers.Util.extend({minZoomLevel: 8, maxZoomLevel: 15, attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://osmc.broadbox.de/\">OSMC Reit- und Wanderkarte</a>" })}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.Wanderkarte"
});

/**
 * Hike & Bike Map (http://hikebikemap.de/)
*/
OpenLayers.Layer.cdauth.OSM.HikeAndBike = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://toolserver.org/tiles/hikebike/${z}/${x}/${y}.png", OpenLayers.Util.extend({attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://hikebikemap.de/\">Hike &amp; Bike Map</a>" })}, options) ]);
	}
});

/**
 * OpenStreetMap data rendering by ÖPNV-Karte (PSV map).
*/
OpenLayers.Layer.cdauth.OSM.OPNVKarte = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://tile.xn--pnvkarte-m4a.de/tilegen/${z}/${x}/${y}.png", OpenLayers.Util.extend({numZoomLevels: 19, attribution: OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://www.xn--pnvkarte-m4a.de/\">ÖPNV-Karte</a>" })}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.OPNVKarte"
});

/**
 * Parent class for MapSurfer (http://www.mapsurfer.net/) renderings.
*/
OpenLayers.Layer.cdauth.OSM.MapSurfer = OpenLayers.Class(OpenLayers.Layer.OSM, {
	attribution : OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://www.mapsurfer.net/\">MapSurfer</a>" }),
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.MapSurfer"
});

/**
 * MapSurfer road map.
*/
OpenLayers.Layer.cdauth.OSM.MapSurfer.Road = OpenLayers.Class(OpenLayers.Layer.cdauth.OSM.MapSurfer, {
	initialize : function(name, options) {
		OpenLayers.Layer.cdauth.OSM.MapSurfer.prototype.initialize.apply(this, [ name, "http://tiles1.mapsurfer.net/tms_r.ashx?x=${x}&y=${y}&z=${z}", options ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.MapSurfer.Road"
});

/**
 * MapSurfer topographic map.
*/
OpenLayers.Layer.cdauth.OSM.MapSurfer.Topographic = OpenLayers.Class(OpenLayers.Layer.cdauth.OSM.MapSurfer, {
	initialize : function(name, options) {
		OpenLayers.Layer.cdauth.OSM.MapSurfer.prototype.initialize.apply(this, [ name, "http://tiles2.mapsurfer.net/tms_t.ashx?x=${x}&y=${y}&z=${z}", options ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.MapSurfer.Topographic"
});

/**
 * Izometrická 3D mapa ČR (http://osm.kyblsoft.cz/3dmapa/).
*/
OpenLayers.Layer.cdauth.OSM.Kybl3DMap = OpenLayers.Class(OpenLayers.Layer.OSM, {
	attribution : OpenLayers.String.format(OpenLayers.i18n("attribution-osm"), { rendering: "<a href=\"http://osm.kyblsoft.cz/3dmapa/\">OpenKyblMap</a>" }),
	initialize : function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://osm.kyblsoft.cz/3dmapa/tiles/${z}/${x}/${y}.jpg", OpenLayers.Util.extend({ numZoomLevels: 18 }, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.Kybl3DMap"
});

/**
 * OpenOrienteeringMap (http://oobrien.com/oom/) Street-O overlay.
*/
OpenLayers.Layer.cdauth.OSM.OOMStreets = OpenLayers.Class(OpenLayers.Layer.OSM, {
	attribution : OpenLayers.i18n("attribution-oom-streets"),
	initialize : function(name, options) {
		// New world-wide tiles. Aren’t transparent anymore so not as good for using them as an overlay as the old ones. See http://www.openstreetmap.org/user/Ollie/diary/9223.
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://tiler1.censusprofiler.org/streeto/${z}/${x}/${y}.png", OpenLayers.Util.extend({ numZoomLevels: 19, isBaseLayer: false, opacity:0.25 }, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.OOMStreets"
});

/**
 * OpenOrienteeringMap (http://oobrien.com/oom/) names overlay.
*/
OpenLayers.Layer.cdauth.OSM.OOMLabels = OpenLayers.Class(OpenLayers.Layer.OSM, {
	attribution : OpenLayers.i18n("attribution-oom-labels"),
	initialize : function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://tiler1.censusprofiler.org/labelsonly/${z}/${x}/${y}.png", OpenLayers.Util.extend({ numZoomLevels: 19, isBaseLayer: false }, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.OOMLabels"
});

/**
 * Relief rendering from Hike & Bike map (http://hikebikemap.de/)
*/
OpenLayers.Layer.cdauth.other.Relief = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://toolserver.org/~cmarqu/hill/${z}/${x}/${y}.png", OpenLayers.Util.extend({isBaseLayer: false, attribution: OpenLayers.i18n("attribution-relief") }, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.other.Relief"
});

/**
 * Hiking symbol overlay by Lonvia (http://osm.lonvia.de/)
*/
OpenLayers.Layer.cdauth.other.Hiking = OpenLayers.Class(OpenLayers.Layer.OSM, {
	initialize: function(name, options) {
		OpenLayers.Layer.OSM.prototype.initialize.apply(this, [ name, "http://osm.lonvia.de/hiking/${z}/${x}/${y}.png", OpenLayers.Util.extend({ isBaseLayer: false, attribution: OpenLayers.i18n("attribution-hiking") }, options) ]);
	}
});

/**
 * Ordnance Survey Street View tiles from http://os.openstreetmap.org/.
*/
OpenLayers.Layer.cdauth.other.OSStreetView = OpenLayers.Class(OpenLayers.Layer.XYZ, {
	attribution : OpenLayers.i18n("attribution-os-streetview"),

	initialize : function(name, options) {
		OpenLayers.Layer.XYZ.prototype.initialize.apply(this, [ name, [ "http://a.os.openstreetmap.org/sv/${z}/${x}/${y}.png", "http://b.os.openstreetmap.org/sv/${z}/${x}/${y}.png", "http://c.os.openstreetmap.org/sv/${z}/${x}/${y}.png" ], options ]);
	}
});

/**
 * Set this to your Google Maps API key (http://code.google.com/apis/maps/signup.html) prior to adding the Google layers
 * to your map. In theory, this will asynchronously include the API JavaScript file as soon as the Google layers
 * are added to the map using {@link OpenLayers.Map.cdauth.addAllAvailableGoogleLayers()}. In practice, it is
 * currently impossible to do that because the Google Maps API relies on document.write(), so you have to leave this value null.
 * You still have to include the JavaScript file http://maps.google.com/maps?file=api&v=2&key=[Your key] manually,
 * but you can do that after adding the Google Layers, they will then be added as soon as the API is loaded.
 * @var String
*/
OpenLayers.Layer.cdauth.Google.API_KEY = null;

/**
 * Loads the Google Maps API with the API key set in {@link OpenLayers.Layer.cdauth.Google.API_KEY} and calls the given callback
 * function as soon as it’s loaded.
 * @param Function callback
 * @return void
*/
OpenLayers.Layer.cdauth.Google.loadAPI = function(callback) {
	var url = null;
	if(OpenLayers.Layer.cdauth.Google.API_KEY != null)
		url = "http://maps.google.com/maps?file=api&v=2&key="+encodeURIComponent(OpenLayers.Layer.cdauth.Google.API_KEY);
	loadJavaScript(url, function() { return window.GMap2 != undefined; }, callback);
};

/**
 * Google Streets (http://maps.google.com/)
*/
OpenLayers.Layer.cdauth.Google.Maps = OpenLayers.Class(OpenLayers.Layer.Google, {
	initialize: function(name, options) {
		OpenLayers.Layer.Google.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({sphericalMercator: true}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.Maps"
});

/**
 * Google Satellite (http://maps.google.com/)
*/
OpenLayers.Layer.cdauth.Google.MapsSatellite = OpenLayers.Class(OpenLayers.Layer.cdauth.Google.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Google.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: G_SATELLITE_MAP, numZoomLevels: 22}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.MapsSatellite"
});

/**
 * Google Hybrid (Streets and Satellite) (http://maps.google.com/)
*/
OpenLayers.Layer.cdauth.Google.MapsHybrid = OpenLayers.Class(OpenLayers.Layer.cdauth.Google.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Google.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: G_HYBRID_MAP}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.MapsHybrid"
});

/**
 * Google Terrain (http://maps.google.com/)
*/
OpenLayers.Layer.cdauth.Google.MapsTerrain = OpenLayers.Class(OpenLayers.Layer.cdauth.Google.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Google.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: G_PHYSICAL_MAP}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.MapsTerrain"
});

/**
 * Google MapMaker streets (http://www.google.com/mapmaker)
*/
OpenLayers.Layer.cdauth.Google.MapMaker = OpenLayers.Class(OpenLayers.Layer.cdauth.Google.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Google.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: G_MAPMAKER_NORMAL_MAP}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.MapMaker"
});

/**
 * Google MapMaker hybrid (streets and satellite) (http://www.google.com/mapmaker)
*/
OpenLayers.Layer.cdauth.Google.MapMakerHybrid = OpenLayers.Class(OpenLayers.Layer.cdauth.Google.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Google.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: G_MAPMAKER_HYBRID_MAP}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Google.MapMakerHybrid"
});

/**
 * Set this to your Yahoo Maps App ID (which is any string you want) prior to adding the Yahoo layers
 * to your map. In theory, this will asynchronously include the API JavaScript file as soon as the Yahoo layers
 * are added to the map using {@link OpenLayers.Map.cdauth.addAllAvailableYahooLayers()}. In practice, it is
 * currently impossible to do that because the Yahoo Maps API relies on document.write(), so you have to leave this value null.
 * You still have to include the JavaScript file http://api.maps.yahoo.com/ajaxymap?v=3.0&appid=[Your App ID] manually,
 * but you can do that after adding the Yahoo Layers, they will then be added as soon as the API is loaded.
 * @var String
*/
OpenLayers.Layer.cdauth.Yahoo.APPID = null;

/**
 * Loads the Yahoo Maps API with the App ID set in {@link OpenLayers.Layer.cdauth.Yahoo.APPID} and calls the given callback
 * function as soon as it’s loaded.
 * @param Function callback
 * @return void
*/
OpenLayers.Layer.cdauth.Yahoo.loadAPI = function(callback) {
	var url = null;
	if(OpenLayers.Layer.cdauth.Yahoo.APPID != null)
		url = "http://api.maps.yahoo.com/ajaxymap?v=3.0&appid="+encodeURIComponent(OpenLayers.Layer.cdauth.Yahoo.APPID);
	loadJavaScript(url, function() { return window.YMap != undefined; }, callback);
};

/**
 * Yahoo Streets (http://maps.yahoo.com/)
*/
OpenLayers.Layer.cdauth.Yahoo.Maps = OpenLayers.Class(OpenLayers.Layer.Yahoo, {
	initialize: function(name, options) {
		OpenLayers.Layer.Yahoo.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({sphericalMercator: true}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Yahoo.Maps"
});

/**
 * Yahoo Satellite (http://maps.yahoo.com/)
*/
OpenLayers.Layer.cdauth.Yahoo.Satellite = OpenLayers.Class(OpenLayers.Layer.cdauth.Yahoo.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Yahoo.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: YAHOO_MAP_SAT}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Yahoo.Satellite"
});

/**
 * Yahoo Hybrid (Streets and Satellite)
*/
OpenLayers.Layer.cdauth.Yahoo.Hybrid = OpenLayers.Class(OpenLayers.Layer.cdauth.Yahoo.Maps, {
	initialize: function(name, options) {
		OpenLayers.Layer.cdauth.Yahoo.Maps.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({type: YAHOO_MAP_HYB}, options) ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Yahoo.Hybrid"
});

/**
 * Extends a FramedCloud with various useful features. An event is triggered during closing instead of passing the callback function
 * to the initialize function. You may pass a DOM element for the popup content instead of HTML code.
 * This FramedCloud supports the OpenLayers.Popup.OPACITY setting. On mouse over, the opacity is set to 1.
 * @event close
*/

OpenLayers.Popup.FramedCloud.cdauth = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {
	contentDom: null,
	autoSize: true,
	_defaultZIndex : null,
	initialize: function(id, lonlat, contentSize, contentDom, anchor, closeBox, closeBoxCallback) {
		var closeCallback = function(e){ if(closeBoxCallback) closeBoxCallback(); OpenLayers.Event.stop(e); this.events.triggerEvent("close"); };
		OpenLayers.Popup.FramedCloud.prototype.initialize.apply(this, [ id, lonlat, contentSize, null, anchor, closeBox, closeCallback ] );

		this.events.addEventType("close");

		this.setContentHTML(contentDom);

		OpenLayers.Event.observe(this.div, "mouseover", OpenLayers.Function.bindAsEventListener(function(){ changeOpacity(this.div, 1.0); }, this));
		OpenLayers.Event.observe(this.div, "mouseout", OpenLayers.Function.bindAsEventListener(function(){ changeOpacity(this.div, this.opacity); }, this));
	},
	setContentHTML: function(contentDom) {
		if(typeof contentDom == "object")
		{
			this.contentDom = contentDom;
			this.contentHTML = null;
		}
		else if(contentDom != null)
		{
			this.contentDom = null;
			this.contentHTML = contentDom;
		}

		if(this.contentHTML != null)
			OpenLayers.Popup.FramedCloud.prototype.setContentHTML.apply(this, arguments);
		else if(this.contentDiv != null && this.contentDom != null && this.contentDom != this.contentDiv.firstChild)
		{
			while(this.contentDiv.firstChild)
				this.contentDiv.removeChild(this.contentDiv.firstChild);
			this.contentDiv.appendChild(this.contentDom);

			// Copied from OpenLayers.Popup.setContentHTML():
			if (this.autoSize)
			{
                this.registerImageListeners();
                this.updateSize();
            }
		}
	},
	setOpacity: function(opacity) {
		if(opacity != undefined)
			this.opacity = opacity;

		if(this.div != null)
		{
			OpenLayers.Util.modifyDOMElement(this.div, null, null, null, null, null, null, this.opacity);
			if(this._defaultZIndex)
				this.div.style.zIndex = this._defaultZIndex;
		}
	},
	unsetOpacity: function() {
		if(this.div != null)
		{
			this._defaultZIndex = this.div.style.zIndex;
			OpenLayers.Util.modifyDOMElement(this.div, null, null, null, null, null, null, 1.0);
			this.div.style.zIndex = 999;
		}
	},
	destroy: function() {
		this.contentDom = null;
		OpenLayers.Popup.FramedCloud.prototype.destroy.apply(this, arguments);
	},
	CLASS_NAME : "OpenLayers.Popup.FramedCloud.cdauth"
});

/**
 * A Markers layer with a function to easily add a marker with a popup.
 * When the layer is hidden, the popups are hidden as well. They open again when the layer is made visible again.
 * @event markersChanged A marker popup has been opened or closed.
*/

OpenLayers.Layer.cdauth.Markers = OpenLayers.Class(OpenLayers.Layer.Markers, {
	defaultIcon : new OpenLayers.Icon('http://osm.cdauth.de/map/marker.png', new OpenLayers.Size(21,25), new OpenLayers.Pixel(-9, -25)),
	openPopupsOnShow : [ ],
	initialize : function(name, options) {
		OpenLayers.Layer.Markers.prototype.initialize.apply(this, [ name, OpenLayers.Util.extend({zoomableInLayerSwitcher: true, projection: new OpenLayers.Projection("EPSG:4326")}, options) ]);
		this.events.addEventType("markersChanged");

		this.events.register("visibilitychanged", this, function() {
			if(this.getVisibility())
			{ // Layer has been made visible: re-open popups that were hidden during the last hiding
				for(var i=0; i<this.openPopupsOnShow.length; i++)
					this.openPopupsOnShow[i].cdauthFeature.popup.show();
				this.openPopupsOnShow = [ ];
			}
			else
			{ // Hide all popups and save the visible ones
				for(var i=0; i<this.markers.length; i++)
				{
					if(this.markers[i].cdauthFeature.popup.visible())
					{
						this.openPopupsOnShow.push(this.markers[i]);
						this.markers[i].cdauthFeature.popup.hide();
					}
				}
			}
		});
	},
	/**
	 * Creates a marker with a popup (OpenLayers.Popup.FramedCloud) on this layer. The visibility of the popup can be toggled by clicking
	 * on the marker.
	 * @param OpenLayers.LonLat lonlat The position of the marker.
	 * @param String|DOMElement popupContent The HTML content of the popup.
	 * @param boolean popupVisible Should the popup be visible initially?
	 * @param OpenLayers.Icon Use this icon instead of the default icon.
	 * @param boolean noPan Don’t move the map view to the marker.
	 * @return The newly created OpenLayers.Marker object. It contains the additional property cdauthFeature, which is the OpenLayers.Feature
	 * that connects the marker with the popup. The marker triggers the events “open” or “close” when changing the visibility of the popup.
	*/
	createMarker : function(lonlat, popupContent, popupVisible, icon, noPan) {
		var feature = new OpenLayers.Feature(this, lonlat.clone().transform(this.projection, this.map.getProjectionObject()));
		feature.data.icon = icon ? icon : this.defaultIcon.clone();
		if(popupContent)
		{
			feature.popupClass = OpenLayers.Popup.FramedCloud.cdauth;
			feature.data.popupContentHTML = popupContent;
		}
		var marker = feature.createMarker();
		marker.events.addEventType("close");
		marker.events.addEventType("open");
		if(popupContent)
		{
			feature.createPopup(true);
			feature.popup.panMapIfOutOfView = !noPan;
			this.map.addPopup(feature.popup);
			feature.popup.events.register("close", feature, function(e)
			{
				this.popup.hide();
				OpenLayers.Event.stop(e);
				layer.events.triggerEvent("markersChanged");
				this.marker.events.triggerEvent("close");
			});

			if(popupVisible)
			{
				feature.popup.show();
				feature.popup.updateSize();
			}
			else
				feature.popup.hide();

			var layer = this;
			marker.events.register("click", feature, function(e) {
				this.popup.toggle();
				if(this.popup.visible())
					this.popup.updateSize();
				OpenLayers.Event.stop(e);
				this.marker.events.triggerEvent(this.popup.visible() ? "open" : "close");
				layer.events.triggerEvent("markersChanged");
			});
			marker.events.register("mouseover", feature.popup, function(){this.unsetOpacity()});
			marker.events.register("mouseout", feature.popup, function(){this.setOpacity()});
		}
		marker.cdauthFeature = feature;
		this.addMarker(marker);
		return marker;
	},
	removeMarker : function(marker)
	{
		if(marker.cdauthFeature && marker.cdauthFeature.popup)
			marker.cdauthFeature.popup.destroy();
		OpenLayers.Layer.Markers.prototype.removeMarker.apply(this, arguments);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.Markers"
});

/**
 * A Markers layer for adding LonLat markers. These markers display their coordinates and list various Permalinks to other map services.
 * See OpenLayers.Control.cdauth.createMarker for the functionality of creating a marker when clicking.
 * @event markerAdded
 * @event markerRemoved
*/

OpenLayers.Layer.cdauth.Markers.LonLat = OpenLayers.Class(OpenLayers.Layer.cdauth.Markers, {
	/**
	 * The projection in which coordinates should be displayed in the popups.
	*/
	readableProjection : new OpenLayers.Projection("EPSG:4326"),

	/**
	 * @param OpenLayers.Icon defaultIcon The icon to be used for the markers added by addLonLatMarker()
	*/
	initialize : function(name, options) {
		OpenLayers.Layer.cdauth.Markers.prototype.initialize.apply(this, arguments);
		this.events.addEventType("markerAdded");
		this.events.addEventType("markerRemoved");

		this.events.register("markerAdded", this, function(){ this.events.triggerEvent("queryObjectChanged"); });
		this.events.register("markerRemoved", this, function(){ this.events.triggerEvent("queryObjectChanged"); });
	},
	addLonLatMarker : function(lonlat, title, icon)
	{
		var layer = this;

		var marker = this.createMarker(lonlat, ".", true);
		if(title)
			marker.cdauthTitle = title;
		marker.events.register("close", this, function(evt) { var feature = marker.cdauthFeature; delete marker.cdauthFeature; this.removeMarker(marker); feature.destroyMarker(); feature.destroyPopup(); this.events.triggerEvent("markerRemoved"); OpenLayers.Event.stop(evt); });
		this.map.events.register("zoomend", this, this.resetPopupContent);
		this.resetPopupContent();
		this.events.triggerEvent("markerAdded");
	},

	/**
	 * Is executed automatically on a zoom level change, recreates the Permalinks of the markers.
	*/
	resetPopupContent : function()
	{
		for(var i=0; i<this.markers.length; i++)
		{
			var content = document.createElement("div");
			if(this.markers[i].cdauthTitle)
			{
				var heading = document.createElement("h6");
				heading.className = "marker-heading";
				heading.appendChild(document.createTextNode(this.markers[i].cdauthTitle));
				content.appendChild(heading);
			}
			content.appendChild(makePermalinks(this.markers[i].lonlat.clone().transform(this.map.getProjectionObject(), this.readableProjection), this.map.getZoom()));
			this.markers[i].cdauthFeature.popup.setContentHTML(content);
		}
	},
	getQueryObject : function() {
		var obj = { };
		for(var i=0; i<this.markers.length; i++)
		{
			var lonlat = this.markers[i].lonlat.clone().transform(this.map.getProjectionObject(), this.readableProjection);
			obj[i] = {
				lon : Math.round(lonlat.lon*100000000)/100000000,
				lat : Math.round(lonlat.lat*100000000)/100000000
			};
			if(this.markers[i].cdauthTitle)
				obj[i].title = this.markers[i].cdauthTitle;
		}
		return obj;
	},
	setQueryObject : function(obj) {
		this.clearMarkers();
		for(var i in obj)
		{
			if(obj[i].lon == undefined || obj[i].lat == undefined)
				continue;
			this.addLonLatMarker(new OpenLayers.LonLat(1*obj[i].lon, 1*obj[i].lat), (obj[i].title != undefined) ? htmlspecialchars(obj[i].title) : null);
		}
	},

	CLASS_NAME : "OpenLayers.Layer.cdauth.Markers.LonLat"
});

/**
 * A click control to add markers to a OpenLayers.Layer.cdauth.Markers.LonLat layer.
 * Add an instance of this to your map using OpenLayers.Map.cdauth.addControl() and activate() it.
*/

OpenLayers.Control.cdauth.CreateMarker = OpenLayers.Class(OpenLayers.Control, {
	/**
	 * @var OpenLayers.Layer.cdauth.Markers.LonLat
	*/
	cdauthLayer : null,

	title : OpenLayers.i18n("Create a marker"),

	/**
	 * @param OpenLayers.Layer.cdauth.Markers.LonLat cdauthLayer
	*/
	initialize: function(cdauthLayer, options) {
		this.cdauthLayer = cdauthLayer;

		OpenLayers.Control.prototype.initialize.apply(this, [ options ]);
	},

	destroy: function() {
		if (this.handler)
			this.handler.destroy();
		this.handler = null;

		OpenLayers.Control.prototype.destroy.apply(this, arguments);
	},

	draw: function() {
		this.handler = new OpenLayers.Handler.Click(this, {'click': this.click}, { 'single': true, 'double': false, 'pixelTolerance': 0, 'stopSingle': false, 'stopDouble': false });
	},

	/**
	 * Map clicking event handler.
	*/
	click: function(e) {
		if(!this.map) return true;

		var lonlat = this.map.getLonLatFromViewPortPx(e.xy).clone().transform(this.map.getProjectionObject(), this.cdauthLayer.projection);
		this.cdauthLayer.addLonLatMarker(lonlat);
	},

	CLASS_NAME: "OpenLayers.Control.cdauth.CreateMarker"
});

if(OpenLayers.cdauth == undefined)
	OpenLayers.cdauth = { };

/**
 * An abstract class whose implementations connect to a NameFinder.
*/
OpenLayers.cdauth.NameFinder = OpenLayers.Class({
	/**
	 * Perform a search through a NameFinder. This function itself does not connect to an actual NameFinder, it only finds one result if
	 * the query String consists of coordinates encoded in a Lat,Lon string or an OpenStreetMap Permalink.
	 * @param String query The query string.
	 * @param Function callbackFunction A function that is executed when the search has been performed. The function takes one argument that
	 *                                  contains an array with the results. It is undefined if an error has occurred. Each result is an object
	 *                                  with the following properties:
	 *                                  * OpenLayers.LonLat lonlat The coordinates of the result
	 *                                  * String name: The title of the result.
	 *                                  * String info: Some additional information about the result, such as the type.
	 *                                  * String zoom: The zoom that the result should be shown at. Might be undefined.
	 *                                  * OpenLayers.Bounds zoombox: The bounding box that the result should be shown in. Might be undefined.
	 * @return void
	*/
	find : function(query, callbackFunction) {
		query.replace(/^\s+/, "").replace(/\s+$/, "");
		var query_match;
		var query_urlPart;
		if(query_match = query.match(/^http:\/\/(www\.)?osm\.org\/go\/([-A-Za-z0-9_@]+)/))
		{ // Coordinates, shortlink
			var shortlink = decodeShortLink(query_match[2]);
			results = [ {
				zoom : shortlink.zoom,
				lonlat : shortlink.lonlat,
				info : OpenLayers.i18n("Coordinates"),
				name : shortlink.lonlat.lat + ", " + shortlink.lonlat.lon
			} ];
			callbackFunction(results);
		}
		else if(query_match = query.match(/^(-?\s*\d+([.,]\d+)?)\s*[,;]?\s*(-?\s*\d+([.,]\d+)?)$/))
		{ // Coordinates
			results = [ {
				lonlat : new OpenLayers.LonLat(query_match[3].replace(",", ".").replace(/\s+/, ""), query_match[1].replace(",", ".").replace(/\s+/, "")),
				info : OpenLayers.i18n("Coordinates"),
				zoom : 15
			} ];
			results[0].name = results[0].lonlat.lat+","+results[0].lonlat.lon;
			callbackFunction(results);
		}
		else if((query_match = query.match(/^http:\/\/.*\?(.*)$/)) && typeof (query_urlPart = decodeQueryString(query_match[1])).lon != "undefined" && typeof query_urlPart.lat != "undefined")
		{ // OpenStreetMap Permalink
			results = [ {
				lonlat : new OpenLayers.LonLat(query_urlPart.lon, query_urlPart.lat),
				info : OpenLayers.i18n("Coordinates"),
				name : query_urlPart.lat + ", " + query_urlPart.lon
			} ];
			if(query_urlPart.zoom != undefined)
				results[0].zoom = 1*query_urlPart.zoom;
			callbackFunction(results);
		}
		else
			callbackFunction([ ]);
	}
});

/**
 * An implementation of the NameFinder that contacts Nominatim (http://wiki.openstreetmap.org/wiki/Nominatim).
*/
OpenLayers.cdauth.NameFinder.Nominatim = OpenLayers.Class(OpenLayers.cdauth.NameFinder, {
	nameFinderURL : "http://nominatim.openstreetmap.org/search",

	/**
	 * @param String nameFinderURL http://nominatim.openstreetmap.org/search. To work around the same origin policy, pass a wrapper that lives on your webspace.
	*/
	initialize : function(nameFinderURL) {
		if(nameFinderURL)
			this.nameFinderURL = nameFinderURL;
	},
	find : function(query, callbackFunction) {
		query.replace(/^\s+/, "").replace(/\s+$/, "");

		var nameFinder = this;

		OpenLayers.cdauth.NameFinder.prototype.find.apply(this, [ query, function(results) {
			if(results != undefined && results.length > 0)
				callbackFunction(results);
			else
			{ // NameFinder
				OpenLayers.Request.GET({
					url : nameFinder.nameFinderURL,
					params : { "q": query, "format" : "xml", "polygon" : "0", "addressdetails" : "0" },
					success : function(request) {
						var results = [ ];
						if(request.responseXML)
						{
							var searchresults = request.responseXML.getElementsByTagName("searchresults");
							if(searchresults.length > 0)
							{
								if(searchresults[0].getAttribute("findplace") == null || searchresults[0].getAttribute("findplace") == "" || searchresults[0].getAttribute("foundnearplace") == "yes")
								{
									var named = searchresults[0].childNodes;
									for(var i=0; i<named.length; i++)
									{
										if(named[i].nodeType != 1) continue;

										var box = named[i].getAttribute("boundingbox").split(",");
										results.push({
											zoombox : new OpenLayers.Bounds(box[2], box[1], box[3], box[0]),
											lonlat : new OpenLayers.LonLat(named[i].getAttribute("lon"), named[i].getAttribute("lat")),
											name : named[i].getAttribute("display_name"),
											info : named[i].getAttribute("class"),
											icon : named[i].getAttribute("icon")
										});
									}
								}
							}
						}
						callbackFunction(results);
					},
					failure : function() {
						callbackFunction();
					}
				});
			}
		} ]);
	}
});

/**
 * A markers layer to display the search results of the OpenStreetMap NameFinder.
 * @event lastSearchChange The value of lastSearch has changed.
 * @event searchBegin
 * @event searchSuccess The search results have been displayed
 * @event searchFailure No results have been found or an error occured
*/

OpenLayers.Layer.cdauth.Markers.GeoSearch = OpenLayers.Class(OpenLayers.Layer.cdauth.Markers, {
	lastSearch : false,

	/**
	 * @var OpenLayers.cdauth.NameFinder
	*/
	nameFinder : null,

	/**
	 * The marker icon to use for the first search result.
	 * @var OpenLayers.Icon
	*/
	highlightIcon : new OpenLayers.Icon("http://osm.cdauth.de/map/marker-green.png", new OpenLayers.Size(21,25), new OpenLayers.Pixel(-9, -25)),

	/**
	 * The icon type for Nominatim search result icons. Either "p" or "n", see http://www.sjjb.co.uk/mapicons/SJJBMapIconsv0.03/recoloured/, p has a transparent background, n a coloured.
	 * @var String
	*/
	iconType : "n",

	/**
	 * The icon size for Nominatim search result icons. 12, 16, 20, 24 or 32. See http://www.sjjb.co.uk/mapicons/SJJBMapIconsv0.03/recoloured/.
	 * @var Number
	*/
	iconSize : 24,

	/**
	 * @param String name
	 * @param OpenLayers.cdauth.NameFinder
	 * @param Object options
	*/
	initialize: function(name, nameFinder, options) {
		OpenLayers.Layer.cdauth.Markers.prototype.initialize.apply(this, [ name, options ]);

		this.nameFinder = nameFinder;

		this.events.addEventType("lastSearchChange");
		this.events.addEventType("searchBegin");
		this.events.addEventType("searchSuccess");
		this.events.addEventType("searchFailure");

		this.events.register("lastSearchChange", this, function(){ this.events.triggerEvent("queryObjectChanged"); });
		this.events.register("markersChanged", this, function(){ this.events.triggerEvent("queryObjectChanged"); });
	},

	/**
	 * Use the NameFinder to search in OpenStreetMap data and add the search results as markers to this layer.
	 * @param String query The search string.
	 * @param boolean dontzoom Don’t zoom to the search result but keep the current view of the map. If this is set, no alert box will indicate that the search returned no results.
	 * @param Array markersvisible Contains a boolean value (or a string representing a boolean) for each search result to indicate if a popup should be opened.
	*/
	geoSearch: function(query, dontzoom, markersvisible)
	{
		var layer = this;

		if(typeof markersvisible == "string")
		{
			var markersvisible_obj = { };
			for(var i=0; i<markersvisible.length; i++)
				markersvisible_obj[i] = markersvisible.charAt(i);
			markersvisible = markersvisible_obj;
		}

		this.clearMarkers();
		this.lastSearch = false;
		this.events.triggerEvent("lastSearchChange");

		if(!query)
			return;

		this.events.triggerEvent("searchBegin");

		this.nameFinder.find(query, function(results){ layer.showResults(results == undefined ? [ ] : results, query, dontzoom, markersvisible); });
	},
	showResults : function(results, query, dontzoom, markersvisible) {
		for(var i=results.length-1; i>=0; i--)
		{
			var layer = this;
			var content = document.createElement("div");

			var content_heading = document.createElement("result-heading");
			var content_strong = document.createElement("strong");
			if(results[i].name)
			{
				content_strong.appendChild(document.createTextNode(results[i].name));
				content_heading.appendChild(content_strong);
				content_heading.appendChild(document.createTextNode(" ("+(results[i].info ? results[i].info : OpenLayers.i18n("unknown"))+") "));
			}
			else
			{
				content_strong.appendChild(document.createTextNode((results[i].info ? results[i].info : OpenLayers.i18n("unknown"))+" "));
				content_heading.appendChild(content_strong);
			}

			var content_zoom = document.createElement("a");
			content_zoom.href = "#";
			(function(i){
				content_zoom.onclick = function() {
					if(results[i].zoombox)
						layer.map.zoomToExtent(results[i].zoombox.clone().transform(new OpenLayers.Projection("EPSG:4326"), layer.map.getProjectionObject()));
					else
						layer.map.setCenter(results[i].lonlat.clone().transform(new OpenLayers.Projection("EPSG:4326"), layer.map.getProjectionObject()), results[i].zoom);
					return false;
				};
			})(i);
			content_zoom.appendChild(document.createTextNode(OpenLayers.i18n("[Zoom]")));
			content_heading.appendChild(content_zoom);
			content.appendChild(content_heading);
			var zoom;
			if(results[i].zoom != undefined)
				zoom = results[i].zoom;
			else if(results[i].zoombox != undefined)
				zoom = this.map.getZoomForExtent(results[i].zoombox.clone().transform(new OpenLayers.Projection("EPSG:4326"), layer.map.getProjectionObject()));
			else
				zoom = this.map.getZoom();
			content.appendChild(makePermalinks(results[i].lonlat, zoom));

			var icon = null;
			if(results[i].icon)
				icon = new OpenLayers.Icon(results[i].icon.replace(/\.p\.20\.png$/, "."+this.iconType+"."+this.iconSize+".png"), new OpenLayers.Size(this.iconSize, this.iconSize), new OpenLayers.Pixel(-this.iconSize/2, -this.iconSize/2));
			else if(i == 0)
				icon = this.highlightIcon.clone();
			var marker = this.createMarker(
				results[i].lonlat,
				content,
				((markersvisible && typeof markersvisible[i] != "undefined" && markersvisible[i] != "0") || ((!markersvisible || typeof markersvisible[i] == "undefined") && i==0)),
				icon,
				dontzoom
			);
		}

		if(!dontzoom)
		{
			if(results.length == 1)
			{
				if(results[0].zoombox)
					layer.map.zoomToExtent(results[0].zoombox.clone().transform(new OpenLayers.Projection("EPSG:4326"), layer.map.getProjectionObject()));
				else
					layer.map.setCenter(results[0].lonlat.clone().transform(new OpenLayers.Projection("EPSG:4326"), layer.map.getProjectionObject()), results[0].zoom);
			}
			else if(results.length > 1)
				this.map.zoomToExtent(this.getDataExtent());
		}

		this.lastSearch = query;
		this.events.triggerEvent("lastSearchChange");

		var eventType = (results.length == 0 ? "searchFailure" : "searchSuccess");
		this.events.triggerEvent(eventType, { object : this, type : eventType, element: null, dontzoom: dontzoom, query: query });
	},
	getQueryObject : function() {
		var obj = {
		};

		if(this.lastSearch)
		{
			obj.search = this.lastSearch;
			var smopen = "";
			var smchanged = false;
			for(var i=0; i < this.markers.length; i++)
			{
				var visible = this.markers[i].cdauthFeature.popup ? this.markers[i].cdauthFeature.popup.visible() : false;
				smopen = (visible ? "1" : "0") + smopen; // Reverse order, first marker is last in the list for z-index reasons
				if(visible != (i == this.markers.length-1)) // First marker is open by default
					smchanged = true;
			}
			if(smchanged)
				obj.smopen = smopen;
		}
		return obj;
	},
	setQueryObject : function(obj) {
		// If obj.search is undefined, call nevertheless to reset the search
		this.geoSearch(obj.search, true, obj.smopen);
	},

	CLASS_NAME : "OpenLayers.Layer.cdauth.Markers.GeoSearch"
});

/**
 * Displays an XML file on the map (such as GPX, KML or OSM) auto-determining of the format. The colour is
 * randomly assigned.
 * If you set OpenLayers.Layer.cdauth.XML.relationURL, OSM sub-relations will be loaded in additional requests.
 * Include the JavaScript http://osm.cdauth.eu/ajax-proxy/ajax-proxy.js to "disable" the Same Origin Policy.
 * Otherwise, you might have to set OpenLayers.ProxyHost to a URL on your server. The actual URL will be appended
 * to that in encoded form.
*/

OpenLayers.Layer.cdauth.XML = OpenLayers.Class(OpenLayers.Layer.GML, {
	cdauthURL : null,
	relations : { },
	colour : null,
	initialize : function(name, url, options) {
		this.cdauthURL = url;

		if(this.colour == null)
		{
			switch((OpenLayers.Layer.cdauth.XML.colourCounter++)%4)
			{
				case 0: this.colour = "red"; break;
				case 1: this.colour = "blue"; break;
				case 2: this.colour = "green"; break;
				case 3: this.colour = "black"; break;
			}
		}

		OpenLayers.Layer.GML.prototype.initialize.apply(this, [ name ? name : url, url, OpenLayers.Util.extend({
			style: {
				strokeColor: this.colour,
				strokeWidth: 3,
				strokeOpacity: 0.5
			},
			projection: new OpenLayers.Projection("EPSG:4326"),
			zoomableInLayerSwitcher: true,
			shortName : "xml"+OpenLayers.Layer.cdauth.XML.shortNameI++
		}, options) ]);
	},
	loadGML : function(url) {
		if(!url)
		{
			if(this.url)
				OpenLayers.Layer.GML.prototype.loadGML.apply(this, [ ]);
		}
		else
		{
			this.events.triggerEvent("loadstart");
			OpenLayers.Request.GET({
				url: url,
				success: this.requestSuccess,
				failure: this.requestFailure,
				scope: this
			});
		}
	},
	requestSuccess: function(request) {
		if(request.responseXML && request.responseXML.documentElement)
		{
			switch(request.responseXML.documentElement.tagName)
			{
				case "gpx": this.format = OpenLayers.Format.GPX; break;
				case "osm": this.format = OpenLayers.Format.OSM; break;
				case "kml": this.format = OpenLayers.Format.KML; break;
			}
		}
		this.formatOptions = { extractAttributes: false };
		try
		{
			OpenLayers.Layer.GML.prototype.requestSuccess.apply(this, arguments);
		}
		catch(e)
		{
			alert(OpenLayers.i18n("Error parsing file."));
			this.events.triggerEvent("loadend");
		}

		if(OpenLayers.Layer.cdauth.XML.relationURL && this.format == OpenLayers.Format.OSM && request.responseXML)
		{
			var relations = request.responseXML.getElementsByTagName("relation");
			for(var i=0; i<relations.length; i++)
			{
				var id = relations[i].getAttribute("id");
				if(this.relations[id])
					continue;
				this.relations[id] = true;

				var url = OpenLayers.String.format(OpenLayers.Layer.cdauth.XML.relationURL, {"id": id});
				if(url == this.url)
					continue;
				this.loadGML(url);
			}
		}
	},
	getQueryObject : function() {
		var obj = { };
		if(this.removableInLayerSwitcher)
			obj.url = this.cdauthURL;
		return obj;
	},
	setQueryObject : function(obj) {
		if(obj.url != undefined && obj.url != this.cdauthURL)
		{
			this.cdauthUrl = obj.url;
			this.setUrl(obj.url);
		}
	},

	CLASS_NAME : "OpenLayers.Layer.cdauth.XML"
});

/**
 * Set this to the XML URL that shall be loaded for relations referenced in OSM files. “${id}" will be replaced by the ID of the relation.
 * @var String
*/
OpenLayers.Layer.cdauth.XML.relationURL = "http://www.openstreetmap.org/api/0.6/relation/${id}/full";

OpenLayers.Layer.cdauth.XML.colourCounter = 1;
OpenLayers.Layer.cdauth.XML.shortNameI = 1;

/**
 * A class to control the URL hash part.
 * @event hashChanged The URL hash has been changed by the user
*/
OpenLayers.URLHashHandler = OpenLayers.Class({
	/**
	 * The interval in milliseconds, how often location.hash shall be checked for changes.
	 * @var Number
	*/
	interval : 500,

	/**
	 * Is set to true on the map event newHash. Makes update() update the location hash.
	 * @var boolean
	*/
	hashChanged : false,

	/**
	 * The return value of setInterval.
	*/
	intervalObject : null,

	/**
	 * The last value of location.hash that was set by this class. If it differs from location.hash, the user has changed it.
	 * @var String
	*/
	lastHash : null,

	/**
	 * @var OpenLayers.Events
	*/
	events : null,

	initialize : function() {
		this.events = new OpenLayers.Events(this, null, [ "hashChanged" ]);
	},

	/**
	 * Starts the Interval that looks for changes.
	 * @return void
	*/
	start : function() {
		var obj = this;
		this.lastHash = this.getLocationHash();
		if(this.intervalObject == null)
			this.intervalObject = setInterval(function(){ obj.checkHash(); }, this.interval);
	},

	/**
	 * Stops the Interval that looks for changes.
	 * @return void
	*/
	stop : function() {
		if(this.intervalObject == null)
			return;
		clearInterval(this.intervalObject);
		this.intervalObject = null;
	},

	/**
	 * Checks if location.hash has changed and triggers an event then.
	 * @return void
	*/
	checkHash : function() {
		var oldHash = this.lastHash;
		this.lastHash = this.getLocationHash();
		if(this.lastHash != oldHash)
			this.events.triggerEvent("hashChanged", { oldHash: oldHash, newHash: this.lastHash });
	},

	/**
	 * Gets the part after the # in the URL.
	 * At least in Firefox, location.hash contains “&” if the hash part contains “%26”. This makes searching for URLs (such as OSM PermaLinks) hard and we work around that problem by extracting the desired value from location.href.
	 * @return String
	*/
	getLocationHash : function() {
		var match = location.href.match(/#(.*)$/);
		if(match)
			return match[1];
		else
			return "";
	},

	/**
	 * Sets the location has to the given hash.
	 * @param String hash The hash part without #
	 * @return void
	*/
	setLocationHash : function(hash)
	{
		var restart = false;
		if(this.intervalObject)
		{
			this.stop();
			restart = true;
		}

		location.hash = "#"+hash;

		if(restart)
			this.start();
	},

	CLASS_NAME: "OpenLayers.URLHashHandler"
});

/**
 * An instance of this class keeps the location hash part in sync with the Permalink of a map object.
 * @event hashChanged location.hash was changed.
*/
OpenLayers.Control.cdauth.URLHashHandler = OpenLayers.Class(OpenLayers.Control, {
	/**
	 * @var OpenLayers.URLHashHandler
	*/
	hashHandler : null,

	/**
	 * The minimum number of milliseconds that the map view has to stay the same for the location hash to be updated. This way it is not
	 * updated while scrolling the map.
	 * @var Number
	*/
	minRest : 750,

	locationUpdateTimeout : null,

	initialize : function() {
		OpenLayers.Control.prototype.initialize.apply(this, arguments);

		this.events.addEventType("hashChanged");

		this.hashHandler = new OpenLayers.URLHashHandler();
		this.hashHandler.events.register("hashChanged", this, this.updateMapView);
	},

	/**
	 * Initialises an interval that checks for changes in location.hash automatically.
	*/
	activate : function() {
		if(!OpenLayers.Control.prototype.activate.apply(this, arguments))
			return false;

		if(!this.map)
		{
			this.deactivate();
			return false;
		}

		this.map.events.register("newHash", this, this.newHashHandler);
		this.hashHandler.start();

		if(this.hashHandler.getLocationHash() != "")
			this.updateMapView();
		else
			this.updateLocationHash();

		return true;
	},

	deactivate : function() {
		if(!OpenLayers.Control.prototype.deactivate.apply(this, arguments))
			return false;

		this.hashHandler.stop();
		map.events.unregister("newHash", this, this.newHashHandler);

		return true;
	},

	newHashHandler : function() {
		if(this.locationUpdateTimeout)
		{
			clearTimeout(this.locationUpdateTimeout);
			this.locationUpdateTimeout = null;
		}

		var control = this;
		this.locationUpdateTimeout = setTimeout(function(){
			control.locationUpdateTimeout = null;
			control.updateLocationHash();
		}, this.minRest);
	},

	/**
	 * Updates location.hash to the current map view.
	*/
	updateLocationHash : function() {
		var queryObject = this.map.getQueryObject();
		if(!queryObject)
			return false;
		this.hashHandler.setLocationHash(encodeQueryString(queryObject));
		this.events.triggerEvent("hashChanged");
		return true;
	},

	/**
	 * Updates the map view to show the content of location.hash.
	*/
	updateMapView : function() {
		var query_object = decodeQueryString(this.hashHandler.getLocationHash());
		this.map.zoomToQuery(query_object);
		this.updateLocationHash();
	},

	CLASS_NAME : "OpenLayers.Control.cdauth.URLHashHandler"
});

/**
 * Adds a “Go home” link to the map in browsers that support geolocation. The link requests the current position of the user and zooms
 * the map there.
*/

OpenLayers.Control.cdauth.GeoLocation = OpenLayers.Class(OpenLayers.Control, {
	/**
	 * The zoom level to use when zooming to the user’s location.
	 * @var Number
	*/
	zoomLevel : 15,

	element : null,

	draw : function() {
		var ret = OpenLayers.Control.prototype.draw.apply(this, arguments);

		if(!navigator.geolocation)
			return ret;

		var control = this;

		if(!this.element)
		{
			this.element = document.createElement("a");
			this.element.appendChild(document.createTextNode("Go home"));
			this.element.href = "#";
			OpenLayers.Event.observe(this.element, "click",
				OpenLayers.Function.bindAsEventListener(function(e) {
					this.goToGeoLocation();
					OpenLayers.Event.stop(e);
				}, this)
			);
			this.div.appendChild(this.element);
		}

		return ret;
	},

	/**
	 * Requests the geolocation from the browser if it is supported and zooms there.
	 * @return void
	*/
	goToGeoLocation : function() {
		if(!this.map || !navigator.geolocation) return;
		var map = this.map;
		var zoomLevel = this.zoomLevel;
		navigator.geolocation.getCurrentPosition(function(position) {
			map.setCenter(new OpenLayers.LonLat(position.coords.longitude, position.coords.latitude).transform(new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject()), zoomLevel);
		});
	},

	CLASS_NAME : "OpenLayers.Control.cdauth.GeoLocation"
});

/**
 * A coordinate grid on the map. Draws coordinate lines on the map in a scale that maxHorizontalLines and maxVerticalLines aren’t exceeded.
*/
OpenLayers.Layer.cdauth.CoordinateGrid = OpenLayers.Class(OpenLayers.Layer.Vector, {
	/**
	 * The maximum number of horizontal coordinate lines on the viewport.
	 * @var Number
	*/
	maxHorizontalLines : 6,

	/**
	 * The maximum number of vertical coordinate lines on the viewport. If set to null, is automatically calculated from the viewport aspect ratio.
	 * @var Number
	*/
	maxVerticalLines : null,

	/**
	 * The line style of normal coordinate lines.
	 * @var OpenLayers.Feature.Vector.style
	*/
	styleMapNormal : { stroke: true, stokeWidth: 1, strokeColor: "black", strokeOpacity: 0.2 },

	/**
	 * The line style of an important coordinate line, such as a number dividable by 10.
	 * @var OpenLayers.Feature.Vector.style
	*/
	styleMapHighlight : { stroke: true, stokeWidth: 2, strokeColor: "black", strokeOpacity: 0.5 },

	/**
	 * The style of the grid line captions that display the degree number.
	 * @var OpenLayers.Feature.Vector.style
	*/
	labelStyleMapNormal : { fontColor: "#777", fontSize: "10px" },

	/**
	 * The style of the highlighted (see styleMapHighlight) grid line captions that display the degree number.
	 * @var OpenLayers.Feature.Vector.style
	*/
	labelStyleMapHighlight : { fontColor: "#666", fontSize: "10px", fontWeight: "bold" },

	horizontalLines : { },
	verticalLines : { },
	degreeLabels : [ ],

	initialize : function(name, options) {
		if(typeof name == "undefined" || name == null)
			name = OpenLayers.i18n("Coordinate grid");
		options = OpenLayers.Util.extend(options, { projection : new OpenLayers.Projection("EPSG:4326") });
		OpenLayers.Layer.Vector.prototype.initialize.apply(this, [ name, options ]);
	},
	setMap : function() {
		OpenLayers.Layer.Vector.prototype.setMap.apply(this, arguments);

		this.map.events.register("moveend", this, this.drawGrid);
		this.map.events.register("mapResize", this, this.drawGrid);
		this.events.register("visibilitychanged", this, this.drawGrid);
	},
	drawGrid : function() {
		if(!this.map || !this.map.getExtent() || !this.getVisibility()) return;

		var extent = this.map.getExtent().transform(this.map.getProjectionObject(), this.projection);
		var maxExtent = this.map.maxExtent.clone().transform(this.map.getProjectionObject(), this.projection);

		var addFeatures = [ ];
		var destroyFeatures = [ ];

		this.destroyFeatures(this.degreeLabels);
		this.degreeLabels = [ ];

		// Display horizontal grid
		var horizontalDistance = (extent.top-extent.bottom)/this.maxHorizontalLines;
		var horizontalDivisor = Math.pow(10, Math.ceil(Math.log(horizontalDistance)/Math.LN10));
		if(5*(extent.top-extent.bottom)/horizontalDivisor <= this.maxHorizontalLines)
			horizontalDivisor /= 5;
		else if(2*(extent.top-extent.bottom)/horizontalDivisor <= this.maxHorizontalLines)
			horizontalDivisor /= 2;

		for(var i in this.horizontalLines)
		{
			var r = i/horizontalDivisor;
			var highlight = (r % 5 == 0);
			var highlighted = (this.horizontalLines[i].style == this.styleMapHighlight);
			if(Math.floor(r) != r || highlight != highlighted)
			{
				destroyFeatures.push(this.horizontalLines[i]);
				delete this.horizontalLines[i];
			}
		}

		for(var coordinate = Math.ceil(extent.bottom/horizontalDivisor)*horizontalDivisor; coordinate < extent.top; coordinate += horizontalDivisor)
		{
			if(coordinate < -90 || coordinate > 90)
				continue;

			var highlight = (coordinate/horizontalDivisor % 5 == 0);

			this.degreeLabels.push(new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(extent.left, coordinate).transform(this.projection, this.map.getProjectionObject()),
				null,
				OpenLayers.Util.extend({ label: (Math.round(coordinate*100000000)/100000000)+"°", labelAlign: "lm" }, highlight ? this.labelStyleMapHighlight : this.labelStyleMapNormal)
			));

			this.degreeLabels.push(new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(extent.right, coordinate).transform(this.projection, this.map.getProjectionObject()),
				null,
				OpenLayers.Util.extend({ label: (Math.round(coordinate*100000000)/100000000)+"°", labelAlign: "rm" }, highlight ? this.labelStyleMapHighlight : this.labelStyleMapNormal)
			));

			if(this.horizontalLines[coordinate])
				continue;
			this.horizontalLines[coordinate] = new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.LineString([ new OpenLayers.Geometry.Point(maxExtent.left, coordinate).transform(this.projection, this.map.getProjectionObject()), new OpenLayers.Geometry.Point(maxExtent.right, coordinate).transform(this.projection, this.map.getProjectionObject()) ]),
				null,
				highlight ? this.styleMapHighlight : this.styleMapNormal
			);
			addFeatures.push(this.horizontalLines[coordinate]);
		}

		// Display vertical grid
		var maxVerticalLines = (this.maxVerticalLines != null ? this.maxVerticalLines : Math.round(this.maxHorizontalLines * this.map.size.w / this.map.size.h));
		var verticalDistance = (extent.right-extent.left)/maxVerticalLines;
		var verticalDivisor = Math.pow(10, Math.ceil(Math.log(verticalDistance)/Math.LN10));
		if(5*(extent.right-extent.left)/verticalDivisor <= maxVerticalLines)
			verticalDivisor /= 5;
		else if(2*(extent.right-extent.left)/verticalDivisor <= maxVerticalLines)
			verticalDivisor /= 2;

		for(var i in this.verticalLines)
		{
			var r = i/verticalDivisor;
			var highlight = (r % 5 == 0);
			var highlighted = (this.verticalLines[i].style == this.styleMapHighlight);
			if(Math.floor(r) != r || highlight != highlighted)
			{
				destroyFeatures.push(this.verticalLines[i]);
				delete this.verticalLines[i];
			}
		}

		for(var coordinate = Math.ceil(extent.left/verticalDivisor)*verticalDivisor; coordinate < extent.right; coordinate += verticalDivisor)
		{
			if(coordinate <= -180 || coordinate > 180)
				continue;

			var highlight = (coordinate/verticalDivisor % 5 == 0);

			this.degreeLabels.push(new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(coordinate, extent.top).transform(this.projection, this.map.getProjectionObject()),
				null,
				OpenLayers.Util.extend({ label: (Math.round(coordinate*100000000)/100000000)+"°", labelAlign: "ct" }, highlight ? this.labelStyleMapHighlight : this.labelStyleMapNormal)
			));

			this.degreeLabels.push(new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.Point(coordinate, extent.bottom).transform(this.projection, this.map.getProjectionObject()),
				null,
				OpenLayers.Util.extend({ label: (Math.round(coordinate*100000000)/100000000)+"°", labelAlign: "cb" }, highlight ? this.labelStyleMapHighlight : this.labelStyleMapNormal)
			));

			if(this.verticalLines[coordinate])
				continue;
			this.verticalLines[coordinate] = new OpenLayers.Feature.Vector(
				new OpenLayers.Geometry.LineString([ new OpenLayers.Geometry.Point(coordinate, maxExtent.top).transform(this.projection, this.map.getProjectionObject()), new OpenLayers.Geometry.Point(coordinate, maxExtent.bottom).transform(this.projection, this.map.getProjectionObject()) ]),
				null,
				highlight ? this.styleMapHighlight : this.styleMapNormal
			);
			addFeatures.push(this.verticalLines[coordinate]);
		}

		this.destroyFeatures(destroyFeatures);
		this.addFeatures(addFeatures);
		this.addFeatures(this.degreeLabels);
	}
});

/**
 * decodeURIComponent() throws an exception if the string contains invalid constructions (such as a % sign not followed by a 2-digits hexadecimal number). This function returns the original string in case of an error.
 * @param String str
 * @return String
*/

function decodeURIComponentTolerantly(str)
{
	try
	{
		return decodeURIComponent(str);
	}
	catch(e)
	{
		return str;
	}
}

/**
 * Decodes a URL query string (the part after the ?).
 * @param String str
 * @return Object
*/

function decodeQueryString(str)
{
	var obj = { };
	var str_split = str.split(/[;&]/);
	for(var i=0; i<str_split.length; i++)
	{
		var equal_sign = str_split[i].indexOf("=");
		if(equal_sign < 1) continue;

		var key = str_split[i].substr(0, equal_sign);
		var arr_match = key.match(/(\[[^\]]*\]|\.[^.]+)+$/);
		if(arr_match)
		{
			var arr_indexes = arr_match[0].replace(/^[.\[]/, "").replace(/\]$/, "").split(/\]\[|\./);
			arr_indexes.unshift(key.substr(0, key.length-arr_match[0].length));
			var cur_el = obj;
			for(var j=0; j<arr_indexes.length; j++)
			{
				var cur_key = decodeURIComponentTolerantly(arr_indexes[j]);
				if(cur_key.length == 0)
				{
					cur_key = 0;
					while(typeof cur_el[cur_key] != "undefined")
						cur_key++;
				}
				if(j == arr_indexes.length-1)
					cur_el[cur_key] = decodeURIComponentTolerantly(str_split[i].substr(equal_sign+1));
				else
				{
					if(!cur_el[cur_key] || typeof cur_el[cur_key] != "object")
						cur_el[cur_key] = { };
					cur_el = cur_el[cur_key];
				}
			}
		}
		else
			obj[decodeURIComponentTolerantly(key)] = decodeURIComponentTolerantly(str_split[i].substr(equal_sign+1));
	}
	return obj;
}

/**
 * Encodes an Object to a URL query string.
 * @param Object obj
*/

function encodeQueryString(obj, prefix, arr)
{
	if(obj == null)
		return "";

	if(!prefix)
		arr = [ ];
	for(var i in obj)
	{
		var key = encodeURIComponent(i);
		if(prefix)
			key = prefix+"."+key;
		switch(typeof obj[i])
		{
			case "object":
				encodeQueryString(obj[i], key, arr);
				break;
			case "boolean":
				arr.push(key+"="+(obj[i] ? "1" : "0"));
				break;
			case "undefined":
				break;
			default:
				arr.push(key+"="+encodeURIComponent(obj[i]));
		}
	}
	return arr.join(";");
}

/**
 * Replaces <, > and " in the string with their HTML entities.
*/

function htmlspecialchars(str)
{
	if(!str) return "";
	return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;");
}

/**
 * Returns HTML code with Permalinks to various Map services at the specified position with the specified zoom level.
 * @param OpenLayers.LonLat lonlat
 * @param Number zoom
 * @return DOMElement
*/

function makePermalinks(lonlat, zoom)
{
	var div = document.createElement("div");
	var makeEntry = function(href, text)
	{
		var li = document.createElement("li");
		var link = document.createElement("a");
		link.href = href;
		link.appendChild(document.createTextNode(OpenLayers.i18n(text)));
		li.appendChild(link);
		return li;
	};

	var dl = document.createElement("dl");
	var el;
	el = document.createElement("dt");
	el.appendChild(document.createTextNode(OpenLayers.i18n("Latitude")));
	dl.appendChild(el);
	el = document.createElement("dd");
	el.appendChild(document.createTextNode(Math.round(lonlat.lat*100000000)/100000000));
	dl.appendChild(el);
	el = document.createElement("dt");
	el.appendChild(document.createTextNode(OpenLayers.i18n("Longitude")));
	dl.appendChild(el);
	el = document.createElement("dd");
	el.appendChild(document.createTextNode(Math.round(lonlat.lon*100000000)/100000000));
	dl.appendChild(el);
	div.appendChild(dl);

	var ul = document.createElement("ul");
	ul.appendChild(makeEntry("http://data.giub.uni-bonn.de/openrouteservice/index.php?end="+lonlat.lon+","+lonlat.lat+"&lat="+lonlat.lat+"&lon="+lonlat.lon+"&zoom="+zoom, "Get directions (OpenRouteService)"));
	ul.appendChild(makeEntry("http://www.openstreetmap.org/?mlat="+lonlat.lat+"&mlon="+lonlat.lon+"&zoom="+zoom, "OpenStreetMap Permalink"));
	ul.appendChild(makeEntry("http://osm.org/go/"+encodeShortLink(lonlat, zoom)+"?m", "OpenStreetMap Shortlink"));
	ul.appendChild(makeEntry("http://maps.google.com/?q="+lonlat.lat+","+lonlat.lon, "Google Maps Permalink"));
	ul.appendChild(makeEntry("http://maps.yahoo.com/broadband/#lat="+lonlat.lat+"&lon="+lonlat.lon+"&zoom="+zoom, "Yahoo Maps Permalink"));
	ul.appendChild(makeEntry("http://osmtools.de/osmlinks/?lat="+lonlat.lat+"&lon="+lonlat.lon+"&zoom="+zoom, "OpenStreetMap Links"));
	ul.appendChild(makeEntry("http://stable.toolserver.org/geohack/geohack.php?params="+lonlat.lat+"_N_"+lonlat.lon+"_E", "Wikimedia GeoHack"));
	div.appendChild(ul);

	return div;
}

/**
 * Inserts the DOM node “node” after the node “after”.
*/

function domInsertAfter(node, after)
{
	if(after.nextSibling)
		after.parentNode.insertBefore(node, after.nextSibling);
	else
		after.parentNode.appendChild(node);
}

var shortLinkCharArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@";

/**
 * Creates the relevant string of an OSM Shortlink. Copied from http://www.openstreetmap.org/javascripts/site.js, function makeShortCode().
 * @param OpenLayers.LonLat lonlat Coordinates in WGS-84
 * @param Number zoom
 * @return String
*/

function encodeShortLink(lonlat, zoom)
{
    var x = Math.round((1*lonlat.lon + 180.0) * ((1 << 30) / 90.0));
    var y = Math.round((1*lonlat.lat +  90.0) * ((1 << 30) / 45.0));
    // hack around the fact that JS apparently only allows 53-bit integers?!?
    // note that, although this reduces the accuracy of the process, it's fine for
    // z18 so we don't need to care for now.
    var c1 = 0, c2 = 0;
    for (var i = 31; i > 16; --i)
	{
		c1 = (c1 << 1) | ((x >> i) & 1);
		c1 = (c1 << 1) | ((y >> i) & 1);
    }
    for (var i = 16; i > 1; --i)
	{
		c2 = (c2 << 1) | ((x >> i) & 1);
		c2 = (c2 << 1) | ((y >> i) & 1);
    }

    var str = "";
    for (var i = 0; i < Math.ceil((zoom + 8) / 3.0) && i < 5; ++i)
	{
		digit = (c1 >> (24 - 6 * i)) & 0x3f;
		str += shortLinkCharArray.charAt(digit);
    }
    for (var i = 5; i < Math.ceil((zoom + 8) / 3.0); ++i)
	{
		digit = (c2 >> (24 - 6 * (i - 5))) & 0x3f;
		str += shortLinkCharArray.charAt(digit);
    }
    for (var i = 0; i < ((zoom + 8) % 3); ++i)
	{
		str += "-";
    }
    return str;
}

/**
 * Decodes a string from encodeShortLink().
 * @param String encoded
 * @return Object (lonlat: OpenLayers.LonLat, zoom: Number)
*/

function decodeShortLink(encoded)
{
	var lon,lat,zoom;

	var m = encoded.match(/^([A-Za-z0-9_@]+)/);
	if(!m) return false;
	zoom = m[1].length*2+encoded.length-11;

	var c1 = 0;
	var c2 = 0;
	for(var i=0,j=54; i<m[1].length; i++,j-=6)
	{
		var bits = shortLinkCharArray.indexOf(m[1].charAt(i));
		if(j <= 30)
			c1 |= bits >>> (30-j);
		else if(j > 30)
			c1 |= bits << (j-30);
		if(j < 30)
			c2 |= (bits & (0x3fffffff >>> j)) << j;
	}

	var x = 0;
	var y = 0;

	for(var j=29; j>0;)
	{
		x = (x << 1) | ((c1 >> j--) & 1);
		y = (y << 1) | ((c1 >> j--) & 1);
	}
	for(var j=29; j>0;)
	{
		x = (x << 1) | ((c2 >> j--) & 1);
		y = (y << 1) | ((c2 >> j--) & 1);
	}

	x *= 4; // We can’t do <<= 2 here as x and y may be greater than 2³¹ and then the value would become negative
	y *= 4;

	lon = x*90.0/(1<<30)-180.0;
	lat = y*45.0/(1<<30)-90.0;

	return {
		lonlat : new OpenLayers.LonLat(lon, lat),
		zoom : zoom
	};
}

/**
 * Makes a usable class name out of an OpenLayers.Class object. Adds all parent classes to the class name, too.
 * The class name for an OpenLayers.Map.cdauth object would be "olMapcdauth olMap" for example.
 * The class name is determined by the CLASS_NAME property.
 * @param Object olObject Either a class returned by OpenLayers.Class() or an instance of such a class.
 * @return String
 */
function makeClassName(olObject)
{
	var array = arguments[1];
	if(array == undefined)
		array = { };

	if(olObject != undefined)
	{
		var olClass = (olObject.prototype != undefined ? olObject.prototype : olObject);
		if(olClass.CLASS_NAME != undefined)
			array[olClass.CLASS_NAME.replace("OpenLayers.", "ol").replace(/\./g, "")] = true;
		if(olClass.cdauthParentClasses != undefined)
		{
			for(var i=0; i<olClass.cdauthParentClasses.length; i++)
				makeClassName(olClass.cdauthParentClasses[i], array);
		}
	}

	if(arguments[1] == undefined)
	{
		var ret = "";
		for(var it in array)
		{
			if(ret != "")
				ret += " ";
			ret += it;
		}
		return ret;
	}
}

/**
 * Changes the opacity of the given element to a new value, slowly fading there.
 * @param Element el The DOM element to change the opacity for
 * @param Number opacity The new opacity (1.0 for not transparent, 0.0 for invisible).
 * @param Number ms The time span for the fading in milliseconds (defaults to 750).
 * @return void
*/

function changeOpacity(el, opacity, ms)
{
	if(changeOpacity.timeouts == undefined)
		changeOpacity.timeouts = { };

	var timeoutObj = null;
	for(var i in changeOpacity.timeouts)
	{
		if(changeOpacity.timeouts[i] != undefined && changeOpacity.timeouts[i].el === el)
		{
			timeoutObj = i;
			break;
		}
	}
	if(timeoutObj == null)
	{
		var i=0;
		while(changeOpacity.timeouts[i] != undefined)
			i++;
		timeoutObj = i;
		changeOpacity.timeouts[timeoutObj] = { el : el, timeout : null }
	}
	else if(changeOpacity.timeouts[timeoutObj].timeout != null)
		clearTimeout(changeOpacity.timeouts[timeoutObj].timeout);

	if(ms == undefined)
		ms = 750;
	var initTime = new Date().getTime();
	var initOpacity = 1 * (el.style.opacity == undefined || el.style.opacity == "" ? 1 : 1*el.style.opacity);
	var callback = function() {
		var period = new Date().getTime()-initTime;
		if(period > ms)
			period = ms;
		var newOpacity = initOpacity+(period/ms)*(opacity-initOpacity);
		OpenLayers.Util.modifyDOMElement(el, null, null, null, null, null, null, newOpacity);

		if(period < ms)
			changeOpacity.timeouts[timeoutObj].timeout = setTimeout(callback, 100);
		else
			changeOpacity.timeouts[timeoutObj] = undefined;
	};
	callback();
}

/**
 * Loads a JavaScript file and then calls a callback function. Another callback function has to be provided that
 * checks if the JavaScript file has been loaded (for example by checking whether a variable set there exists)
 * and returns true in that case. In case a JavaScript file with the same URL has already been loaded, the
 * success callback function will be called immediately without loading the JavaScript file for a second time.
 * If the loadCheck function is ommitted, the success function will not be called.
 * @var String url The URL of the JavaScript file. If null, no URL will be loaded but the success function will still be called.
 * @var Function loadCheck A function that returns true if the JavaScript file has been loaded or null.
 * @var Function success A function that will be called once the loadCheck function returns true for the first time.
*/
function loadJavaScript(url, loadCheck, success)
{
	var load = true;
	if(url == null || (loadCheck != null && loadCheck()))
		load = false;
	else
	{
		var scripts = document.getElementsByTagName("script");
		for(var i=0; i<scripts.length; i++)
		{
			if(makeAbsoluteURL(scripts[i].src) == makeAbsoluteURL(url))
			{
				load = false;
				break;
			}
		}
	}

	if(load)
	{
		var scriptTag = document.createElement("script");
		scriptTag.type = "text/javascript";
		scriptTag.src = url;
		document.getElementsByTagName("head")[0].appendChild(scriptTag);
	}

	if(loadCheck != null && success != null)
	{
		var callback = function(nextWait) {
			if(loadCheck())
				success();
			else
			{
				var newWait = nextWait*2;
				if(newWait > 10000)
					newWait = 10000;
				setTimeout(function(){ callback(newWait); }, nextWait);
			}
		};
		callback(10);
	}
}

/**
 * Convert a relative URL to an absolute URL.
 * @param String url
 * @return String
*/
function makeAbsoluteURL(url)
{
	// See http://stackoverflow.com/questions/470832/getting-an-absolute-url-from-a-relative-one-ie6-issue/472729#472729
	var el = document.createElement("div");
	el.innerHTML = "<a href=\"" + url.replace("&", "&amp;").replace("\"", "&quot;").replace("<", "&lt;").replace(">", "&gt;") + "\">x</a>";
	return el.firstChild.href;
}

function alert_r(data)
{
	var str = "";
	for(var i in data)
		str += i+": "+data[i]+"\n";
	alert(str);
}
