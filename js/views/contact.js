var ContactView = Backbone.View.extend({
	renderContent: function () {
		this.$el.html(Handlebars.templates.contact());
		return this;
	},

});