
/**
 * VIEW regSuccess
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
  App.regSuccessView.wrap({
    beforeRender:function(){
      //TODO
      setTimeout(function() {
        App.navigate('index',true);
      }, 3000);
      return true;
    },
    ready:function(){
      //TODO
    },
    afterUnRender:function(){
    }
  });
})();
      