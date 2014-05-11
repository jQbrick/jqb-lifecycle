
var Lifecycle = require('jqb-lifecycle');

describe('jqb-lifecycle', function() {
    
    describe('start', function() {
        
        var Obj1 = {
            init: function() {
                this.isInitialised = true;
            },
            start: function() {
                this.isStarted = true;
            }
        };
        
        var obj1;
        var obj2;
        
        beforeEach(function() {
            obj1 = Object.create(Obj1);
            obj2 = Object.create(Obj1);
        });
        
        it('should initialise an object', function() {
            Lifecycle.start([obj1]);
            expect(obj1.isInitialised).to.be.true;
        });
        
        it('should start an object', function() {
            Lifecycle.start([obj1]);
            expect(obj1.isStarted).to.be.true;
        });
        
        it('init should respect given order', function() {
            var spy1 = sinon.spy(obj1, 'init');
            var spy2 = sinon.spy(obj2, 'init');
            Lifecycle.start([obj1, obj2]);
            expect(spy1.calledBefore(spy2)).to.be.true;
        });
        
        it('start should respect given order', function() {
            var spy1 = sinon.spy(obj1, 'start');
            var spy2 = sinon.spy(obj2, 'start');
            Lifecycle.start([obj1, obj2]);
            expect(spy1.calledBefore(spy2)).to.be.true;
        });
        
    });
});
