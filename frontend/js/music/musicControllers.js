(function() {
  angular.module('wavesApp')
    .controller("MusicListController", MusicListController)


    MusicListController.$inject = ['MusicResource', '$auth']


    function MusicListController(MusicResource, $auth) {
      var vm = this;
      vm.musics = [];

      vm.spotifyLogin = spotifyLogin;

      MusicResource.query().$promise.then(function(musics) {
        vm.musics = musics;
      })

      function spotifyLogin(){
        $auth.authenticate('spotify')
          .then(function(resp) {
            console.log(resp)
          })
          .catch(function(resp) {
            console.log('errors: ', resp)
          })
      }
    }
})();
