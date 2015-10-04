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
            height: 200,
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
            data: [2],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [20],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

      $scope.litVocab = {
        options: {
          chart: {
            height: 200,
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
            data: [11],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [20],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

      $scope.math = {
        options: {
          chart: {
            height: 200,
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
            data: [3],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [30],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

      $scope.literacy = {
        options: {
          chart: {
            height: 200,
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
            data: [17],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [20],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

      $scope.arts = {
        options: {
          chart: {
            height: 200,
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
            data: [6],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [20],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

      //reading
      $scope.reading = {
        options: {
          chart: {
            height: 200,
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
            data: [60],
            pointWidth: 10
          },
          {
            name: 'Goal',
            data: [100],
            pointWidth: 10
          }
        ],
        title: {
          text: null
        },

        loading: false
      };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
      //iop
})

    .controller(
    'EvaluvationCtrl',
    function($scope) {
// Arts
      $scope.artsinit = {
        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 1.2 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Emerging</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Initial',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.artsfinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 2.2 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Final',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };
// Fine-Motor
      $scope.motoinit = {
        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 3.4 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Initial',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.motofinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 4.7 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Final',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };

// Literature
      $scope.litinit = {
        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 2 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Initial',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.litfinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 3.4 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Profecient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Final',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };
// Fine-Motor
      $scope.motoinit = {
        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 4.2 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Initial',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 5,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.motofinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 4.6 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Final',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 5,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };

// Social
      $scope.socinit = {
        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 2.7 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Social/Emotional',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.socfinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 3.6 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Profecient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Social/Emotional',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };

// Math - Probelm Solving
      $scope.mathinit = {
        options : {
          chart : {
            type : 'solidgauge'
//            height:200
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 1.5 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Emerging</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Initial',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false
      };

      $scope.mathfinal = {

        options : {
          chart : {
            type : 'solidgauge'
          },
          tooltip : {
            enabled : false
          },
          pane : {
            center : [ '50%', '85%' ],
            size : '140%',
            startAngle : -90,
            endAngle : 90,
            background : {
              backgroundColor : '#EEE',
              innerRadius : '60%',
              outerRadius : '100%',
              shape : 'arc'
            }
          },
          solidgauge : {
            dataLabels : {
              y : -5,
              borderWidth : 0,
              useHTML : true
            }
          }
        },
        series : [ {
          data : [ 3.8 ],
          dataLabels : {
            format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
            + '<span style="font-size:12px;color:silver">profiency</span></div>'
          }
        } ],
        title : {
          text : 'Final',
          y : 50
        },
        yAxis : {
          currentMin : 0,
          currentMax : 4,
          title : {
            y : 140
          },
          stops : [ [ 0.1, '#DF5353' ], // red
            [ 0.5, '#DDDF0D' ], // yellow
            [ 0.9, '#55BF3B' ] // green
          ],
          lineWidth : 0,
          tickInterval : 20,
          tickPixelInterval : 400,
          tickWidth : 0,
          labels : {
            y : -70
          }
        },
        loading : false

      };

    });

