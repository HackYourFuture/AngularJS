angular.module('app.helloWorld')
.component('helloServer', {
    templateUrl: 'app/hello-world/hello-server.component.html',
    controller: helloController,
    controllerAs: 'ctrl',
})