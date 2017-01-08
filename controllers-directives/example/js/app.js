angular.module('myApp', [])
.controller('firstController', ['data', iAmAController])
.controller('secondController', ['data', iAmAnotherController])
.service('data', iAmDataService);