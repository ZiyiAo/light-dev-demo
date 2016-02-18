/**
 * VIEW captcha
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
;(function(){
	App.captchaView.wrap({
		events:{
			"tap .next-btn":"next"
		},
		beforeRender:function(){
			//TODO
			return true;
		},
		ready:function(){
			//TODO
			console.log("异步试图加载！")
		},
		afterUnRender:function(){
		},
		next:function(){
			var captcha = this.$el.find("[type=text]");
			if(captcha){
				if(App.reginfoView){
					App.navigate("reginfo");
				}else{
					App.navigate("resetpw");
				}
			}else{
				alert("请先输入验证码！");
			}
		}
	});
})();