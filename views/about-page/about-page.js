angular.module('about-page', []).component('aboutPage',{
  templateUrl:'/views/about-page/about-page.html',
  controller: function($rootScope){
    $rootScope.$broadcast('highlightNav');
  }
});
