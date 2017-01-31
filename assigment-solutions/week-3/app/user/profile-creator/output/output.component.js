angular.module('app.user')
    .component('profileOutput', {
        templateUrl: 'app/user/profile-creator/output/output.component.html',
        bindings: {
        	user: '<',
        }
    })