function LogModal() {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
      user: '='
    },
    templateUrl: 'app/components/logModal/logModal.html',
    controller: LogModalController,
    controllerAs: 'ctrl',
    link: LogModalLink,
    bindToController: true
  }

  function LogModalLink($scope) {

  }
  return directive;
}

LogModalController.$inject = [];

function LogModalController() {
  var ctrl = this;

}

angular.module('app').directive('logModal', LogModal);
