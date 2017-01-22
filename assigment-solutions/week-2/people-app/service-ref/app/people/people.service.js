angular.module('app.people')
    .service('peopleService', peopleService)

function peopleService($http) {
    var self = this

    self.person = {
        name: '',
        role: '',
        pictureUrl: '',
        linkedInUrl: '',
    }
    self.list = []

    self.getAll = function() {
        return $http.get('http://localhost:3000/persons')
    }

    self.setPerson = function(person) {
        // self.person = person
        self.person.name = person.name
        self.person.role = person.role
        self.person.pictureUrl = person.pictureUrl
        self.person.linkedInUrl = person.linkedInUrl
    }

    self.setList = function(list) {
        self.list.splice(0)
        Object.assign(self.list, list)
    }
}