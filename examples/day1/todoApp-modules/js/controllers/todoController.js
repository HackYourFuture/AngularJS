angular.module('controllers', [])
.controller('todoController', ['$scope', todoController])

function todoController ($scope) {
	$scope.todos = []

	$scope.addTodo = function (newTodo) {
		if ($scope.todos.indexOf(newTodo) == -1) {
			$scope.todos.push({
				name: newTodo,
				done: false,
			})
		}
	}
}