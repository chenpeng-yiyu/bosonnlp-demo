define([], function() {
	var config = {};

	config.baseUrl = 'http://api.bosonnlp.com';
	config.space_mode = '0'; //空格保留选项
	config.oov_level = '3'; //新词枚举强度选项
	config.t2s = '0'; //繁简转换选项
	config.special_char_conv = '0'; //特殊字符转换选项
	config.analysisURL = config.baseUrl + '/tag/analysis?space_mode=' + config.space_mode + '&oov_level=' + config.oov_level + '&t2s=' + config.t2s + '&&special_char_conv=' + config.special_char_conv;
	
	config.proxyUrl = '/proxy';  //请求转发服务器地址
	
	config.wordMean = {
		'n': '名词',
		'nr': '人名',
		'ns': '地名',
		'nt': '组织机构名',
		'nz': '其它专有名词',
		'nl': '名词性惯用语',
		't': '时间词',
		's': '处所词',
		'f': '方位词',
		'v': '动词',
		'vd': '副动词',
		'vshi': '动词“是”',
		'vyou': '动词“有”',
		'vi': '不及物动词',
		'vl': '动词性惯用语',
		'a': '形容词',
		'ad': '副形词',
		'an': '名形词',
		'al': '形容词性惯用语',
		'b': '区别词',
		'bl': '区别词性惯用语',
		'z': '状态词',
		'r': '代词',
		'm': '数词',
		'q': '量词',
		'd': '副词',
		'dl': '副词性惯用语',
		'p': '介词',
		'pba': '介词“把”',
		'pbei': '介词“被”',
		'c': '连词',
		'u': '助词',
		'uzhe': '助词“着”',
		'ule': '助词“了”',
		'uguo': '助词“过”',
		'ude': '助词“的”、“地”、“得”',
		'usuo': '助词“所”',
		'udeng': '助词“等”、“等等”',
		'uyy': '助词“一样”、“似的”',
		'udh': '助词“的话”',
		'uzhi': '助词“之”',
		'ulian': '助词“连”',
		'y': '语气词',
		'o': '拟声词',
		'h': '前缀',
		'k': '后缀',
		'nx': '字符串',
		'w': '标点符号',
		'wkz': '左括号',
		'wky': '右括号',
		'wyz': '左引号',
		'wyy': '右引号',
		'wj': '句号',
		'ww': '问号',
		'wt': '叹号',
		'wd': '逗号',
		'wf': '分号',
		'wn': '顿号',
		'wm': '冒号',
		'ws': '省略号',
		'wp': '破折号',
		'wb': '百分号千分号',
		'wh': '单位符号',
		'email': '电子邮件地址',
		'tel': '电话号码',
		'id': '身份证号',
		'ip': 'ip地址',
		'url': '网页链接'
	};
	
	config.defaultContent = '15日，备受关注的电影《黄金时代》在北京举行了电影发布会，导演许鞍华和编剧李樯及汤唯、冯绍峰等众星悉数亮相。据悉，电影确定将于10月1日公映。本片讲述了“民国四大才女”之一的萧红短暂而传奇的一生，通过她与萧军、汪恩甲、端木蕻良、洛宾基四人的情感纠葛，与鲁迅、丁玲等人一起再现上世纪30年代的独特风貌。电影原名《穿过爱情的漫长旅程》，后更名《黄金时代》，这源自萧红写给萧军信中的一句话：“这不正是我的黄金时代吗？”';
	
	return config;
});