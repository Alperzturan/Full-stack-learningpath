import {URL} from "url"

const myurl = new URL("http://www.newurl.com:5050/p/a/t/h?query=string#hash")

console.log(myurl.hash);
console.log(myurl.host);
console.log(myurl.hostname);
console.log(myurl.port);
console.log(myurl.href);
console.log(myurl.protocol);
console.log(myurl.search);
console.log(myurl.searchParams);
console.log(myurl.toString());
console.log(myurl.toJSON());
