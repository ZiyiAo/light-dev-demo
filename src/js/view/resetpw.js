/**
 * VIEW resetpw
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
	App.resetpwView.wrap({
		events:{
			"tap .reset-btn":"reset"
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
		reset:function(){
			var password = this.$el.find("[type=password]").first().val();
			var repassword = this.$el.find("[type=password]").last().val();

			if(password&&repassword&&password==repassword){
				API.reset({
					password:password,
					account:App.resetView.account
				},function(data){
					App.navigate("resetS");
				})
			}else{
				alert("请检查您输入的密码！");
			}
		}
	});
})();