(function() {
  angular.module('wavesApp')
    .controller("LikeListController", LikeListController)
    .controller("LikeShowController", LikeShowController)
    .controller("LikeNewController", LikeNewController)
    .controller("LikeEditController", LikeEditController);


    LikeListController.$inject = ['LikeResource', '$auth'];
    LikeShowController.$inject = ['LikeResource', '$stateParams'];
    LikeNewController.$inject  = ['LikeResource', '$state'];
    LikeEditController.$inject = ['LikeResource', '$stateParams', '$state'];

    function LikeListController(LikeResource, $auth) {
      var vm = this;
      vm.likes = [];
      vm.spotifyLogin = spotifyLogin;

      LikeResource.query().$promise.then(function(likes) {
        vm.likes = likes;
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

    function LikeShowController(LikeResource, $stateParams) {
      var vm = this;
      vm.like = {};

       LikeResource.get({id: $stateParams.id}).$promise.then(function(jsonLike) {
            vm.like = jsonLike;
      });
    }

    function LikeNewController(LikeResource, $state) {
      var vm = this;
      vm.newLike = {};
      vm.addLike = addLike;

      function addLike() {
        LikeResource.save(vm.newLike).$promise.then(function(jsonLike) {
          vm.newLike = {};
          $state.go('likeShow', {id: jsonLike.id});
        });
      }
    }

    function LikeEditController(LikeResource, $stateParams, $state) {
      var vm = this;
      vm.like = {};
      vm.editLike = editLike;

      LikeResource.get({id: $stateParams.id}).$promise.then(function(jsonLike) {
          vm.like = jsonLike;
      });

      function editLike() {
        LikeResource.update({id: vm.like.id}, vm.like).$promise.then(function(updatedLike) {
          vm.like = updatedLike;
          $state.go('musicShow', {id: updatedLike.id});
        });
      }
    }
})();
