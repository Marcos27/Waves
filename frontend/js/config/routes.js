(function() {
  angular.module('wavesApp')
    .config(MainRouter);

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })
        .state('musicList', {
          url: '/music/list',
          templateUrl: 'js/music/music-list.html',
          controller: 'MusicListController',
          controllerAs: 'musicListVm'
        })
        .state('musicShow', {
          url: '/music/show/:id',
          templateUrl: 'js/music/music-show.html',
          controller: 'MusicShowController',
          controllerAs: 'musicShowVm'
        })
        .state('musicNew', {
          url: '/music/new',
          templateUrl: 'js/music/music-list.html',
          controller: 'MusicNewController',
          controllerAs: 'musicNewVm'
        })
        .state('musicEdit', {
        url: '/music/edit/:id',
        templateUrl: 'js/music/music-edit.html',
        controller: 'MusicEditController',
        controllerAs: 'MusicEditVm'
        })
        .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/auth/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
        });


        $urlRouterProvider.otherwise('/');
    }
})();
