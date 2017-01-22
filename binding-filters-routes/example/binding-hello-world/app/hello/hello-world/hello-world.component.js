angular.module('app.hello')
.component('helloWorld', {
    templateUrl: 'app/hello/hello-world/hello-world.component.html',
    bindings: {
            message: '<',
            onGreet: '&',
            name: '=',
        }
})