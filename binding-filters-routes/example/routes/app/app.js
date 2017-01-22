angular.module('app', ['ui.router', 'app.continent'])
.config(routing);

function routing($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('continent', {
		url: '/',
		component: 'continent'
	})
	.state('list', {
		url: '/country/list',
		component: 'countryList'
	})
	.state('country', {
		url: '/country/detail/:index',
		component: 'countryDetail'
	})
	$urlRouterProvider.otherwise('/')
}