function AddUserModal() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      user: '=',
      okFn: '='
    },
    templateUrl: 'app/components/addUserModal/addUserModal.html',
    controller: AddUserModalController,
    controllerAs: 'ctrl',
    link: AddUserModalLink,
    bindToController: true
  }

  function AddUserModalLink($scope) {

  }
  return directive;
}

AddUserModalController.$inject = [];
function AddUserModalController() {
  var ctrl = this;

  ctrl.confirmOperation = () => {
    if (ctrl.okFn != undefined) {
      ctrl.okFn(ctrl.user);
    }
  };

}

angular.module('app').directive('addUserModal', AddUserModal);
