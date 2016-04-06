***ngFor in Angular2**
===========================

This repo contains a small snippet that compares **ng-repeat** of **Angular 1.x** with ***ngFor** of **Angular 2**.

Well, to start of with - **ngRepeat** directive will NOT be available in **Angular 2**. It has been replaced by a new directive i.e. ***ngFor**.

`Here is a recap:`

* **ngRepeat** directive instantiated template once per item for a collection.
* Each template instance had its own scope.
* Special properties were available for each template instance : *$index*, *$first*, *$middle*, *$last*, *$even*, *$odd*.
* **ngRepeat** by default did not allow duplicate elements. A tracking function was responsible for this task.
* In order to add duplicate items, **track by** expression was used.
* Here is a small snippet:

```JavaScript
$scope.items = ['eat','sleep','work','eat']
```

```HTML
<div ng-repeat="item in items track by $index">{{item}}</div>
```

* Object properties could also be iterated over. Here is a snippet for that:

```JavaScript
$scope.personDetails = {name:'Namita',age:'25'}
```

```HTML
<div ng-repeat=" (key, value) in personDetails">{{key}} : {{value}}</div>
```

Now, let's move to main agenda of this discussion i.e. ***ngFor**. Let's start.

* The major difference between **ng-repeat** and **ngFor** is its syntax. Here is a small snipped

```
<ul>
    <li *ngFor="#item of items">{{item}}</li>
</ul
```>

* ***ngFor** is based on **JavaScript's** ``for of`` loop hence it can be used to iterate over **Arrays**, **Map**, **Set** etc. However it cannot be used to iterate over object properties straightaway.
One of the possible work arounds could be extracting the keys from an object and then iterating it over the keys.

* Also other important difference is use of ``#refs``. ``#refs`` would be widely used in **Angular2**. In this case ``#item`` contain the value of each item. ``#refs`` hold the reference of the element in cases such as:

``<input type="text" #inputText>``

For the above case:

``inputText`` would contain the reference of the element i.e. ``<input type="text">``
``inputText.value`` would contain the actual value entered in the input box.

* You would also be wondering what is the asterisk (*) sign for. Asterisk (*) sign is nothing but a syntactic sugar.

* Like **ng-repeat**, each instance element receives properties like **odd**, **even** , **last**, **index**. I have used these properties in the small example below:

```
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <h2>Enter To Do Items Below:</h2>
        <input [(ngModel)]="toDo.item" (keyup.enter) = "onKey(toDo.item)">
        <div *ngIf="toDoList.length>0">
        <p>Your To Do Items:</p>
        </div>
        <div style="padding: 10px 0 0 0">
        <table width="300" border="1" cellpadding="5" style="text-align: center">
        <tr>
        <th>Index</th>
        <th>To Do Item</th>
        </tr>
        <tr *ngFor="#toDo of toDoList, #i=index, #last = last, #odd = odd, #even = even"  [ngClass]="{'odd-color':odd,'even-color':even, 'last-color' : last }">
        <td>{{i}}</td>
        <td>{{toDo}}</td>
        </tr>
        </table>
        </div>
    `
})

export class AppComponent {
    toDo = {};
    title = 'My To Do List';
    toDoList = [];
    onKey(value){
        this.toDoList.push(value);
        this.toDo.item = '';
    }
}
```

* As demonstrated above we have used index property to get the index of each item in the collection and assigned it to local variable ``#i``. Similarly we have used other properties and assigned them to local variables in order to apply the classes conditionally on the table rows.
  For example: ``odd-color`` class is applied on the row when item is odd. ``odd`` property returns a ``true`` or ``false`` on the basis of item index which is then assigned to local variable ``#odd``.
    
* As of now, **Angular 2** docs do not talk anything about track by. Hence it is out of scope for this discussion.

In order to run the demo given in this repo, clone this repository. Go inside the repo and write ``npm install``. This would bring required node modules for you.

 Now, run **npm start** command and your demo should be working!






