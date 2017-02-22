angular.module('welcome-page', []).component('welcomePage',{
  templateUrl:'/views/welcome-page/welcome-page.html',
  controller: function($rootScope){
    $rootScope.$broadcast('highlightNav');
  }
});
