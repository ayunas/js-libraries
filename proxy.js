// In this simple example, the number 37 gets returned as the default value when the property name is not in the object. It is using the get() handler.


const handler = {
    get : (obj, prop) => prop in obj ? obj[prop] : prop
}

const target = {};

const proxy = new Proxy(target, handler);
proxy.x = 10;

console.log(proxy.x); //10

console.log(proxy.qwerty); //qwerty

