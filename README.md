# jqb-lifecycle
---------------

> Utility library to manage the life cycle of a list of objects.

**NOTE:** this module works fine with [PoliteJS Workspace](https://github.com/PoliteJS/workspace)

---

## Simple Application Lifecycle

    
    // generic app  prototype
    var GenericModuleClass = {
        init: function(config) {
            this.config = config;
        },
        start: function() {
            console.log(this.config);
        },
        stop: function() {
            this.config = undefined;
        }
    }
    
    // you app is composed with many modules
    // (extensions of the generic module class)
    var instances = [
        Object.create(Module1Class),
        Object.create(Module2Class),
        Object.create(Module3Class)
    ];
    
Code above represents a classic Javascript app where different responsibilities are coded into specific modules.

At the Application level you may need a simple way to initialise each modules, start them up and even dispose them:
    
    
    var Lifecycle = require('jqb-lifecycle');
    
    // start lifecycle
    Lifecycle.start(instances, {
      foo:'faa'
    });
    
    // ... do your app ...
    
    // end lifecycle
    Lifecycle.stop(instances);