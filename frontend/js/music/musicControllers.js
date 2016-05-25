(function() {
  angular.module('wavesApp')
    .controller("MusicListController", MusicListController)
    .controller("MusicShowController", MusicShowController)
    .controller("MusicNewController", MusicNewController)
    .controller("MusicEditController", MusicEditController);


    MusicListController.$inject = ['MusicResource', '$auth'];
    MusicShowController.$inject = ['MusicResource', '$stateParams'];
    MusicNewController.$inject  = ['MusicResource', '$state'];
    MusicEditController.$inject = ['MusicResource', '$stateParams', '$state'];

    function MusicListController(MusicResource, $auth) {
      var vm = this;
      vm.musics = [];
      vm.spotifyLogin = spotifyLogin;

      MusicResource.query().$promise.then(function(musics) {
        vm.musics = musics;
      });

      function spotifyLogin() {
        $auth.authenticate('spotify')
          .then(function(resp) {
            console.log(resp)
          })
          .catch(function(resp) {
            console.log('errors: ', resp)
          });
      }
    }

    function MusicShowController(MusicResource, $stateParams) {
      var vm = this;
      vm.music = {};

       MusicResource.get({id: $stateParams.id}).$promise.then(function(jsonMusic) {
            vm.music = jsonMusic;
      });
    }

    function MusicNewController(MusicResource, $state) {
      var vm = this;
      vm.newMusic = {};
      vm.addMusic = addMusic;

      function addMusic() {
        MusicResource.save(vm.newMusic).$promise.then(function(jsonMusic) {
          vm.newMusic = {};
          $state.go('musicShow', {id: jsonMusic.id});
        });
      }
    }

    function MusicEditController(MusicResource, $stateParams, $state) {
      var vm = this;
      vm.music = {};
      vm.editMusic = editMusic;

      MusicResource.get({id: $stateParams.id}).$promise.then(function(jsonMusic) {
          vm.music = jsonMusic;
      });

      function editShow() {
        MusicResource.update({id: vm.music.id}, vm.music).$promise.then(function(updatedShow) {
          vm.music = updatedMusic;
          $state.go('musicShow', {id: updatedMusic.id});
        });
      }
    }
})();
