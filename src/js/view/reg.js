/**
 * VIEW reg
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
	App.regView.wrap({
		events:{
			"tap .captcha-btn":"captcha"
		},
		beforeRender:function(){
			//TODO
			return true;
		},
		ready:function(){
			//TODO
		},
		afterUnRender:function(){
		},
		captcha:function(){
			App.loading();
			var account = this.$el.find("[type=text]").val();
			if(account){
				API.captcha(account,function(data){
					App.unLoading();
					console.log(data)
					App.regView.account=account;
					App.navigate("captcha");
				})
			}
			
		}
	});
})();