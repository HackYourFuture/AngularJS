angular.module('app', ['ui.router', 'app.user', 'app.navbar'])
.config(routing);

function routing($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		component: 'userList'
	})
	.state('userList', {
		url: '/user/list',
		component: 'userList'
	})
	.state('userDetail', {
		url: '/user/detail/:id',
		component: 'userDetail'
	})
	.state('createProfile', {
		url: '/user/profile',
		component: 'profile'
	})
	$urlRouterProvider.otherwise('/')
}