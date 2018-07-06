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
          console.log("Hello2");
          ctrl.resumeClass = 'highlight';
        } else if (option == 'contactMe'){
          console.log("Hello");
          ctrl.contactMeClass = 'highlight';
        } else {
        }
      };
      highlight();

      $scope.$on('highlightNav', function(){
        highlight();
      })
    }
  });
