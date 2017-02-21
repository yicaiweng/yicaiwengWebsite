//
// angular.module('demo', ['ngRoute'])
//
// .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
// 	$routeProvider
// 		.when('/',{
// 			templateUrl: 'views/welcome/welcome.html'
// 		})
// 		.when('/welcome',{
// 			templateUrl:'/views/welcome/welcome.html'
// 		})
// 		.when('/about',{
// 			templateUrl:'/views/about/about.html'
// 		})
// 		.when('/contact_me',{
// 			templateUrl:'/views/contact_me/contact_me.html'
// 		})
// 		.when('/resume',{
// 			templateUrl: '/views/resume/resume.html'
// 		})
// 		.otherwise({
// 			redirectTo: '/'
// 		});
//
// 		$locationProvider.html5Mode({enabled: true, requireBase: false});
//
// }]);


angular.module('demo',['ui.router','views', 'components'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component:'welcomePage'
      })
      .state('default', {
        url: '',
        component:'welcomePage'
      })
      .state('about',{
        url:'/about',
        component:'aboutPage'
      })
      .state('contactMe',{
        url:'/contactMe',
        component:'contactMePage'
      })
      .state('resume',{
        url:'/resume',
        component:'resumePage'
      })
  });


  // angular.module('demo',['ui.router'])
  //   .config(function($stateProvider){
  //     $stateProvider
  //       .state('home', {
  //         templateUrl:'/views/welcome/welcome.html'
  //       })
  //       .state('default', {
  //         templateUrl:"/views/welcome/welcome.html"
  //       })
  //       .state('about',{
  //         templateUrl:"/views/about/about.html"
  //       })
  //       .state('contactMe',{
  //         templateUrl:"/views/contactMe/contactMe.html"
  //       })
  //       .state('resume',{
  //         templateUrl:"/views/resume/resume.html"
  //       })
  //   })
