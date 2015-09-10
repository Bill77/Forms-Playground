(function() {
  'use strict'
  
  angular.module('myApp.view1')
    .controller('View1Controller', controller);
    
  controller.$inject = ['$timeout']        
  function controller($timeout) {
      var viewModel = this;
      var fields = [
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
        }, {
          key: "AsyncTest",
          type: 'input',
          templateOptions: {
            label: 'Async Testing',
            type: 'number'
          },
          asyncValidators: {
            isCorrectNumber: {
              expression: function($viewValue, $modelValue, scope) {
                scope.options.templateOptions.loading = true;                
                return $timeout(function() {
                  scope.options.templateOptions.loading = false;
                  if ($viewValue != 7) {
                    throw new Error('Does not equal 7');                   
                  } 
                }, 500)},
              message: 'The magic number is not 7' 
            }
          }          
        }
      ];
      
      function submit() {
          console.log('form submitted:', viewModel.model);
      };
      
      viewModel.model = {};
      viewModel.formFields = fields;
      viewModel.formOptions = {};
      viewModel.onSubmit = submit;      
  };
})()