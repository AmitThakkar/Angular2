Angular2 Components
-------------------

**Angular2** is on **BETA** now. So its great time to explore **Angular2** as **Angular2** team is mostly
working on new features and bug fixes so no fundamental/major changes will happen in **Angular2** 
application.

So lets write our first `Hello World` application with **Angular2**.

**index.html**
```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Angular 2 Hello World</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 1. Load libraries -->
    <!-- IE required polyfills (from CDN), in this exact order -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.16/system-polyfills.js"></script>
    <script src="https://code.angularjs.org/tools/system.js"></script>
    <script src="https://code.angularjs.org/tools/typescript.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.7/angular2-polyfills.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.7/Rx.js"></script>
    <script src="https://code.angularjs.org/2.0.0-beta.7/angular2.dev.js"></script>
    <!-- 2. Configure SystemJS -->
    <script>
        System.config({
            transpiler: 'typescript',
            typescriptOptions: {emitDecoratorMetadata: true},
            packages: {'app': {defaultExtension: 'ts'}}
        });
        System.import('app/main')
            .then(null, console.error.bind(console));
    </script>
</head>
<!-- 3. Display the application -->
<body>
<hello-world>Loading...</hello-world>
</body>
</html>
```

In `index.html`, we are loading all required `.js` files e.g. `Angular2`, `TypeScript`, `System.js` etc. And with the
help of `System.config` method, we are loading our main file `main.ts`.

> We are using `Type-Script` therefore in `System.config` transpiler is `typescript`, and defaultExtension is `ts`.

Element `<hello-world>` tag will display **Loading...** till `HelloWorld` component does not gets loaded successfully.

**main.ts**
```JavaScript
import {bootstrap}  from 'angular2/platform/browser';
import {HelloWorld} from './hello_world';
bootstrap(HelloWorld);
```

In `main.ts`, we are requiring **bootstrap** package from `angular2/platform/browser` and **HelloWorld** package from
`./hello_world`.

> **bootstrap** package bootstrap the **Angular2** app with provided package.

And on third line, we are bootstrapping **HelloWorld** package, so this package will be available in `index.html`.

**hello_world.ts**
```JavaScript

// Require Component package from `angular2/core` package, so Angular can recognize that it is a component.

import {Component} from 'angular2/core';

// Below is the decorator, and we define configurations in the decorator for component.

@Component({

    // Defining selector for the component so that we can tag component/directive in .html file to the attached component.
    
    selector: 'hello-world',
    
    // Providing .html for the component. You can provide HTML directly with property template as we do in Angular1.X
    
    templateUrl: 'app/hello_world.html'
})

/*
 * Following is the TypeScript Class, which will be compiled into old JavaScript Class.
 * And we are exporting it so it will be available in other files and modules.
 * 
 */
 
export class HelloWorld {
    // Declaring the variable to bind with initial value
    name:string = '';
}
```

In `hello_world.ts` we are requiring **Component** package form `angular2/core` so **Angular2** will be able to recognize
that it is a component.

With `@Component` decorator, we are providing configuration for component. i.e. selector and templateUrl.

And in last, we are exporting **Type-Script** class. So this component will be available in other files and modules
where it will be imported and we are defining a property **name** in HelloWorld class.

**hello_world.html**
```HTML
<label>Name:</label>
<!-- data-bind to the input element; store value in name -->
<input type="text" [(ngModel)]="name" placeholder="Enter a name here">
<hr>
<!-- conditionally display `name` -->
<h1 [hidden]="!name">Hello {{name}}!</h1>
```

In `hello_world.html` we are doing 2-way-data binding for name property on input. And showing `Hello {{name}}` if 
name is present.

> For 2-way-binding, we are using [(ngModel)] and for hiding element we are using [hidden] attribute.