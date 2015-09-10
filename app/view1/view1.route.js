(function() {
  'use strict'
  
  angular.module('myApp.view1')
    .config(routerConfig);
  
  routerConfig.$inject = ['$routeProvider'];        
  function routerConfig($routeProvider) {
      $routeProvider.when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Controller',
          controllerAs: "View1"
      });
  };
})()