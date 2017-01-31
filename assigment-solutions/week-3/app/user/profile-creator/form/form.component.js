angular.module('app.user')
    .component('profileForm', {
        templateUrl: 'app/user/profile-creator/form/form.component.html',
        bindings: {
        	user: '=',
        	onSubmit: '&',
        }
    })