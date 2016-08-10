/**
 * app需要多处引用，避免循环引入，这里只负责定义抛出 app
 */
define(['angular', 'angular-route'], function(angular) {
	var app = angular.module('todo', ['ngRoute']);
	
	return app;
});