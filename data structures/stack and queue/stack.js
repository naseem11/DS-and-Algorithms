//Stack implementation using array.

const _data = new WeakMap();
class Stack {
    constructor() {

        _data.set(this, []);       
    }

    push(record) {

        _data.get(this).push(record);
        return _data.get(this).length;
    }

    pop() {

        let data = _data.get(this);
        if (data.length === 0)
            return null;
        return data.pop();
    }

    peep() {

        let data = _data.get(this);
        if (data.length === 0)
            return null;
        return data[data.length - 1];
    }

}