//basics

/* let greetings: string = "hello";
let num = 34;
//tsc dosyaadı.ts bu dosyanını javascriptini oluşurur
 */


//any

/* let a;
function b(){
    return "a";
}
a = b(); //return ne olursa olsun a alır bunu istemeyiz 

let c: string; //böyle zamanlarda kullanılır
 */


//function
/* let a;
function b(c: string = "a" ){ // default değer
    c="rgjrsg";
    return c;
}
a = b("a");  */


//return

let a;
function b(c: string = "a" ): string{ // dönmesi gereken değer
    c="rgjrsg";
    return c;
}
let d = (s:string):string=>{return "ejfgnjkef"} //arrow functionda
a = b("a"); 

export{}