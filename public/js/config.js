define([], function() {
	var config = {};

	config.baseUrl = 'http://api.bosonnlp.com';
	config.space_mode = '0'; //空格保留选项
	config.oov_level = '3'; //新词枚举强度选项
	config.t2s = '0'; //繁简转换选项
	config.special_char_conv = '0'; //特殊字符转换选项
	config.analysisURL = config.baseUrl + '/tag/analysis?space_mode=' + config.space_mode + '&oov_level=' + config.oov_level + '&t2s=' + config.t2s + '&&special_char_conv=' + config.special_char_conv;
	
	config.proxyUrl = 'http://127.0.0.1:3000/proxy';  //请求转发服务器地址
	
	config.wordMean = {
		'v': '动词',
		't': '时间词',
		'p': '介词',
		'ns': '地名',
		'u': '助词',
		'n': '名词',
		'w': '标点符号',
		'nz': '专有名词',
		'd': '副词',
		'm': '数词',
		'q': '量词',
		'f': '方位词',
		'nx': '字符串',
		'c': '连词',
		'a': '形容词',
		'r': '代词'
	};
	
	return config;
});