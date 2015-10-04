/*var translations = {
  "en": {
    "chooseLangText": "Choose language",
    "hp2": "(On desktop click and drag from left to right)",
    "ht": "Welcome"
  },
  "es": {
    "chooseLangText": "Streichen Sie nach rechts, um die linke Menü offenbaren.",
    "hp2": "(Auf dem Desktop klicken und ziehen Sie von links nach rechts)",
    "ht": "willkommen"
  }
};*/

angular.module('starter.controllers', ['pascalprecht.translate'])

    /*.config(function($translateProvider){
      for(var lang in translations){
        $translateProvider.translations(lang, translations[lang]);
      }

      $translateProvider.preferredLanguage('en');
    })*/

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $translate) {

      $scope.data = {};

      $scope.languageChanged = function() {
        console.log('language changed'+$scope.data.lang);
        console.log('test'+JSON.stringify(translations[$scope.data.lang]));
        $translate.use($scope.data.lang);
      }

})

.controller('WeeklyProgressCtrl', function($scope, $translate) {

      $scope.social = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 20,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [2]
          },
          {
            name: 'Goal',
            data: [20]
          }
        ],
        title: {
          text: 'Social/Emotional'
        },

        loading: false
      };

      $scope.litVocab = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 20,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [11]
          },
          {
            name: 'Goal',
            data: [20]
          }
        ],
        title: {
          text: 'Literacy/Vocabulary'
        },

        loading: false
      };

      $scope.math = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 30,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [3]
          },
          {
            name: 'Goal',
            data: [30]
          }
        ],
        title: {
          text: 'Math/Problem Solving'
        },

        loading: false
      };

      $scope.literacy = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 20,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [17]
          },
          {
            name: 'Goal',
            data: [20]
          }
        ],
        title: {
          text: 'Literacy/Storytelling'
        },

        loading: false
      };

      $scope.arts = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 20,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [6]
          },
          {
            name: 'Goal',
            data: [20]
          }
        ],
        title: {
          text: 'Arts'
        },

        loading: false
      };

      //reading
      $scope.reading = {
        options: {
          chart: {
            type: 'bar'
          }
        },
        xAxis: {
          categories: [''],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          max : 100,
          title: {
            text: 'Mins.',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        series: [
          {
            name: 'Progress',
            data: [60]
          },
          {
            name: 'Goal',
            data: [100]
          }
        ],
        title: {
          text: 'Reading/Listening'
        },

        loading: false
      };

})

.controller('InitAssessmentCtrl', function($scope) {
      /*$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];*/
      $scope.chartConfig = {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
          }
        },
        title: {
          text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }
        },
        series: [{
          type: 'pie',
          name: 'Browser share',
          data: [
            ['Firefox',   45.0],
            ['IE',       26.8],
            {
              name: 'Chrome',
              y: 12.8,
              sliced: true,
              selected: true
            },
            ['Safari',    8.5],
            ['Opera',     6.2],
            ['Others',   0.7]
          ]
        }]
      }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
