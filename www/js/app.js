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
    "card3Txt": "Welcomelja"
  },
  "es": {
    "chooseLangText": "Streichen Sie nach rechts, um die linke Menü offenbaren.",
    "card1Txt": "(On desktop click and drag from left to right)",
    "card2Txt": "Welcome123",
    "card3Txt": "Welcome123"
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
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
