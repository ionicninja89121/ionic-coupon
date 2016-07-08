angular.module('App.controllers', [])

  /*
   * Start logo page controller
   */
  .controller('HomeCtrl', function($scope, $state) {
    $scope.goAuth = function() {
      $state.go('auth');
    }
  })

  /*
   * App Abstract Controller for general using
   */
  .controller('AppCtrl', function($scope, $ionicModal, $ionicPopup, UserService, SocialChannels, $state, $timeout) {

    $scope.channelCount = 0;  // count of added social-channel
    $scope.isSocialAuth = false;  // is it social auth or add social account
    $scope.channelList = SocialChannels.all();  // all social channel list

    /*
     * Facebook login modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-facebook-login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_facebook_login = modal;
    });
    $scope.showFaceBookLogin = function(isAuth) {
      $scope.isSocialAuth = isAuth;
      $scope.modal_facebook_login.show();
    };
    $scope.closeFaceBookLogin = function() {
      $scope.modal_facebook_login.hide();
    };
    $scope.goFaceBookLogin = function() {
      // Add here facebook login process

      // Add facebook to channel
      SocialChannels.setActive(0);
      // Update Added channel count
      $scope.channelCount = SocialChannels.getAddedCount();

      $scope.closeFaceBookLogin();

      if ($scope.isSocialAuth) {  // if social login
        // Update Social Auth type
        UserService.setSocialAuth('facebook');
        $scope.isSocialAuth = false;
        $timeout(function() {
          $scope.goConnectList();
        }, 500);
      }
    };

    /*
     * Google Plus login modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-google-plus-login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_google_plus_login = modal;
    });
    $scope.showGooglePlusLogin = function(isAuth) {
      $scope.isSocialAuth = isAuth;
      $scope.modal_google_plus_login.show();
    };
    $scope.closeGooglePlusLogin = function() {
      $scope.modal_google_plus_login.hide();
    };
    $scope.goGooglePlusLogin = function() {
      // Add here google-plus login process

      // Add google-plus to channel
      SocialChannels.setActive(2);
      // Update Added channel count
      $scope.channelCount = SocialChannels.getAddedCount();
      $scope.closeGooglePlusLogin();

      if ($scope.isSocialAuth) {  // if social login
        // Update Social Auth type
        UserService.setSocialAuth('googleplus');
        $scope.isSocialAuth = false;
        $timeout(function() {
          $scope.goConnectList();
        }, 500);
      }
    };

    /*
     * Twitter login modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-twitter-login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_twitter_login = modal;
    });
    $scope.showTwitterLogin = function(isAuth) {
      $scope.isSocialAuth = isAuth;
      $scope.modal_twitter_login.show();
    };
    $scope.closeTwitterLogin = function() {
      $scope.modal_twitter_login.hide();
    };
    $scope.goTwitterLogin = function() {
      // Add here twitter login process

      // Add twitter to channel
      SocialChannels.setActive(1);
      // Update Added channel count
      $scope.channelCount = SocialChannels.getAddedCount();
      $scope.closeTwitterLogin();

      if ($scope.isSocialAuth) {  // if social login
        // Update Social Auth type
        UserService.setSocialAuth('twitter');
        $scope.isSocialAuth = false;
        $timeout(function() {
          $scope.goConnectList();
        }, 500);
      }
    };

    /*
     * Pinterest login modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-pinterest-login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_pinterest_login = modal;
    });
    $scope.showPinterestLogin = function(isAuth) {
      $scope.isSocialAuth = isAuth;
      $scope.modal_pinterest_login.show();
    };
    $scope.closePinterestLogin = function() {
      $scope.modal_pinterest_login.hide();
    };
    $scope.goPinterestLogin = function() {
      // Add here Pinterest login process

      // Add Pinterest to channel
      SocialChannels.setActive(3);
      // Update Added channel count
      $scope.channelCount = SocialChannels.getAddedCount();
      $scope.closePinterestLogin();
    };

    /*
     * LinkedIn login modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-linkedin-login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_linkedin_login = modal;
    });
    $scope.showLinkedInLogin = function(isAuth) {
      $scope.isSocialAuth = isAuth;
      $scope.modal_linkedin_login.show();
    };
    $scope.closeLinkedInLogin = function() {
      $scope.modal_linkedin_login.hide();
    };
    $scope.goLinkedInLogin = function() {
      // Add here LinkedIn login process

      // Add LinkedIn to channel
      SocialChannels.setActive(4);
      // Update Added channel count
      $scope.channelCount = SocialChannels.getAddedCount();
      $scope.closeLinkedInLogin();
    };

    $scope.newCoupon = {
      desc: '',
      retailPrice: '',
      discountPrice: '',
      dateTime: '',
      attachment: '',
    };
    /*
     * Create Coupon Modal
     */
    $ionicModal.fromTemplateUrl('templates/modal-coupon-create.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal_coupon_create = modal;
    });
    $scope.showCouponCreate = function() {
      $scope.modal_coupon_create.show();
    };
    $scope.closeCouponCreate = function() {
      $scope.modal_coupon_create.hide();
    };

    $scope.leftCouponDescChars = 5000;
    $scope.onTypeCouponDesc = function() {
      $scope.leftCouponDescChars = 5000-$scope.newCoupon.desc.length;
    };

    /*
     * Go to Social Channel View
     */
    $scope.goConnectList = function() {
      $state.go('connect');
    };

    /*
     * Go to Coupons List View
     */
    $scope.goCouponsList = function() {
      $state.go('coupons');
    };

    /*
     * Go to Post New Coupon
     */
    $scope.goPostCoupon = function() {
      if ($scope.channelCount > 0) {
        $scope.showCouponCreate();
        /*$state.go('createCoupon');*/
      } else {
        $scope.showAppAlert('Add at lest one channel to start posting.');
      }
    };

    /*
     * Post new coupon
     */
    $scope.postCoupon = function() {

      // Add here to post coupon

      $timeout(function() {
        $scope.closeCouponCreate();
      }, 500);
    };

    /*
     * Pick up Media for Posting
     */
    $scope.pickupMedia = function() {
      $scope.isAttached = true;
    };

    /*
     * Remove Attached Media
     */
    $scope.removeAttachedMedia = function() {
      $scope.isAttached = false;
    };

    /*
     * Go to Settings View
     */
    $scope.goSettings = function() {
      $state.go('settings');
    };

    /*
     * Show Alert
     */
    $scope.showAppAlert = function(strMsg) {
      var alertPopup = $ionicPopup.alert({
        title: '10 minutes Coupon',
        cssClass: 'app-alert',
        template: strMsg
      });

      alertPopup.then(function(res) {
      });
    };
  })

  /*
   * Authenticate Controller for login/register and social login
   */
  .controller('AuthCtrl', function($scope, $state, UserService) {
    $scope.agreed = true;
    $scope.auth_tab_active = [true, false];
    $scope.onAuthTab = function(tab_idx) {
      $scope.auth_tab_active[tab_idx] = true;
      $scope.auth_tab_active[1-tab_idx] = false;
    };
    // go to main page after signin/register
    $scope.goMain = function () {
      UserService.setSocialAuth('none');
      $scope.goConnectList();
    };
  })

  /*
   * Connect Controller to adding social account for posting
   */
  .controller('ConnectCtrl', function($scope, SocialChannels) {
    $scope.channelList = SocialChannels.all();
  })

  /*
   * Coupons List Controller
   */
  .controller('CouponsCtrl', function($scope, Coupons) {
    $scope.couponList = Coupons.all();
  })

  /*
   * Create Coupon Controller
   */
  .controller('CouponCreateCtrl', function($scope, SocialChannels) {
    $scope.channelList = SocialChannels.all();
  })

  /*
   * Edit Coupon Controller
   */
  .controller('CouponEditCtrl', function($scope) {

  })

  /*
   * Settings Controller
   */
  .controller('SettingsCtrl', function($scope, UserService) {
    $scope.userInfo = UserService.get();
  })

  .controller('DefaultCtrl', function($scope) {

  });
