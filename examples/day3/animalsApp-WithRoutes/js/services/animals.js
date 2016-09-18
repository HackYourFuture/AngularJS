function animals($http) {

  var REMOTE_URLS = {
    GET_ONE: 'http://api-nghyf.rhcloud.com/animals/',
    GET_ALL: 'http://api-nghyf.rhcloud.com/animals/all'
  };

  this.getOne = function(name) {
        return $http.get(REMOTE_URLS.GET_ONE + name);
      };
  this.getAll = function() {
        return $http.get(REMOTE_URLS.GET_ALL);
      };
}
