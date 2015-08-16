/**
 * Created by bruenni on 16.08.15.
 */

class Person {
    public get id() {
        return this._id;
    }

    private _id;
    constructor(id: number)
    {
        this._id = id;
    }
}

class Child extends Person {
    public get name() {
        return this._name;
    }

    private _name;
    constructor(id: number, name: string)
    {
        super(id);
        this._name = name;
    }
}
