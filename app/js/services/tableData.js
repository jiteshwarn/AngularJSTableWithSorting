app.factory('getData',function($http,$q){
    var deferred = $q.defer();
        $http.get('https://jsonplaceholder.typicode.com/posts')
            .success(function(res) {
                deferred.resolve(res);
            })
            .error(function(err) {
                deferred.reject({
                    error: err
                });
            });
        return deferred.promise;
});