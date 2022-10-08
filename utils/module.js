import { people, greet } from './data.js';

people.map(item => {
    const { id, name, email, phone } = item;
    console.log(id, name, email, phone);
    return greet(name);
});