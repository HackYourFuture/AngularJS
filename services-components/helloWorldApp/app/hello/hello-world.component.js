angular.module('app.hello')
.component('helloWorld', {
    templateUrl: 'app/hello/hello-world.component.html',
    controller: helloController,
    controllerAs: 'ctrl',
})