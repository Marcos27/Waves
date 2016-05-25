(function() {
  angular.module('wavesApp')
    .controller("MusicListController", MusicListController)
    .controller("MusicShowController", MusicShowController)
    .controller("MusicNewController", MusicNewController)
    .controller("MusicEditController", MusicEditController);


    MusicListController.$inject = ['MusicResource'];
    MusicShowController.$inject = ['MusicResource', '$stateParams'];
    MusicNewController.$inject  = ['MusicResource', '$state'];
    MusicEditController.$inject = ['MusicResource', '$stateParams', '$state'];

    function MusicListController(MusicResource) {
      var vm = this;
      vm.musics = [];

      MusicResource.query().$promise.then(function(musics) {
        vm.musics = musics;
      });
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

      function editMusic() {
        MusicResource.update({id: vm.music.id}, vm.music).$promise.then(function(updatedMusic) {
          vm.music = updatedMusic;
          $state.go('musicShow', {id: updatedMusic.id});
        });
      }
    }
})();
