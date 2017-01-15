angular.module('app.helloWorld', [])
.constant('api', {
    root: 'http://localhost:3000',
    message: '/message',
})