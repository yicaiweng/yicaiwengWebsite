angular.module('resume-page', []).component('resumePage',{
  templateUrl:'/views/resume-page/resume-page.html',
  controller: function($rootScope){
    $rootScope.$broadcast('highlightNav');
  }
});
