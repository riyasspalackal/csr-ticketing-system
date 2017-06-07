/*
 * @Author: riyas
 * @Date:   2017-06-07 10:11:23
 * @Last Modified by:   riyas
 * @Last Modified time: 2017-06-07 21:53:29
 */

 (function() {
 	'use strict';
 	angular
 	.module('csr')
 	.controller('TicketController', TicketController);
 	TicketController.$inject = ['$scope', 'DashboardService', '$stateParams', '$localStorage', '$location'];

 	function TicketController($scope, DashboardService, $stateParams, $localStorage, $location) {
 		var vm = $scope;
 		vm.coomentList = [];
 		vm.currentId = $stateParams.ticketId;
 		var str = $localStorage.get('tickets');
 		vm.tickets = angular.fromJson(str);
 		vm.addComment = addComment;
 		vm.updateTicket = updateTicket;

 		angular.forEach(vm.tickets, function(value, i) {
 			if (value.id === vm.currentId) {
 				vm.ticketView = angular.copy(vm.tickets[i]);
 			}
 		});
 		if (vm.ticketView.status === 'Open') {
 			vm.editable = true;
 		}else{
 			vm.editable = false;
 		}
 		function addComment() {
 			if (vm.comment === undefined || vm.comment === '') { return; }
 			vm.ticketView.comment.push(vm.comment);
 			vm.comment = '';
 		}
 		function updateTicket() {
 			angular.forEach(vm.tickets, function(value, i) {
 				if (value.id === vm.currentId) {
 					vm.tickets[i] = vm.ticketView;

 				}
 			});
 			$localStorage.set('tickets', JSON.stringify(vm.tickets));
 			$location.path('/dashboard')
 		}
 	}
 })();
