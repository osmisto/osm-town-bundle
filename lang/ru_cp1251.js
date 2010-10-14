// Translation for russian UTF-8


function() {
	var strs = {
		'osm-layer'           : 'Карты OSM',
		'google-sat-layer'    : 'Спутник от Google',
		'osb-layer'           : 'Ошибки',
		'permalink'           : 'Постоянная ссылка',
		'def-ctl-title'       : 'Стандартное поведение мыши',
		'osb-ctl-title'       : 'Используйте для того, чтобы отметить ошибки и новую информацию'
	};

	for (key in strs) { OSMSiteBundle.up(key, strs[key]); }
}();
