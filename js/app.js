var AppRouter = Backbone.Router.extend({
	
	routes: {
		"": "home",
		"contact": "contact"
	},
	
	initialize: function  () {		
		this.homeView = new HomeView();
		this.contactView = new ContactView();
	},

	home: function () {
		$('#content').html(this.homeView.renderContent().el);
	},

	contact: function () {
		$('#content').html(this.contactView.renderContent().el);
	}
	
});

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});