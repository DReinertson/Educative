"use strict";
const Stack = require('./Stack.js');
class minStack {
    constructor() {
        this.minStack = new Stack();
        this.mainStack = new Stack();
    }

    pop() {
        this.minStack.pop();
        this.mainStack.pop();
        return;
    }

    push(value) {
        this.mainStack.push(value);

        if (value > this.minStack.getTop() && !this.minStack.isEmpty()){
            this.minStack.push(this.minStack.getTop());
        } else{
            this.minStack.push(value);
        }
    }

    min() {
        return this.minStack.getTop();
    }
}

https://www.educative.io/module/lesson/data-structures-javascript/g23ZMZEYJkD
