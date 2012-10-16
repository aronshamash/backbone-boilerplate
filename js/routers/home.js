define([
	'jquery', 
	'backbone', 
	'underscore', 
	'views/view'], 
function($, Backbone, _, mainView){
	var Router = Backbone.Router.extend({
		initialize: function(){
			this.mainView = mainView;
			Backbone.history.start();
		},
		routes: {
			'': 'home',
            'css3': 'css3',
            'js': 'js',
            'node': 'node'
		},
		'home': function(){
			this.mainView.render();
		},
        'css3': function(){
            this.mainView.render();
        },
        'js': function(){
            this.mainView.render();
        },
        'node': function(){
            this.mainView.render();
        }
	});
	
	return Router;
});
