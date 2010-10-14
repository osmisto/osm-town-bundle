// Translation for russian


var OTB_init_lang = function() {
	var strs = {
		'osm-layer'           : 'Карты OSM',
		'google-sat-layer'    : 'Спутник от Google',
		'osb-layer'           : 'Ошибки',
		'permalink'           : 'Постоянная ссылка',
		'def-ctl-title'       : 'Стандартное поведение мыши',
		'osb-ctl-title'       : 'Используйте для того, чтобы отметить ошибки и новую информацию'
	};

	for (key in strs) { OSMTownBundle.up(key, strs[key]); }
};
OTB_init_lang();
