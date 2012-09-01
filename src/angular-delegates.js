'use strict';

(function() {
    var dgEventDirectives = {};

    angular.forEach(
        'Click Dblclick Mousedown Mouseup Mouseover Mouseout Mousemove Mouseenter Mouseleave'.split(' '),
            function(name) {
                var directiveName = 'dg' + name;
                dgEventDirectives[directiveName] = ['$parse', function($parse) {
                    return function(scope, element, attrs) {
                        
                        var fn = $parse(attrs[directiveName]);
                        element.bind(name.toLowerCase(), function(evt) {
                            scope.$apply(function() {
                                fn(angular.element(evt.target).scope(), {$event:evt});
                            });
                        });
                    
                    };
                }];
        }
    );

    angular.module('DelegateEvent', []).directive(dgEventDirectives);
})();
