'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  //$routeProvider.otherwise({redirectTo: '/view1'});
  $routeProvider.when('/', {redirectTo: '/view1'});
  $routeProvider.when('/404', {templateUrl: '/404.html'});
  $routeProvider.otherwise({redirectTo: '/404'});

}]);
