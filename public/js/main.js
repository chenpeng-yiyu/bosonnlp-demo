'use strict';
(function(win) {
	var baseUrl = '/js/';

	//文件依赖
	requirejs.config({
		baseUrl: baseUrl,  //依赖相对路径
		paths: {
			'angular': 'lib/angular',
			'angular-route': 'lib/angular-route',
			'app':'app',
			'route': 'route',
			'indexCtrl': 'controllers/indexCtrl',
			'dataService': 'services/dataService',
			'jquery': 'lib/jquery-1.8.3.min',
			'lodash': 'lib/lodash',
			'config': 'config'
		},
		shim: {
			'angular': {
				exports: 'angular'
			},
			'angular-route': {
				deps: ['angular']
			},
			'angular-resource': {
				deps: ['angular']
			},
			'jquery': {
				exports: 'jquery'
			},
			'lodash': {
				exports: 'lodash'
			}
		}
	});

	requirejs(['angular', 'app', 'route'], function(angular, app) {

		angular.element(document).ready(function() {
			angular.bootstrap(document, ['todo']);
		});

	});


})(window);