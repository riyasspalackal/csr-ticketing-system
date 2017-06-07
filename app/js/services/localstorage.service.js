/*
 * @Author: riyas
 * @Date:   2017-06-07 09:57:16
 * @Last Modified by:   riyas
 * @Last Modified time: 2017-06-07 19:57:43
 */

 (function() {
 	'use strict';
 	angular
 	.module('csr')
 	.factory('$localStorage', localStorage);

 	localStorage.$inject = ['$window'];

 	function localStorage($window) {
 		return {
 			set: function(key, value) {
 				$window.localStorage[key] = value;
 			},
 			get: function(key, defaultValue) {
 				return $window.localStorage[key] || defaultValue;
 			},
 			setObject: function(key, value) {
 				$window.localStorage[key] = JSON.stringify(value);
 			},
 			getObject: function(key) {
 				return JSON.parse($window.localStorage[key] || '{}');
 			},
 			remove: function(key) {
 				delete $window.localStorage[key];
 			},
 			clear: function() {
 				$window.localStorage.clear();
 			}
 		};
 	}
 })();
