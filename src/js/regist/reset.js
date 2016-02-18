
App.registView("reset",new App.View({
	el:"#reset",
	model:new App.Model()
}),true);

App.registView("captcha",new App.AsyncView({
	el:"#captcha",
	model:new App.Model()
}),false);

App.registView("resetpw",new App.View({
  el:"#resetpw",
  model:new App.Model()
}),false);

App.registView("resetS",new App.View({
	el:"#resetS",
	model:new App.Model()
}),false);
