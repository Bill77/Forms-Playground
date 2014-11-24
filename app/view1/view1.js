'use strict';

angular.module('myApp.view1', ['ngRoute', 'aa.formExtensions', 'aa.notify'])

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            controllerAs: 'View1'
        });
}])

.controller('View1Ctrl', [function () {
    var viewModel = this;
    
    viewModel.onSubmit = function Submit() {
        console.log('form submitted:', viewModel.number);
    };

}]);