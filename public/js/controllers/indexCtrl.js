define(['app', 'config', 'dataService', 'lodash'], function(app, config) {

	app.controller('indexCtrl', ['$scope', 'dataService', function($scope, dataService) {
		'use strict'

		/**
		 * 提交文本
		 */
		$scope.analysisText = config.defaultContent;
		$scope.toAnalysis = function(e) {
			dataService.getAnalysisData({
				type: 'POST',
				data: $scope.analysisText
			}).then(function(data) {
				$scope.analysis = _.zip(data[0].tag, data[0].word);
				var tag = _.uniq(data[0].tag);
				var mean = tag.map(function(item) {
					return config.wordMean[item] || '';  //可能还有某些词性在配置文件中不全
				});
				$scope.wordMeans = _.zip(tag, mean);
			}, function(err) {
				console.error(err);
			});
		};

	}]);
});