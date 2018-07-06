
angular.module('demo',['ui.router','views', 'components'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component:'welcomePage'
      })
      // .state('default', {
      //   url: '',
      //   component:'welcomePage'
      // })
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
