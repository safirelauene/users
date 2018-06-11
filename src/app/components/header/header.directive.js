function header() {
  const directive = {
    restrict: 'E',
    templateUrl: 'app/components/header/header.html',
    replace: true,
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

angular.module('app').directive('header', header);
HeaderController.$inject = [];

function HeaderController() {
  const vm = this;
}
