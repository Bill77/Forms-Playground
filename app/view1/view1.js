(function() {
  'use strict';
   
  angular
    .module('myApp.view1', ['ngRoute', 'formly', 'formlyBootstrap', 'ngMessages'])
    .config(routerConfig)
    .controller('View1Controller', controller);
      
  routerConfig.$inject('$routeProvider');        
  function routerConfig($routeProvider) {
      $routeProvider.when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Controller',
          controllerAs: "View1"
      });
  };
        
  function controller() {
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
  };   
})()


