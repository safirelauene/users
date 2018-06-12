function ModalConfirm() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      action: '='
    },
    templateUrl: 'app/components/modalConfirm/modalConfirm.html',
    controller: ModalConfirmController,
    controllerAs: 'ctrl',
    link: ModalConfirmLink,
    bindToController: true
  }

  function ModalConfirmLink($scope) {

  }
  return directive;
}

ModalConfirmController.$inject = [];

function ModalConfirmController() {
  var ctrl = this;

  ctrl.confirm = () => {
    ctrl.action();
  }

}

angular.module('app').directive('modalConfirm', ModalConfirm);
