public class Constructor {
    String name;
    int age;
    double gpa;
    boolean isEnrolled;

    //classla aynı isimde bir fonsiyon oluşturup içinde bunları yaparak
    //class içindeki elemanları direkt atayabiliriz
    Constructor(String name, int age, double gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    //Overloaded constructors: overloaded fonksiyonlarla aynı şey fonskiyon ismi
    //aynı olmalı ama imzası(argümanları+ismi farklı olmalı

    Constructor(String name){
        this.name = name;
        this.age = 0;
        this.gpa = 0;
    }

    Constructor(){
        this.name = "Guest";
        this.age = 0;
        this.gpa = 0;
    }

    Constructor(String name, int age){
        this.name = name;
        this.age = age;
        this.gpa = 0;
    }
}
