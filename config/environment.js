/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'feapp',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    authenticationRoute: 'signIn',
    routeAfterAuthentication: 'home',
    routeIfAlreadyAuthenticated: 'home',
    crossOriginWhitelist: ['http://localhost:3000', 'https://millionaire-labs.heroku.com', 'https://millionaire-labs.com'],
    localStorageKey: 'millionaire_labs:session'
  };

  ENV['simple-auth-devise'] = {
    resourceName: 'user',
    serverTokenEndpoint: '',
    tokenAttributeName: 'token',
    identificationAttributeName: 'user_name'
  };

  ENV.contentSecurityPolicy = {
    'default-src' : "'self'",
    'img-src': "*",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com",
    'connect-src': "'self' http://localhost:3000 https://millionaire-labs.herokuapp.com/",
    'frame-src': "'self' https://www.youtube.com"
  };

  // ***************************************
  // configuration in different environments
  // ***************************************
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['simple-auth-devise']['serverTokenEndpoint'] = 'http://localhost:3000/users/sign_in';
    ENV.host = 'http://localhost:3000';
    ENV.version = 'v1';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['simple-auth-devise']['serverTokenEndpoint'] = 'http://localhost:3000/users/sign_in';
    ENV.host = 'http://localhost:3000';
    ENV.version = 'v1';
  }

  if (environment === 'production') {
    // setup for simple-auth-devise
    ENV['simple-auth-devise']['serverTokenEndpoint'] = 'https://millionaire-labs.heroku.com/users/sign_in';
    ENV.host = 'https://millionaire-labs.heroku.com';
    ENV.version = 'v1';
    ENV.googleAnalytics = {
      webPropertyId: 'UA-61915216-1'
    }
  }

  return ENV;
};
