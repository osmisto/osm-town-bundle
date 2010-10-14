
GENERATED = ru_koi8r.js ru_cp1251.js

update: ${GENERATED}


ru_koi8r.js: ru_utf8.js
	iconv -f utf8 -t koi8r <ru_utf8.js >ru_koi8r.js

ru_cp1251.js: ru_utf8.js
	iconv -f utf8 -t cp1251 <ru_utf8.js >ru_cp1251.js

