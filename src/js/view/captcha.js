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
				App.navigate("reginfo");
			}else{
				alert("请先输入验证码！");
			}
		}
	});
})();