var myApp = angular.module('myApp', ['ngRoute']);
// Angular configuration (routes)
myApp.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    template: ''
  }).when('/agentave', {
    templateUrl: 'views/projects/agentave.html',
    // controller: 'AgentController as ac'
  }).when('/cushwake', {
    templateUrl: 'views/cushwake.html',
    // controller: 'BounceController as bc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
}); // end config