/**
 * VIEW login
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
	App.loginView.wrap({
		events:{
			"tap .login-btn":"login"
		},
		beforeRender:function(){
			//TODO
			this.$el.find(".footer").append(App.t1Template());
			return true;
		},
		ready:function(){
			//TODO
		},
		afterUnRender:function(){
			this.$el.find(".footer").find('#template').remove();
			this.$el.find("[type=text]").val('');
			this.$el.find("[type=password]").val('');
		},
		login:function(){
			var name=this.$el.find("[type=text]").val();
			var passwd=this.$el.find("[type=password]").val();

			if(name&&passwd){
				App.loading();
				API.login({
					name:name,
					passwd:passwd
				},function(data){
					if(data.err_no==0){
						App.unLoading();
						App.navigate("loginSuccess");
					}
				})
			}else{
				alert("用户名或者密码不能为空！");
			}
		}
	});
})();