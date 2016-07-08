angular.module('App.services', [])

  .factory('UserService', function() {
    var userInfo = {
      userId: 'shannonmilo@gmail.com',
      userName: 'Shannon Milo',
      profileImg: 'img/profile.jpg',
      socialAuth: '',
    };

    return {
      get: function() {
        return userInfo;
      },
      set: function(user) {
        userInfo = user;
      },
      getSocialAuth: function() {
        return userInfo.socialAuth;
      },
      setSocialAuth: function(socialAuth) {
        userInfo.socialAuth = socialAuth;
      }
    };
  })

  .factory('SocialChannels', function() {
    var socialList = [{
      id: 0,
      name: 'Facebook',
      desc: 'Facebook',
      loginFunc: 'showFaceBookLogin()',
      icon: 'ion-social-facebook',
      btnCss: 'app-social-facebook-button',
      added: 'false'
    }, {
      id: 1,
      name: 'Twitter',
      desc: 'Profiles',
      loginFunc: 'showTwitterLogin()',
      icon: 'ion-social-twitter',
      btnCss: 'app-social-twitter-button',
      added: 'false'
    }, {
      id: 2,
      name: 'Google+',
      desc: 'Page',
      loginFunc: 'showGooglePlusLogin()',
      icon: 'ion-social-googleplus',
      btnCss: 'app-social-google-plus-button',
      added: 'false'
    }, {
      id: 3,
      name: 'Pinterest',
      desc: 'Board',
      loginFunc: 'showPinterestLogin()',
      icon: 'ion-app-pinterest',
      btnCss: 'app-social-pinterest-button',
      added: 'false'
    }, {
      id: 4,
      name: 'LinkedIn',
      desc: 'Profile, Groups or Page',
      loginFunc: 'showLinkedInLogin()',
      icon: 'ion-app-linkedin',
      btnCss: 'app-social-linkedin-button',
      added: 'false'
    }];

    return {
      all: function() {
        return socialList;
      },
      get: function(socialId) {
        for (var i = 0; i < socialList.length; i++) {
          if (socialList[i].id === parseInt(socialId)) {
            return socialList[i];
          }
        }
        return null;
      },
      setActive: function(socialId) {
        for (var i = 0; i < socialList.length; i++) {
          if (socialList[i].id === parseInt(socialId)) {
            socialList[i].added = true;
          }
        }
      },
      getAddedCount: function() {
        var count = 0;
        for (var i = 0; i < socialList.length; i++) {
          if (socialList[i].added == true) {
            count++;
          }
        }
        return count;
      },
    };
  })

  .factory('Coupons', function() {
    var couponList = [{
      id: 0,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl tortor, nec dapibus lectus blandit ut. Sedut mi vestibulum, pellentesque ex et, ornare lacus.',
      retailPrice: '15.00',
      discountPrice: '7.00',
      dateTime: 'Jan 15, 2015 / 14:00AM EST',
      attachment: '',
    }, {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl tortor, nec dapibus lectus blandit ut. Sedut mi vestibulum, pellentesque ex et, ornare lacus.',
      retailPrice: '15.00',
      discountPrice: '7.00',
      dateTime: 'Jan 15, 2015 / 14:00AM EST',
      attachment: '',
    }, {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl tortor, nec dapibus lectus blandit ut. Sedut mi vestibulum, pellentesque ex et, ornare lacus.',
      retailPrice: '15.00',
      discountPrice: '7.00',
      dateTime: 'Jan 15, 2015 / 14:00AM EST',
      attachment: '',
    }, {
      id: 3,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl tortor, nec dapibus lectus blandit ut. Sedut mi vestibulum, pellentesque ex et, ornare lacus.',
      retailPrice: '15.00',
      discountPrice: '7.00',
      dateTime: 'Jan 15, 2015 / 14:00AM EST',
      attachment: '',
    }, {
      id: 4,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim nisl tortor, nec dapibus lectus blandit ut. Sedut mi vestibulum, pellentesque ex et, ornare lacus.',
      retailPrice: '15.00',
      discountPrice: '7.00',
      dateTime: 'Jan 15, 2015 / 14:00AM EST',
      attachment: '',
    }];

    return {
      all: function() {
        return couponList;
      },
      get: function(id) {
        for (var i = 0; i < couponList.length; i++) {
          if (couponList[i].id === parseInt(id)) {
            return couponList[i];
          }
        }
        return null;
      },
    };
  });
