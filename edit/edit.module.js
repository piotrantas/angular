(function(){
    'use strict';

    angular.module('edit', ['ui.bootstrap', 'users']).component('edit', {
        templateUrl:'edit/edit.template.html',
        controllerAs: "vm",
        controller: usersConten,
    })
})();




function usersConten($http){
    var vm = this;
                
    $http({
        method: 'GET',
        url: "users/users.json",

    }).then(function successCallback(data) {
        vm.myData = data.data;
        
    }, function errorCallback(data) {
        console.log('We don\'t have a data');
    })

}

