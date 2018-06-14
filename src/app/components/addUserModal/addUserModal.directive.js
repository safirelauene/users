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

  function AddUserModalLink(ctrl) {
    angular.element('#myModal').on('show.bs.modal', function (e) {
      ctrl.addUserForm.$setPristine();
    })
  }
  return directive;
}

AddUserModalController.$inject = [];
function AddUserModalController() {
  var ctrl = this;

  ctrl.confirmOperation = () => {
    if(ctrl.addUserForm.$valid){
      if (ctrl.okFn != undefined) {
        ctrl.okFn(ctrl.user);
        angular.element('#myModal').modal('hide')
      }
    }
  };

}

angular.module('app').directive('addUserModal', AddUserModal);
