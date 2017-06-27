(function(){
    'use strict';

    angular.module('users', ['ui.bootstrap', 'edit']).component('users', {
        templateUrl:'users/users.template.html',
        controllerAs: "vm",
        controller: usersCont,
    })
})();




    function usersCont($http, $log, $anchorScroll){


    var vm = this;
                
    $http({
        method: 'GET',
        url: "users/users.json",

    }).then(function successCallback(data) {
        vm.myData = data.data;
        pagination(vm.myData)
    }, function errorCallback(data) {
        console.log('We don\'t have a data');
    })


    function pagination(list) {
        vm.totalItems = list.length;
        vm.currentPage = 1;
        vm.maxSize = 5;
        vm.itemsPerPage = 5;
        

        vm.displayItems = list.slice(0, 5);

        vm.pageChanged = function() {
            var startPos = (vm.currentPage - 1) * 5;
            vm.displayItems = list.slice(startPos, startPos + 5);
      
        };
    
   

      

    }



    


    

      
    

















}