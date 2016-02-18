;(function(){
  API = window.API || {
    login:function(params,callback){
      this._execute("_api/login.json",params,callback)
    },
    captcha:function(account,callback){
      var code = Math.floor(100000+Math.random()*100000);
      callback(code);
    },
    reg:function(params,callback){
      callback(params);
    },
    reset:function(params,callback){
      callback(params);
    },
    _execute:function(url,params,callback){
      $.get(url,params,callback);
    }      
  };
})();