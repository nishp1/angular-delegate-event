describe("Delegated event handler", function() {
    var rootScope;
    var compile;
    var $injector = angular.injector(['ng', 'DelegateEvent']);

    beforeEach(function(){
        $injector.invoke(function($rootScope, $compile){
            rootScope = $rootScope;
            compile = $compile;
        });
    });

    it('should set clicked property to true on a click',function() {
        element = '<ul dg-click="clicked=true"><li></li></ul>';
        element = compile(element)(rootScope);
        rootScope.$digest();

        expect(rootScope.clicked).toBeFalsy();

        jQuery(element.find('li')).click();

        expect(rootScope.clicked).toEqual(true);
    });

    it('should be called with arguments on a mouseover',function() {
        var args = {a:5};
        
        rootScope.onmouseover = function() {};
        spyOn(rootScope, 'onmouseover');

        element = '<ul dg-mouseover="onmouseover(obj)"><li></li></ul>';
        element = compile(element)(rootScope);
        element.scope().obj = args;

        rootScope.$digest();

        expect(rootScope.onmouseover).not.toHaveBeenCalled();

        jQuery(element.find('li')).mouseover();

        expect(rootScope.onmouseover).toHaveBeenCalledWith(args);
    });

    afterEach(function() {
        rootScope = null;
        compile = null;
    });
});