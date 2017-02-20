
var app = angular.module('demo', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		// .when('/',{
		// 	templateUrl: '/index.html'
		// })
		.when('/navPage.html',{
			templateUrl: '/views/navPage.html'
		})
		.when('/about',{
			templateUrl:'/views/about/about.html'
		})
		.when('/contact_me',{
			templateUrl:'/views/contact_me/contact_me.html'
		})
		.when('/resume',{
			templateUrl: '/views/resume/resume.html'
		})
		.otherwise({
			redirectTo: '/'
		});

		$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);
