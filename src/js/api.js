;(function () {

  app.service('API',function ($http) {
    

    function _execute(func,params,callback){
      $http({
        method:'GET',
        url:prefix+func+".do",
        params:angular.extend(params,{
          authUserId:14717
        })
      }).success(callback);
    }
  })
})();