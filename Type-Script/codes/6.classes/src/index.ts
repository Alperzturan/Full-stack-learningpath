//class

/* class User{
    name: string
    email: string = "kefr"
    constructor(name: string){
        this.name = name
    }
}

const a = new User ("gsmfg") */


//access modifiers

/* class User{
    private name: string //dışarıdan erişilemez
    public email: string //default publictir
    constructor(name: string, email: string){
        this.name = name
        this.email = email
    }
    // constructor(name: string, email: string){} //jsde aynı kodu verir
}

const a = new User ("gsmfg" ,"fglhk")

// a.name X
a.email */


//getters and setters

/* class User{
    private a = "dksrjgk"
    constructor(
        public name: string,
        public email: string
    ){}

    get eAppleMail(): string{
        return this.email
    }

    get getA(): string{
        return this.a
    }

    set setA(b: string){
        this.a = b
    }
    
}

const a = new User ("gsmfg" ,"fglhk") */


//access modifiers - protected

/* class User{
    protected a = "dksrjgk" //sadece bu class ve bunu miras alan classlar erişebilir
    constructor(
        public name: string,
        public email: string
    ){}

    get eAppleMail(): string{
        return this.email
    }

    get getA(): string{
        return this.a
    }

    set setA(b: string){
        this.a = b
    }
}

class subUser extends User{
    isA: boolean = true
    changeA(){
        this.a="fosg"
    }
}

const a = new User ("gsmfg" ,"fglhk") */


//interfaces

/* interface takePhoto{
    camera: string
    blabla: string
    alala: number
}
interface altdelete{
    delete(): void
}

class instagram implements takePhoto, altdelete{
    constructor (
        public camera: "efrg",
        public blabla: "efrg",
        public alala: 324,
        private cdcd: "kfgjmbk",
    ){}
    delete(){
        console.log(34);
    }
} */


//abstract classes

/* abstract class a{
    constructor(
        public b: number,
        public c: number
    ){}
    abstract d(): void
    g(){
        console.log(5345);
    }
}//interfaceten farkı değişkenleri ve fonksiyonlara değer atama ve gövde oluşturma 
//yapılabilir ancak aynı anda birden fazla abstract class miras alınamaz

class f extends a{
    constructor(
        b: number,
        c: number,
        public h: number
    ){
        super(b,c)
    }
    d(){
        console.log(34);
    }
}

// const e = new a
const e = new f(34,456,6346)

e.b
e.c
e.d()
e.g()
e.h
 */


//generics

/* function a<Type>(b:Type):Type { //gelen herhangi bir tipi kabul eder ve o tip bundan sonra ilk gelen tip olur
    return b
}
function c<T>(b:T):T {
    return b
}
function d<H>(b:H):H {
    return b
}

function e<T>(b:T[]):T | undefined{
    const x = 3
    return b[x]
}
const f = <T>(b:T[]): T | undefined =>{
    const x = 3
    return b[x]
}

function another1<T, U>(val1:T, val2:U): object{
    return {val1,val2}
}
function another2<T, U extends number>(val1:T, val2:U): object{
    return {val1,val2}
}
//falan filan daha bir şeyler var gerekince araştır */


//in, instanceof, as, is araştır
//kind bak https://www.youtube.com/watch?v=30LWjhZzg50&t=11975s