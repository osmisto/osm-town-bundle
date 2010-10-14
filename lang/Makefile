
GENERATED = ru_koi8r.js ru_cp1251.js
WARN = '// Generated file!!!! DO NOT EDIT !!!!'

update: ${GENERATED}


ru_koi8r.js: ru_utf8.js
	(echo ${WARN} ; iconv -f utf8 -t koi8r <ru_utf8.js) >ru_koi8r.js

ru_cp1251.js: ru_utf8.js
	(echo ${WARN} ; iconv -f utf8 -t cp1251 <ru_utf8.js) >ru_cp1251.js

