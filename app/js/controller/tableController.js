app.controller('MainCtrl', function(getData) {
    vm = this;
    vm.orderByField = 'id';
    vm.reverseSort = false;
    vm.getDetails = function(currentDetails){
      vm.title = currentDetails.title;
      vm.body = currentDetails.body;
    };
    getData.then(function(res){
      vm.tableParams =  res;
    },function(err){
        console.log("Error Found",err.error);
    })
  })