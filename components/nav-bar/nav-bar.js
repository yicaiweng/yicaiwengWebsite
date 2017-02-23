angular.module('nav-bar', []).component('navBar', {
    templateUrl:'components/nav-bar/nav-bar.html',
    controller: function($scope, $state){
      var ctrl = this;
      var highlight = function(){
        var option = $state.current.name;
        ctrl.aboutClass = "";
        ctrl.contactMeClass = "";
        ctrl.resumeClass = "";
        ctrl.welcomeClass = "";
        if(option == 'home'){
          ctrl.welcomeClass = 'highlight';
        } else if (option == 'about'){
          ctrl.aboutClass = 'highlight';
        }  else if (option == 'resume'){
          ctrl.resumeClass = 'highlight';
        } else if (option == 'contactMe'){
          ctrl.contactMeClass = 'highlight';
        } 
      };
      highlight();

      $scope.$on('highlightNav', function(){
        highlight();
      })
    }
  });
