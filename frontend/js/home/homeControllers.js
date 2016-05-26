(function() {
  angular.module('wavesApp')
    .controller("HomeController", HomeController)

    HomeController.$inject = ['$auth'];

  function HomeController($auth) {
    var vm = this;

      vm.spotifyLogin = spotifyLogin;

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
})();
