angular.module('app.hello')
.service('helloWorldService', helloWorldService)

function helloWorldService($http, api) {
    var self = this
    
    self.getMessage = function() {
        return $http.get(api.root + api.message)
    }
}