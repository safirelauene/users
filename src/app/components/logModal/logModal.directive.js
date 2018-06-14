function LogModal(LogService) {
  const directive = {
    restrict: 'E',
    replace: true,
    scope: {
    },
    templateUrl: 'app/components/logModal/logModal.html',
    controller: LogModalController,
    controllerAs: 'ctrl',
    link: LogModalLink,
    bindToController: true
  }

  function LogModalLink($scope) {
    angular.element('#logModal').on('show.bs.modal', function (e) {
      $scope.ctrl.logs = angular.copy(LogService.getLogs());
      $scope.$apply();
    })
  }
  return directive;
}

LogModal.$inject = ['LogService'];

function LogModalController(LogService) {
  var ctrl = this;

}

angular.module('app').directive('logModal', LogModal);
