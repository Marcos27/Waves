(function() {
  angular.module('wavesApp')
    .controller("PlaylistListController", PlaylistListController)
    .controller("PlaylistShowController", PlaylistShowController)
    .controller("PlaylistNewController", PlaylistNewController)
    .controller("PlaylistEditController", PlaylistEditController);

    PlaylistListController.$inject = ['PlaylistResource'];
    PlaylistShowController.$inject = ['PlaylistResource', '$stateParams'];
    PlaylistNewController.$inject = ['PlaylistResource', '$state'];
    PlaylistEditController.$inject = ['PlaylistResource', '$stateParams', '$state'];

    function PlaylistListController(PlaylistResource) {
      var vm = this;
      vm.shows = [];
      vm.destroy = destroy;

      PlaylistResource.query().$promise.then(function(shows) {
        vm.shows = shows;
      });

      function destroy(showToDelete) {
        PlaylistResource.delete({id: showToDelete.id}).$promise.then(function (response) {
          console.log(response.message);
          vm.shows = vm.shows.filter(function(show) {
            return show != showToDelete;
          });
        });
      }
    }

    function PlaylistShowController(PlaylistResource, $stateParams) {
      var vm = this;
      vm.show = {};

      PlaylistResource.get({id: $stateParams.id}).$promise.then(function(jsonPlaylist) {
          vm.show = jsonPlaylist;
      });
    }

    function PlaylistNewController(PlaylistResource, $state) {
      var vm = this;
      vm.newPlaylist = {};
      vm.addPlaylist = addPlaylist;

      function addPlaylist() {
        PlaylistResource.save(vm.newPlaylist).$promise.then(function(jsonPlaylist) {
          vm.newPlaylist = {};
          $state.go('showPlaylist', {id: jsonPlaylist.id});
        });
      }
    }

    function PlaylistEditController(PlaylistResource, $stateParams, $state) {
      var vm = this;
      vm.show = {};
      vm.editPlaylist = editPlaylist;

      PlaylistResource.get({id: $stateParams.id}).$promise.then(function(jsonPlaylist) {
          vm.show = jsonPlaylist;
      });

      function editPlaylist() {
        PlaylistResource.update({id: vm.show.id}, vm.show).$promise.then(function(updatedPlaylist) {
          vm.show = updatedPlaylist;
          $state.go('showPlaylist', {id: updatedPlaylist.id});
        });
      }
    }

})();
