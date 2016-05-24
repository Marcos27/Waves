(function() {
  angular.module('wavesApp')
    .controller("MusicListController", MusicListController)


    MusicListController.$inject = ['MusicResource']

    function MusicListController(MusicResource) {
      var vm = this;
      vm.musics = [];

      MusicResource.query().$promise.then(function(musics) {
        vm.musics = musics;
      })
    }
})();
