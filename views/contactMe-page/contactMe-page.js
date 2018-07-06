angular.module('contactMe-page', []).component('contactMePage',{
  templateUrl:'/views/contactMe-page/contactMe-page.html',
  controller: function($rootScope){
    $rootScope.$broadcast('highlightNav');
  }
});
