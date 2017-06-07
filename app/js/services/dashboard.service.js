/*
 * @Author: riyas
 * @Date:   2017-06-07 10:33:09
 * @Last Modified by:   riyas
 * @Last Modified time: 2017-06-07 21:18:06
 */
 (function() {
 	'use strict';
 	angular
 	.module('csr')
 	.factory('DashboardService', DashboardService);
 	
 	function DashboardService() {

 		return {
 			getTickets: getTickets
 		};

 		function getTickets() {
 			return [{
 				"id": 'TIC1345',
 				"customerName": 'Rohith',
 				"createdBy": "Vinu",
 				"assignTo": 'Thomas',
 				"status": 'Open',
 				"discription": ' quaerat tempore ex nemo illo minus nulla enim. Non ea quia ratione, pariatur!',
 				"comment":[]
 			}, {
 				"id": 'TIC1675',
 				"customerName": 'Rohith',
 				"createdBy": "Vinu",
 				"assignTo": 'Rahul',
 				"status": 'Open',
 				"discription": 'neque dolores nemo odio vel cum enim atque sed at laboriosam. Aut.',
 				"comment":[]
 			}, {
 				"id": 'TIC1055',
 				"customerName": 'Rohith',
 				"createdBy": "Vinu",
 				"assignTo": 'Rohan',
 				"status": 'Open',
 				"discription": 'xplicabo doloremque sint nobis eligendi dolor quia ducimus dolorem unde.',
 				"comment":[]
 			}, {
 				"id": 'TIC9845',
 				"customerName": 'Rohith',
 				"createdBy": "Vinu",
 				"assignTo": 'Rahul',
 				"status": 'Open',
 				"discription": 'rehenderit, sapiente pariatur incidunt modi, commodi, hic fugiat. Eum tenetur, omnis ratione.',
 				"comment":[]
 			}];
 		}
 	}
 })();