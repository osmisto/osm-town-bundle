/*
	This file is part of cdauth’s map. (may be in future :)

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

OpenLayers.Layer.cdauthAddonLoaded = true;

/**
 * MapSurfer overlay map.
*/
OpenLayers.Layer.cdauth.OSM.MapSurfer.Overlay = OpenLayers.Class(OpenLayers.Layer.cdauth.OSM.MapSurfer, {
	initialize : function(name, options) {
		// set isBaseLayer
		if (!options) options = {};
		options['isBaseLayer'] = false;

		OpenLayers.Layer.cdauth.OSM.MapSurfer.prototype.initialize.apply(this, [ name, "http://tiles1.mapsurfer.net/tms_h.ashx?x=${x}&y=${y}&z=${z}", options ]);
	},
	CLASS_NAME : "OpenLayers.Layer.cdauth.OSM.MapSurfer.Road"
});

