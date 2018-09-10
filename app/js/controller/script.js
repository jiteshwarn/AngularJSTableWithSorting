// Code goes here

var app = angular.module('sortTable', ["ngTable"]);

app.controller('MainCtrl', function(NgTableParams,getData) {
  vm = this;
  vm.getDetails = function(currentDetails){
    vm.title = currentDetails.title;
    vm.body = currentDetails.body;
  };
  getData.then(function(res){
    vm.tableParams = new NgTableParams({}, { dataset: res});
  },function(err){
      console.log("Error Found",err.error);
  })
}).factory('getData',function($http,$q){
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