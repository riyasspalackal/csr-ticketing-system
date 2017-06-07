/*
* @Author: riyas
* @Date:   2017-06-07 00:20:47
* @Last Modified by:   riyas
* @Last Modified time: 2017-06-07 19:54:51
*/

(function(){
	'use strict';

	angular
	.module('csr',['ui.router','ngMessages'])
	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/dashboard');

		$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			templateUrl: 'js/templates/dashboard.html',
			controller: 'DashboardController'
		})
		.state('ticket',{
			url:'/ticket/:ticketId',
			templateUrl:'js/templates/ticket.html',
			controller:'TicketController'
		});
	}]);
})();

