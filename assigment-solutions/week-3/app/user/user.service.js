angular.module('app.user')
    .service('userService', userService)

function userService($http) {
    var self = this

    self.people = []

    self.getAll = function() {
        return $http.get('http://localhost:3000/persons')
            .then(function(response) {
                return response.data;
            })
    }

    self.postUser = function(user) {
    	// Here we can submit the user to the API if that endpoint is available
    	self.people.push(user);
    }
}