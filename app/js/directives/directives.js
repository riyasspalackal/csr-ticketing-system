/*
 * @Author: riyas
 * @Date:   2017-06-17 12:04:56
 * @Last Modified by:   riyas
 * @Last Modified time: 2017-07-07 06:03:52
 */



 (function() {
 	'use strict';
 	angular
 	.module('csr')
 	.directive('sampleDir', sampleDir);

 	sampleDir.$inject = [];

 	function sampleDir() {

 		return {
 			restrict: 'AE',
 			templateUrl: 'js/templates/directive.templates.html',
 			repalce: true,
 			scope: {
 				personName: "=",
 				functionForFullname:'&'
 			},
 			compile:function(elem, attrs){
 				console.log("Compiler .....");
 				console.log(elem);

 				return{
 					post: function(scope,element,attrs){
 						return scope.personName.lastname = "Niyas"
 						console.log(scope.personName.lastname)
 					}
 				}
 			},
 			transclude:true
 		}

 	}


 })();




 // return {
	// 		restrict: 'E',
	// 		template: "<div><input type='text' ng-model='newValue' id='ac' /></div> "+
	// 		"<div ng-repeat='lists in list'> {{lists}}</div>",
	// 		link: function(scope, element) {

	// 			scope.list = [];
	// 			var inEl = element.find('#ac');
	// 			inEl.bind('keyup', function(e) {
	// 				console.log(scope.newValue);

	// 				if (e.which === 188) {
	// 					console.log("coma");

	// 					scope.list.push(scope.newValue.substring(0, scope.newValue.length-1));
	// 					scope.newValue = "";
	// 					console.log(scope.list);
	// 					scope.$apply(scope.newValue);
	// 				}
	// 			})
	// 		}
	// 	};

