angular.module('app.hello')
.component('helloServer', {
    templateUrl: 'app/hello/hello-server.component.html',
    controller: helloController,
    controllerAs: 'ctrl',
})