//type aliases

/* type a = {
    name: string;
    age: number;
    isOld: boolean;
};

function createA(a:a):a{
    return {name:"", age:2, isOld:true};
}

createA({name:"", age:2, isOld:true}); */


//readonly and ?

/* type User = {
    readonly _id: number;
    name: string;
    email?: string; 
}

let user: User = {
    _id: 3434,
    name: "",
    //email yapılmak zorunda değil
}

// user._id = 233 yapılamaz
user.name = "jrugn";

type ccNumber = {
    ccNumber:number;
}
type ccDate = {
    ccDate:string;
}
type ccDetails = ccNumber & ccDate &{
    ccCVV:number;
} */


//arrays

const a: string[] = [];
const b: number[] = [];
const c: Array<number> = [];

a.push("a");
b.push(1);

type User = {
    name: string;
    age: number;
}

const user: User[] = [];

const dArray: number[][] = [
    [255,255,255]
];
