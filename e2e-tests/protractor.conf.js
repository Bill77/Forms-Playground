exports.config = {
  allScriptsTimeout: 10000,
  baseUrl: 'http://localhost:8000/app/',
  
  specs: [
    'features/*.feature'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  framework: 'cucumber',
  
  cucumberOpts: {
    require: 'features/*.step.js',
    format: 'pretty'
  }     
};
