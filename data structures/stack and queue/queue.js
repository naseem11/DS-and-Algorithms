//Queue implementation using array.

const _data = new WeakMap();
class Queue {
    constructor() {
        _data.set(this, []);
    }

    add(record) {
        _data.get(this).unShift(record);
        return _data.get(this).length;
    }

    remove() {
        let data = _data.get(this);
        if (data.length === 0) return null;
        return data.pop();
    }

    peek() {
        let data = _data.get(this);
        if (data.length === 0) return null;
        return data[data.length - 1];
    }
}
