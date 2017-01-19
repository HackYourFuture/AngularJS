angular.module('app.hello', [])
.constant('api', {
    root: 'http://localhost:3000',
    message: '/message',
})