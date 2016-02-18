
App.registView("reg",new App.View({
	el:"#reg",
	model:new App.Model()
}),true);

App.registView("captcha",new App.AsyncView({
	el:"#captcha",
	model:new App.Model()
}),false);

App.registView("reginfo",new App.View({
  el:"#reginfo",
  model:new App.Model()
}),false);

App.registView("regS",new App.View({
	el:"#regS",
	model:new App.Model()
}),false);