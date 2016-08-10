define(['app', 'config', 'jquery'], function(app, config, _$) {
	app.factory('dataService', ['$http','$q', function($http, $q) {
		'use strict'
		
		/**
		 * url 请求器
		 * @param  {object} actionParams 请求信息
		 * @return promise
		 */
		function _action(actionParams) {
            var deferred = $q.defer();
			var action_url = actionParams.url;
			if(actionParams.options.params) {
				action_url += '&' + _$.param(actionParams.options.params);
			}
            deferred.promise.xhr = $http({
                method: 'POST',
                url: config.proxyUrl,
                data: {
					data: actionParams.options.data,
					url: action_url,
					method: actionParams.options.type ? actionParams.options.type : 'GET'
				}
            }).success(function(data) {

                deferred.resolve(data);
            }).error(function(err,status) {
                if(!err) err={};
                err.status = status;
                deferred.reject(err);
            });

            return deferred.promise;
        };

        var api = {
			/**
			 * 获取词性分析数据
			 */
        	getAnalysisData: function(options){
            	var deferred = $q.defer();

	            _action({
	                url: config.analysisURL,
	                options: options
	            }).then(function(data){
	                if(data.subErrors){
	                    deferred.reject(data);
	                }
	                else{
	                    deferred.resolve(JSON.parse(data));
	                }
	            },function(err){
	                deferred.reject(err);
	            })

	            return deferred.promise;
        	},

        };

        return api;

	}]);
});