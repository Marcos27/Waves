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

        $urlRouterProvider.otherwise('/');
    }
})();
