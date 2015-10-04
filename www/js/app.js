// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var translations = {
  "en": {
    "chooseLangText": "Choose language",
    "card1Txt": "(On desktop click and drag from left to right)",
    "card2Txt": "Welcokajf",
    "card3Txt": "Welcomelja",
    "text1":"Your child has done a great job this week learning his letter sounds. He's well on the way to being ready for kindergarten!",
    "text2": "Let's practice learning letter sounds some more. Your child will be reading in no time!",
    "text3": "Make sure to play some counting games together! Counting is a building block for adding and subtracting.",
    "text4": "Your child has spent a lot of time this week exploring games that will help her learn how to count."
  },
  "es": {
    "chooseLangText": "Elige lengua",
    "card1Txt": "(On desktop click and drag from left to right)",
    "card2Txt": "Welcome123",
    "card3Txt": "Welcome123",
    "text1":"Su hijo ha hecho un gran trabajo esta semana aprender sus sonidos de las letras . Está bien en la manera de estar listo para el kinder!",
    "text2": "Vamos carta de aprendizaje práctica suena un poco más. Su hijo estará leyendo en poco tiempo!",
    "text3": "Asegúrese de jugar a algunos juegos de conteo juntos! Contar es un bloque de construcción para sumar y restar.",
    "text4": "Su hijo ha pasado mucho tiempo esta semana explorando los juegos que le ayudarán a aprender cómo contar."
  }
};

angular.module('starter', ['ionic', 'starter.controllers','highcharts-ng','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

      for(var lang in translations){
        $translateProvider.translations(lang, translations[lang]);
      }

      $translateProvider.preferredLanguage('en');

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.initialAssessment', {
    url: '/initialAssessment',
    views: {
      'menuContent': {
        templateUrl: 'templates/initialAssessment.html',
        controller: 'InitAssessmentCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.weeklyProgress', {
      url: '/weeklyProgress',
      views: {
        'menuContent': {
          templateUrl: 'templates/weeklyProgress.html',
          controller: 'WeeklyProgressCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.evaluvation', {
    url: '/evaluvation',
    views: {
      'menuContent': {
        templateUrl: 'templates/evaluvation.html',
        controller: 'EvaluvationCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
