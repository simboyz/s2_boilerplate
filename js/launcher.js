//launcher.js
//launcher.js
var APP = {};

APP.path = {
    libs: function(src) {
        return 'js/libs/' + src + '.js'
    },
    modules: function(src) {
        return 'js/modules/' + src + '.js'
    },
    plugins: function(src) {
        return 'js/plugins/' + src + '.js'
    },
    utils: function(src) {
        return 'js/utils/' + src + '.js'
    }    
};


APP.init = (function() {
    head.js(
    APP.path.libs('jquery.min'), //
    APP.path.libs('underscore.min'), //
    APP.path.libs('backbone.min'), //    
    APP.path.libs('bootstrap.min'), //
    APP.path.libs('d3.v2.min'), //
    APP.path.utils('ie.console'), //
    APP.path.modules('test'), //
    function() {
    	console.log("All Component Ready!");
    });
}());
