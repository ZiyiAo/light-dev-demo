/**
 * VIEW reginfo
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
	App.reginfoView.wrap({
		events:{
			"tap .reg-btn":"reg"
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
		reg:function(){
			var nickname = this.$el.find("[type=text]").val();
			var password = this.$el.find("[type=password]").first().val();
			var repassword = this.$el.find("[type=password]").last().val();

			if(nickname){
				if(password&&repassword&&password==repassword){
					API.reg({
						nickname:nickname,
						password:password,
						account:App.regView.account
					},function(data){
						App.navigate("regSuccess");
					})
				}else{
					alert("请检查您输入的密码！");
				}
			}else{
				alert("请输入昵称")
			}
		}
	});
})();