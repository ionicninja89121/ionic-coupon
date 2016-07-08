
angular.module('App', ['ionic', 'App.controllers', 'App.services', 'ui.mask'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // align center of navigation bar title
  $ionicConfigProvider.navBar.alignTitle('center');

  $stateProvider

    .state('start', {
      url: '/start',
      abstract: true,
      templateUrl: 'templates/starter.html',
    })

    .state('start.home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
    })

    .state('auth', {
      url: '/auth',
      templateUrl: 'templates/auth.html',
      controller: 'AuthCtrl'
    })

    .state('connect', {
      url: '/connect',
      templateUrl: 'templates/connect.html',
      controller: 'ConnectCtrl'
    })

    .state('coupons', {
      url: '/coupons',
      templateUrl: 'templates/coupons.html',
      controller: 'CouponsCtrl'
    })

    .state('createCoupon', {
      url: '/create-coupon',
      templateUrl: 'templates/coupon-create.html',
      controller: 'CouponCreateCtrl'
    })

    .state('editCoupon', {
      url: '/edit-coupon',
      templateUrl: 'templates/coupon-edit.html',
      controller: 'CouponEditCtrl'
    })

    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start/home');
});
