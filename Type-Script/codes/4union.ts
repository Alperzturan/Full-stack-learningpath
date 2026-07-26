//unions

/* let a: string | number = 23;
a = "dfgghjk";

type b = {
    c: string;
}

type d = {
    e: number;
}

let f: b | d = {c: "frslgölrg", e: 34}

function g(a: string | number){}

let h: (string | number)[] = ["sa", 23];
 */


//tuples

/* let a: [string, number] = ["fkgn", 3];
// a.push() izin veriliyor */


//enums

/* enum seatChoice {
    WINDOW,
    MIDDLE,
    AISLE
}

const hcSeat = seatChoice.AISLE; */


//interfaces

interface User{
    readonly id: number,
    name: string,
    email?: string,
    // startTrial: ()=>string,
    startTrial(): string,
    getNumber(name:string, no:number): number
}

//typetan farkları

interface User{
    gitName: string; //sonradan aynı interface tekrar oluşturulup böyle yeni değişken eklenebilir
}
interface b{
    a: string
}
interface Admin extends User, b{} //miras kullanılabilir

//miras typeda da var 
type c = {
    name:string
}
type d = c&{
    no:number
}
let e:d={name:"kerjg", no:34}
e.name;
e.no;

let a: User = {
    gitName: "erlşgjm",
    name: "dfrgh",
    id: 345,
    startTrial(){
        return "dfthk"
    },
    getNumber(name:string, no:number) {
        return no
    }
}

a.name = "derg";
// a.id = 34;
a.startTrial();
a.getNumber("jkdfrg", 23);