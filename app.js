angular

.module('anGular'  ,['ui.bootstrap'] )
.controller('MainController', function($scope, $http ){


   // using Url to get data form a json file 

// $http.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1')
// 	.then(function(response){

// 	 	$scope.crib = response.data; 

// 	 });



$scope.cribs = 'isma';







}) ;


