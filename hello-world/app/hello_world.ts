/**
 * Created by Amit Thakkar on 2/24/16.
 */
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