const _stack = new WeakMap();

class Stack{
    constructor(){
        _stack.set(this,[]);
    }

    push(value){
        _stack.get(this).push(value);
    }
    
    pop(){
        if (_stack.get(this).length===0)
            throw new console.error("Stack is empty");
        else{
            console.log(_stack.get(this).pop());
        }
    }

    peek(){
        if (_stack.get(this).length===0)
            throw new console.error("Stack is empty");
        else{
            console.log(_stack.get(this).slice(-1));
    }

    get count(){
        console.log(_stack.get(this).length);
    }
}
