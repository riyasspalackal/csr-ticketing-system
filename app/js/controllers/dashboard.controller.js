/*
 * @Author: riyas
 * @Date:   2017-06-07 09:37:06
 * @Last Modified by:   riyas
 * @Last Modified time: 2017-06-17 13:11:39
 */
 (function() {

 	'use strict';

 	angular
 	.module('csr')
 	.controller('DashboardController', DashboardController);

 	DashboardController.$inject = ['$scope', 'DashboardService', '$localStorage'];

 	function DashboardController($scope, DashboardService, $localStorage) {

 		var vm = $scope;
 		vm.newTicket;
 		vm.createNewTicket = createNewTicket;
 		vm.fullname = fullname;
 		vm.personal = {
 			name: 'Muhammed',
 			lastname:'Riyas'
 		}

 		function fullname(person) {
 			return person.name + ' ' + person.lastname;
 		}

        // Handle in browser storage instead of API call
        if ($localStorage.get('tickets') === undefined) {
        	vm.tickets = DashboardService.getTickets();
        	$localStorage.set('tickets', JSON.stringify(vm.tickets));
        } else {
        	var str = $localStorage.get('tickets');
        	vm.tickets = angular.fromJson(str);
        }

        function createNewTicket(ticketForm) {
        	if (ticketForm.$valid) {
        		vm.newTicket.comment = [];
        		vm.newTicket.status = 'Open';
        		vm.tickets.push(vm.newTicket);
        		$localStorage.set('tickets', JSON.stringify(vm.tickets));
        		vm.newTicket = {};
        		ticketForm.$setPristine();
        		$('#myModal').modal('hide');
        	}
        }
    }
})();
