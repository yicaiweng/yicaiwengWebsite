
angular.module('demo', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		// .when('/index',{
		// 	templateUrl: '/home.html'
		// })
		.when('/navPage',{
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


// angular.module('demo',['ui.router'])
//   .config(function($stateProvider){
//     $stateProvider
//       .state('home', {
//         url: '/',
//         component:'mainPageLayout',
//         resolve: {
//           essentials: function(EssentialsService) {
//             return EssentialsService.getEssentials();
//           }
//         }
//       })
//       .state('default', {
//           url: '',
//           component:'mainPageLayout',
//           resolve: {
//             essentials: function(EssentialsService) {
//               return EssentialsService.getEssentials();
//             }
//           }
//         })
//       .state('about',{
//         url:'/about',
//         component:'aboutPageLayout'
//       })
//       .state('contactUs',{
//         url:'/contactUs',
//         component:'contactUsPageLayout'
//       })
//       .state('signIn',{
//         url:'/signIn',
//         component:'signInPageLayout'
//       })
//       .state('signUp',{
//         url:'/signUp',
//         component:'signUpPageLayout'
//       })
//       .state('forgotPassword',{
//         url:'/forgotPassword',
//         component:'forgotPasswordPageLayout'
//       })
//       .state('term',{
//         url:'/term',
//         component:'termPageLayout'
//       })
//   })
