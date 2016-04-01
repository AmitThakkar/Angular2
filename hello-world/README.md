Angular2 Components
-------------------

**Angular2** is on **BETA** now. So its great time to explore **Angular2** because now **Angular2** team is mostly
working to new feature and bug fixes so there will be no fundamentals/major changes will happen into **Angular2** 
Application.

So lets your first `Hello World` application with **Angular2**.

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
help of `System.config` method, we are loading our main file `app/main.ts`.

> We are using `Type-Script` so in `System.config` transpiler is typescript, and defaultExtension is `ts`.

Element `<hello-world>` tag will display **Loading** till `HelloWorld` component does not loaded successfully.

**main.ts**
```JavaScript
import {bootstrap}  from 'angular2/platform/browser';
import {HelloWorld} from './hello_world';
bootstrap(HelloWorld);
```

In `main.ts`, we are requiring **bootstrap** package from `angular2/platform/browser` and **HelloWorld** package from
`./hello_world`.

> **bootstrap** package bootstrap the **Angular2** app with provided package.

And on third line, we are bootstrapping **HelloWorld** package, so this package will be available into `index.html`.

**hello_world.ts**
```JavaScript
// Require Component package from `angular2/core` package, so Angular can recognize that it is a component
import {Component} from 'angular2/core';
// This is decorator, and we define configurations into this for component.
@Component({
    // Defining selector for the component so we can tag this in .html file to attache the component.
    selector: 'hello-world',
    // Providing the .html for the component. You can provide HTML directly with property template as we do into Angular1.X
    templateUrl: 'app/hello_world.html'
})
/*
 * This is TypeScript Class, which will be compile into Old JavaScript Class.
 * And we are exporting it so It will be available into other files and modules.
 * */
export class HelloWorld {
    // Declaring the variable for binding with initial value
    yourName:string = '';
}
```

**hello_world.html**
```HTML
<label>Name:</label>
<!-- data-bind to the input element; store value in yourName -->
<input type="text" [(ngModel)]="yourName" placeholder="Enter a name here">
<hr>
<!-- conditionally display `yourName` -->
<h1 [hidden]="!yourName">Hello {{yourName}}!</h1>
```