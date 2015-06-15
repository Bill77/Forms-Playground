'use strict';

angular.module('myApp.view2', ['ngRoute', 'formly', 'formlyBootstrap', 'ngMessages'])

.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Controller',
            controllerAs: "View2"
        });
}])

.controller('View2Controller', [
    function () {
        var viewModel = this;

        viewModel.formData = {};

        viewModel.formFields = [
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'User Name',
                    placeholder: 'john smith',
                    required: true,
                    description: 'User Name for the system',
                    minlength: 2
                }
            }, {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Password',
                    required: true,
                    disabled: false,
                    hideExpression: '!username'
                }
            }, {
                "key": "love",
                "type": "input",
                templateOptions: {
                    type: 'number',
                    "label": "How much love?",
                    "min": 0,
                    "max": 100,
                    "maxlength": 4,
                    "required": true
                }
            }, {
                type: 'input',
                templateOptions: {
                    label: 'random number',
                    type: 'number',
                    maxlength: 12
                }
            }
        ];

        viewModel.formOptions = {
            //uniqueFormId: 'myFormId'
        };

        viewModel.onSubmit = function() {
            console.log('form submitted:', viewModel.formData);
        };
}]);
