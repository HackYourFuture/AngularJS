angular.module('app.people')
    .service('peopleService', peopleService)

function peopleService($http) {
    var vm = this

    vm.getAll = function() {
        return $http.get('http://localhost:3000/persons')
            .then(function(response) {
                return response.data;
            })
    }
}