angular.module('app.hello')
.component('user', {
    templateUrl: 'app/hello/user/user.component.html',
    bindings: {
            name: '<',
        }
})