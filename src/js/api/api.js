;(function(){
  API = window.API || {
    login:function(params,callback){
      this._execute("_api/login.json",params,callback)
    },
    _execute:function(url,params,callback){
      $.get(url,params,callback);
    }      
  };
})();