function animals($http) {
  var LOCAL_URLS = {
    GET_ONE: 'animals.cat.json',
    GET_ALL: 'animals.all.json'
  };

  var REMOTE_URLS = {
    GET_ONE: 'http://api-nghyf.rhcloud.com/animals/cat',
    GET_ALL: 'http://api-nghyf.rhcloud.com/animals/all'
  };

  this.getOne = function() {
        return $http.get(REMOTE_URLS.GET_ONE);
      };
  this.getAll = function() {
        return $http.get(REMOTE_URLS.GET_ALL);
      };
}
