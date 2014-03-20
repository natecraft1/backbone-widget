console.log("we're home");
define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
  ], 
function($,_,Backbone, HomeTemplate) {
  	var HomeView = Backbone.View.extend({
  		el: $('body'),
  		initialize: function() {
  			console.log("initialized");
  			console.log(this.$el);
  		},
  		render: function() {
  			var template = _.template($("#homeTemplate").html());
  			console.log(template);
  		}
  	});
  	return HomeView;
});
