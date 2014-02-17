var HomeView = Backbone.View.extend({

	renderContent: function () {
		this.$el.html(Handlebars.templates.home);
		return this;
	},

});