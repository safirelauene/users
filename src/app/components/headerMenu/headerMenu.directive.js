function headerMenu() {
  const directive = {
    restrict: 'E',
    templateUrl: 'app/components/headerMenu/headerMenu.html',
    replace: true,
    controller: HeaderController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

angular.module('app').directive('headerMenu', headerMenu);
HeaderController.$inject = [];

function HeaderController() {
  const vm = this;
}
