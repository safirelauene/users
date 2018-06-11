function UserController(UserService) {

  const vm = this;

  vm.setSelectedUser = (user) => {
    vm.selectedUser = user;
  }

  vm.saveUser = (user) => {
    UserService.saveUser(user);
  }

  function Init() {
    vm.users = UserService.getUsers();
    vm.selectedUser;
  }

  Init();
}
angular.module('app').controller('UserController', UserController);
UserController.$inject = ['UserService'];
