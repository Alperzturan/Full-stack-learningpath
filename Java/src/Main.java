import javax.sound.sampled.*;
import java.awt.*;
import java.io.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;



public class Main {
    static Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
    static Random random = new Random();
    static void main(String[] args) {

        //üçgen alan
        /*
        double width;
        double height;
        double area;

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter width: ");
        width = scanner.nextDouble();
        System.out.println("Enter height: ");
        height = scanner.nextDouble();
        area = width*height/2;
        System.out.println("Area is " + area);

        scanner.close();
        */


        //item miktar-para
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        String item;
        double price;
        int quantity;
        double total;

        System.out.print("Select an item: ");
        item = scanner.nextLine();
        System.out.print("Set the price: ");
        price = scanner.nextDouble();
        System.out.print("Quantity of the item: ");
        quantity = scanner.nextInt();

        total = price * quantity;

        System.out.println("Total price of " + item + " is: "+ total);

        scanner.close();
         */


        //hipotenüs
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        double kenar1, kenar2, hipotenus;
        System.out.print("Kenar 1'i giriniz: ");
        kenar1 = scanner.nextDouble();
        System.out.print("Kenar 2'yi giriniz: ");
        kenar2 = scanner.nextDouble();

        hipotenus = Math.sqrt(Math.pow(kenar1,2)+Math.pow(kenar2,2));
        System.out.println("Hipotenüs: "+hipotenus);

        scanner.close();
        */


        //circle
        /*
        double r,area,circumference,volume;
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        System.out.print("Enter the radius of the circle: ");
        r = scanner.nextDouble();

        area = Math.PI*Math.pow(r,2);
        circumference = Math.PI*2*r;
        volume = ((double) 4 /3)*Math.PI*Math.pow(r,3);

        System.out.printf("Circumference: %.2f\n",circumference);
        System.out.printf("Area: %.2f\n",area);
        System.out.printf("Volume: %.2f\n",volume);

        scanner.close();
        */


        //compound interest calculator
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        double first, interestRate, result;
        int comp, year;

        System.out.print("Enter the principal amount: ");
        first = scanner.nextDouble();
        System.out.print("Enter the interest rate: ");
        interestRate = scanner.nextDouble()/100;
        System.out.print("Enter the times compounded per year: ");
        comp = scanner.nextInt();
        System.out.print("Enter how many years: ");
        year = scanner.nextInt();

        result = first*Math.pow((1+(interestRate/comp)),comp*year);

        System.out.printf("The final amount is: %.2f",result);

        scanner.close();
        */


        //weight converter
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        double data, converted;
        int choice;

        System.out.println("Weight Converter");
        System.out.println("1: Kgs to Lbs");
        System.out.println("2: Lbs to Kgs");

        System.out.print("Choose your converter: ");
        choice = scanner.nextInt();

        System.out.print("Enter the weight: ");
        data = scanner.nextDouble();

        if (choice == 1){
            converted = data * 2.20462;
            System.out.println("Değiştirilmiş ağırlık: " + converted);
        }else if (choice == 2){
            converted = data / 2.20462;
            System.out.println("Değiştirilmiş ağırlık: " + converted);
        }else{
            System.out.println("Böyle bir seçeneğimiz bulunmamaktadır.");
        }

        scanner.close();

        */


        //temperature converter
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        String type;
        double temp, conTemp;

        System.out.print("F for Fahrenheit\n" +
                "C for Celcius\n" +
                "Enter the type of the temperature: ");
        type = scanner.next().toUpperCase();

        System.out.print("Enter the temperature: ");
        temp = scanner.nextDouble();

        conTemp = (type.equals("F")) ? (temp-32)/1.8 : temp*1.8+32;

        System.out.println("The converted temperature is: " + conTemp);

        scanner.close();
        */


        //calculator
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);

        String pr;
        char operator;
        double n1, n2;
        boolean isWrong = false, isZero = false;

        System.out.print("Enter the first number: ");
        n1 = scanner.nextDouble();

        System.out.print("Enter the operation: ");
        operator = scanner.next().charAt(0);

        System.out.print("Enter the second number: ");
        n2 = scanner.nextDouble();

        double result = switch (operator){
            case '+' -> n1 + n2;
            case '-' -> n1 - n2;
            case '*' -> n1 * n2;
            case '/' -> {
                if (n2 != 0)
                    yield n1 / n2;
                else {
                    isZero = true;
                    yield 0;
                }
            }
            case '^' -> Math.pow(n1,n2);
            default -> {
                isWrong = true;
                yield 0 ;
            }
        };

        if (isWrong)
            System.out.println("Operator does not exist.");
        else if (operator == '/' && isZero)
            System.out.println("Can't divide by zero.");
        else
            System.out.println("Result is: " + result);

        scanner.close();
        */


        //number guessing game
        /*
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        Random random = new Random();

        int number = random.nextInt(0,101);
        int tahmin = -1;
        int attempts = 0;

        System.out.println("Welcome, this is a number guessing game!");
        do {
            System.out.print("Choose a number between 0 and 100: ");
            tahmin = scanner.nextInt();
            attempts++;

            if (tahmin < 0 && tahmin > 100) {
                System.out.println("Number out of bounds, please enter a number between 0 and 100");
            } else {
                if (tahmin>number) {
                    System.out.println("Too HIGH, try again");
                } else if (tahmin<number) {
                    System.out.println("Too LOW, try again");
                } else {
                    System.out.println("Your choice is "+tahmin+", you have found the right number in "+attempts+" tries!");
                }
            }
        } while (tahmin != number);
        scanner.close();

         */


        //banking program
        /*
        int choice, lenght = ("BANKING PROGRAM").length();
        double balance = 1000;

        bloker(lenght);
        System.out.println("BANKING PROGRAM");
        bloker(lenght);
        System.out.println("1. Show Balance\n" +
                "2. Deposit\n" +
                "3. Withdraw\n" +
                "4. Exit");
        bloker(lenght);
        System.out.print("Please enter your choice: ");
        choice = scanner.nextInt();
        bloker(lenght);

        while(choice != 4){
            switch (choice){
                case 1 -> {
                    showBalance(balance);
                    bloker(lenght);
                }
                case 2 -> {
                    balance = deposit(balance);
                    bloker(lenght);
                }
                case 3 -> {
                    balance = withdraw(balance);
                    bloker(lenght);
                }
                default -> {
                    System.out.println("You have entered a wrong number, please choose a number between 1 and 4");
                    bloker(lenght);
                }

            }
            System.out.print("Please enter your choice: ");
            choice = scanner.nextInt();
            bloker(lenght);
        }
        System.out.println("Thank you for choosing us, have a nice day!");
        scanner.close();

         */


        //dice rolling program
        /*
        int times;
        int total = 0;

        System.out.print("Enter how many times you want to roll the dice: ");
        times = scanner.nextInt();

        if (times > 0){
            for (int i = 0 ; i < times ; i++){
                total = diceRoll(total);
            }
            System.out.println("The total of "+times+" dice is: "+total);
        }else
            System.out.println("Number of times you want to roll the dice should be positive integer!");


        scanner.close();

         */


        //quiz game
        /*
        String[][] qA = new String[5][2];
        int counter = 0;
        String[] answers = new String[5];

        qA[0][0] = """
                   What is the main function of a router?
              
                   1. Storing files
                   2. Encrypting data
                   3. Directing internet traffic
                   4. Managing Passwords""";
        qA[1][0] = """
                   Which part of the computer considered the brain?
              
                   1. CPU
                   2. Hard Drive
                   3. RAM
                   4. GPU""";
        qA[2][0] = """
                   What year did Facebook launched?
              
                   1. 2000
                   2. 2004
                   3. 2006
                   4. 2010""";
        qA[3][0] = """
                   Who is known as the father of computers?
              
                   1. Steve Jobs
                   2. Bill Gates
                   3. Alan Turing
                   4. Charles Babbage""";
        qA[4][0] = """
                   What is the first programming language?
              
                   1. COBOL
                   2. C
                   3. Fortman
                   4. Assembly""";
        qA[0][1] = "3";
        qA[1][1] = "1";
        qA[2][1] = "2";
        qA[3][1] = "4";
        qA[4][1] = "3";

        bloker(7);
        System.out.println("Welcome to the Java quiz game!");
        bloker(7);

        for (int i = 0 ; i < 5 ; i++) {
            System.out.println(qA[i][0]);
            System.out.print("Enter your answer: ");
            answers[i] = scanner.nextLine();
            if (answers[i].equals(qA[i][1])) {
                bloker(7);
                System.out.println("CORRECT!");
                counter++;
            } else {
                bloker(7);
                System.out.println("WRONG!");
            }
            bloker(7);
        }
        System.out.println("You have scored "+counter+"/5 in the quiz!");

        scanner.close();

         */


        //rock paper scissors game
        /*
        String choice;
        int compChoice;
        String[] list = {"rock", "paper", "scissors"};
        String conti = "";

        System.out.println("Welcome to rock paper scissors game!\n");

        do{
            System.out.print("Enter your move: ");
            choice = scanner.nextLine();
            compChoice = random.nextInt(0,3);
            System.out.println("Computer choice: "+list[compChoice]);
            System.out.println();
            if (choice.equalsIgnoreCase("rock")){
                switch (compChoice) {
                    case 0 -> {
                        System.out.println("Its a tie");
                        System.out.println();
                        continue;
                    }
                    case 1 -> System.out.println("You lose!");
                    case 2 -> System.out.println("You win!");
                }
                System.out.println();
            } else if (choice.equalsIgnoreCase("paper")) {
                switch (compChoice) {
                    case 0 -> System.out.println("You win!");
                    case 1 -> {
                        System.out.println("Its a tie");
                        System.out.println();
                        continue;
                    }
                    case 2 -> System.out.println("You lose!");
                }
                System.out.println();
            } else if (choice.equalsIgnoreCase("scissor")) {
                switch (compChoice) {
                    case 0 -> System.out.println("You lose!");
                    case 1 -> System.out.println("You win!");
                    case 2 -> {
                        System.out.println("Its a tie");
                        System.out.println();
                        continue;
                    }
                }
                System.out.println();
            } else {
                System.out.println("Please choose rock paper or scissor");
                System.out.println();
                continue;
            }

            System.out.print("Do you want to continue?: ");
            conti = scanner.nextLine();
            System.out.println();
        }while (conti.equalsIgnoreCase("yes"));

         */


        //slot machine
        /*
        int balance = 100, bet;
        String[] emoji = {"🍒","🍒","🍒","🍒","🍒","🍉","🍉","🍉","🍉","🍋","🍋","🍋","🔔","🔔","⭐"};
        String[] row = new String[3];

        System.out.println("Welcome to java slot game!");
        System.out.println("Symbols: 🍒,🍉,🍋,🔔,⭐");
        System.out.println("Current balance: "+balance);
        System.out.println("To stop enter -1");

        do {
            System.out.print("Place your bet: ");
            bet = scanner.nextInt();
            if (bet == -1){
                break;
            }
            if (bet <= balance){
                balance -= bet;
                for (int i = 0 ; i < 3 ; i++) {
                    row[i] = emoji[random.nextInt(15)];
                }
                System.out.println("-----------------");
                System.out.println("| "+String.join(" | ", row)+" |");
                System.out.println("-----------------");

                if (row[0].equals(row[1]) && row[1].equals(row[2])){
                    balance = switch (row[1]){
                        case "🍒"-> {
                            System.out.println("You won "+bet*3+"$");
                            yield balance+bet*3;
                        }
                        case "🍉"->{
                            System.out.println("You won "+bet*4+"$");
                            yield balance+bet*4;
                        }
                        case "🍋"->{
                            System.out.println("You won "+bet*5+"$");
                            yield balance+bet*5;
                        }
                        case "🔔"->{
                            System.out.println("You won "+bet*10+"$");
                            yield balance+bet*10;
                        }
                        case "⭐"->{
                            System.out.println("You won "+bet*20+"$");
                            yield balance+bet*20;
                        }
                        default -> 0;
                    };
                }else if (row[0].equals(row[1])){
                    balance = switch (row[1]){
                        case "🍒"-> {
                            System.out.println("You won "+bet*2+"$");
                            yield balance+bet*2;
                        }
                        case "🍉"->{
                            System.out.println("You won "+bet*3+"$");
                            yield balance+bet*3;
                        }
                        case "🍋"->{
                            System.out.println("You won "+bet*4+"$");
                            yield balance+bet*4;
                        }
                        case "🔔"->{
                            System.out.println("You won "+bet*5+"$");
                            yield balance+bet*5;
                        }
                        case "⭐"->{
                            System.out.println("You won "+bet*10+"$");
                            yield balance+bet*10;
                        }
                        default -> 0;
                    };
                }else if (row[1].equals(row[2])){
                    balance = switch (row[1]){
                        case "🍒"-> {
                            System.out.println("You won "+bet*2+"$");
                            yield balance+bet*2;
                        }
                        case "🍉"->{
                            System.out.println("You won "+bet*3+"$");
                            yield balance+bet*3;
                        }
                        case "🍋"->{
                            System.out.println("You won "+bet*4+"$");
                            yield balance+bet*4;
                        }
                        case "🔔"->{
                            System.out.println("You won "+bet*5+"$");
                            yield balance+bet*5;
                        }
                        case "⭐"->{
                            System.out.println("You won "+bet*10+"$");
                            yield balance+bet*10;
                        }
                        default -> 0;
                    };
                }else {
                    System.out.println("You lost");
                }
            }else{
                System.out.println("You do not have enough balance");
                System.out.println("Current balance: "+balance);
                continue;
            }
            System.out.println("Current balance: "+balance);
        }while (balance != 0);
        if (bet == -1){
            System.out.println("Your exit balance is: "+balance);
            System.out.println("Thank you for playing!");
        }else {
            System.out.println("Your balance is 0, thank you for playing!");
        }

        scanner.close();

         */


        //Class Constructor(atama)
        //Animal Dog Cat
        /*
        Constructor student = new Constructor("abc", 12, 3.4);

        System.out.println(student.name + " " + student.age + " " + student.gpa);

         */


        //Overloaded constructors
        /*
        Constructor Student1 = new Constructor();
        Constructor Student2 = new Constructor("ahmet");
        Constructor Student3 = new Constructor("ali", 34);
        Constructor Student4 = new Constructor("ayşe", 23 ,3.4);

        System.out.println(Student1.name);
        System.out.println(Student1.age);
        System.out.println(Student1.gpa);

        System.out.println(Student2.name);
        System.out.println(Student2.age);
        System.out.println(Student2.gpa);

        System.out.println(Student3.name);
        System.out.println(Student3.age);
        System.out.println(Student3.gpa);

        System.out.println(Student4.name);
        System.out.println(Student4.age);
        System.out.println(Student4.gpa);

         */


        //Array of objects
        /*
        ArrayOfObjects car1 = new ArrayOfObjects("Mustang", "Black");
        ArrayOfObjects car2 = new ArrayOfObjects("Corvette", "Red");
        ArrayOfObjects car3 = new ArrayOfObjects("Charger", "Yellow");

        ArrayOfObjects[] cars = {car1, car2, car3};

        for(ArrayOfObjects car : cars){
            System.out.println(car.name + " " + car.color);
        }

         */


        //static
        /*
        Static color1 = new Static("a");
        System.out.println(Static.count);
        Static color2 = new Static("b");
        System.out.println(Static.count);
        Static color3 = new Static("c");
        System.out.println(Static.count);
        Static color4 = new Static("d");
        System.out.println(Static.count);
        Static color5 = new Static("e");
        System.out.println(Static.count);
        Static color6 = new Static("f");
        System.out.println(Static.count);

        Static.ShowColorCount();

         */


        //Inheritance
        /*
        InheritanceDog dog = new InheritanceDog();
        InheritanceCat cat = new InheritanceCat();

        System.out.println(dog.lives);
        System.out.println(dog.isAlive);
        System.out.println(cat.lives);
        System.out.println(cat.isAlive);

         */


        //Super
        /*
        InheritanceDog dog = new InheritanceDog("ali","baba");
        InheritanceCat cat = new InheritanceCat("ahmet", "tata");

        System.out.println(dog.fname);
        System.out.println(dog.lname);
        System.out.println(cat.fname);
        System.out.println(cat.lname);

         */


        //Override
        /*
        // ikisi de animal classından aynı fonksyonu alır ama kendi içlerinde değiştirdiğimiz için
        // aynı fonksiyon farklı çıktı verir
        InheritanceDog dog = new InheritanceDog();
        InheritanceCat cat = new InheritanceCat();
        InheritanceAnimal animal = new InheritanceAnimal();

        animal.sound();
        dog.sound();
        cat.sound();

         */


        //toString method
        /*
        // bu method biz override etmeden önce classın adresini çıktı olarak verirdi ama biz classın içinde override
        // ederek ilk isim son isim ve canlılığını direkt animal.bilmemne yapmadan bize vermesini sağlarız
        InheritanceAnimal animal = new InheritanceAnimal("a", "b");
        System.out.println(animal);

         */


        //Abstraction
        /*
        // abstract olduğu için Animal animal = new Animal() hata verir sadece
        // bu classı miras alanlar tanımlanabilir
        Dog dog = new Dog("a");
        Cat cat = new Cat("a");

         */


        //Interface
        //Predator Prey Rabbit Dog Cat
        /*
        Dog dog = new Dog();
        Cat cat = new Cat();
        Rabbit rabbit = new Rabbit();

        dog.hunt();
        rabbit.flee();
        cat.flee();
        cat.hunt();

         */


        //Static Polymorphism
        /*
        // objectler diğer objectlermiş gibi (aynı üst class) davranabilir
        Dog dog = new Dog();
        Cat cat = new Cat();
        Rabbit rabbit = new Rabbit();

        Animal[] animals = {dog, cat, rabbit};

        for (Animal animal : animals){
            animal.sound();
        }

         */


        //Runtime (dynamic) Polymorphism
        /*
        // hangi hayvanı oluşturmak istedipğimizi bilmiyoruz bu yüzden önce bütün seçeneklerin olduğu
        // üst classı tanımlıyoruz ondan sonra new Dog Cat Rabbit yapıyoruz. Bu kullanıcıya seçtirerek
        // de yapılabilir ama kısaca:

        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        Animal animal3 = new Rabbit();

        // ya da

        Animal animal4;
        animal4 = new Cat();

         */


        //Getters and Setters (Encapsulation)
        /*
        // Değişkeni public yaptığında, herkes o değişkene her istediğini yazabilir.
        // Ama Setter bir fonksiyon olduğu için içeriye bir "bekçi" dikebilirsin.
        // Getter/Setter Yoksa: Bir banka uygulamasında bakiye değişkenine dışarıdan
        // biri -5000 yazabilir. Sistem bunu kabul eder ve hesap çöker.
        // Setter Varsa: Fonksiyonun içine if(miktar > 0) şartı koyarsın. Yanlış bir veri
        // gelirse fonksiyon onu reddeder. Değişkenin içine sadece senin izin verdiğin "temiz"
        // veri girer.

        Animal animal = new Animal("Aba", "Red", 8);

        System.out.println(animal.getName());
        System.out.println(animal.getColor());
        System.out.println(animal.getAge());

        animal.setName("Bambi");
        animal.setAge(9);

        System.out.println(animal.getName());
        System.out.println(animal.getColor());
        System.out.println(animal.getAge());

         */


        //Aggregation
        /*Bir objectle başka bir objectin birbirinden bağımsız olmalarına
        rağmen birbirinin mimarisinde kullanılabileceğini söyler
        örneğin kütüphane ve books objectleri olsun kütüphanenin içinde books
        objecti kullanılır ama books kütüphaneden bağımsız olarak da çalışabilir*/


        //Composition
        /*Bir object ile başka bir objectin arasında birbirinin parçası olması
        ilişkisidir. örneğin araba ve motor, motor araba içinde kullanılır ama
        araba objecti silinirse motor objectine erişim gider*/


        //Wrapper Class
        /*Kısaca int double char boolean primitive değişkenleri Integer
          Double Character Boolean objectlerine dönüştürür
          arrayList hash gibi şeyler sadece object kabul ettiğinden
          bunlar kullanılır ayrıca normalde bu değerler null olarak atanamazken
          bunların object haline atanabilir. ayrıca birsürü method da uygulanabilir
          */


        //ArrayList
        /*
        //objectleri storelayan büyüklüğü değiştirilebilir arraylerdir

        ArrayList<String> list = new ArrayList<>();

        list.add("a");
        list.add("b");
        list.add("d");
        list.add("c");
        list.add("e");
        list.add("g");

        list.set(5, "f");
        list.remove(5);

        Collections.sort(list);

        System.out.println(list);

         */


        //Exception Handling (Try-Catch)
        /*
        try{
            System.out.print("Enter a number: ");
            int a = scanner.nextInt();
        }catch (InputMismatchException e){ //belirli bir exception
            System.out.println("You entered a wrong type of input");
        }catch (Exception e){ //kalan bütün exceptionlar
            System.out.println("Something went wrong");
        }finally {
            scanner.close();
            System.out.println("This always executes");
        }

         */


        //File Writing
        /*
        //FileWriter: orta ve küçük boylu text dosyaları için iyi
        //BufferedWriter: büyük boyutlu textler için iyi
        //PrintWriter: reportlar ve loglar gibi yapılandırılmış veriler için iyi
        //FileOutputStream: binary dosyaları için iyi (resim, ses dosyaları)

        String path = "C:\\Users\\zaman\\Desktop\\text.txt";
        String text = "sssssssssssssssss";

        try(FileWriter writer = new FileWriter(path)){
            writer.write(text);
            System.out.println("The text has been written");
        }catch (FileNotFoundException e){
            System.out.println("Could not find the path");
        }catch (IOException e){
            System.out.println("There is a input output error");
        }

         */


        //File Reading
        /*
        //BufferedReader + FileReader: text dosyalarını satır satır okumak için en iyidir
        //FileInputStream: binary dosyaları okumak için en iyidir
        //RandomAccessFile: büyük dosyaların belirli kısımlarını okuma/yazma için en iyidir

        String path = "C:\\Users\\zaman\\Desktop\\Anime.txt";

        try(BufferedReader reader = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = reader.readLine()) != null){
                System.out.println(line);
            }
        }catch (IOException e){
            System.out.println("Something went wrong");
        }

         */


        //Music Player
        /*
        String path = "src\\ちゃんみな-TEST-ME-_Official-Music-Video_.wav";
        File file = new File(path);

        try (AudioInputStream audioStream = AudioSystem.getAudioInputStream(file)){
            Clip clip = AudioSystem.getClip();
            clip.open(audioStream);

            String choice = "";
            while (!choice.equals("Q")){
                System.out.print("""
                        P to play
                        S to stop
                        R to reset
                        Q to quit
                        Enter your choice:""");
                choice = scanner.next().toUpperCase();

                switch (choice){
                    case "P" -> clip.start();
                    case "S" -> clip.stop();
                    case "R" -> clip.setMicrosecondPosition(0);
                    case "Q" -> clip.close();
                    default -> System.out.println("Invalid choice");
                }
            }

        } catch (LineUnavailableException e) {
            System.out.println("File is not available");
        }catch (FileNotFoundException e){
            System.out.println("File not found");
        }catch (UnsupportedAudioFileException e) {
            System.out.println("This file is not supported");
        }catch (IOException e) {
            System.out.println("Something went wrong");;
        }

         */


        //Hangman game
        /*
        String path = "src\\AnimeName.txt";
        ArrayList<String> list = new ArrayList<>();

        try(BufferedReader reader = new BufferedReader(new FileReader(path))){
            int rand = random.nextInt(10);
            String line;
            int count = 0;
            int hangman = 0;
            while ((line = reader.readLine()) != null){
                list.add(line);
            }

            String word = list.get(rand).toUpperCase();
            String[][] array = new String[word.length()][2];
            for (Integer i = 0 ; i < word.length() ; i++){
                array[i][0] = i.toString();
            }
            for (int i = 0 ; i < word.length() ; i++){
                array[i][1] = "_";
            }

            char[] letters = word.toCharArray();
            ArrayList<Character> arrlist = new ArrayList<>();
            for (int i = 0 ; i < word.length() ; i++){
                arrlist.add(letters[i]);
            }

            System.out.println("Welcome to the HANGMAN GAME");
            System.out.println();
            for (int i = 0 ; i < word.length() ; i++){
                System.out.print(array[i][1]+" ");
            }
            System.out.println();

            while(!arrlist.isEmpty()){
                System.out.print("Please enter a letter: ");
                String letter = scanner.next().toUpperCase();
                System.out.println();
                char let = letter.charAt(0);

                if (word.indexOf(let) != -1 && !array[word.indexOf(let)][1].equals(letter)) {
                    int countInLoop = 0;
                    for (int i = 0; i < word.length(); i++) {
                        if (word.charAt(i) == let) {
                            array[i][1] = String.valueOf(let);
                            arrlist.remove(Character.valueOf(let));
                            countInLoop++;
                        }
                    }switch (hangman){
                        case 1 -> System.out.println("""
                                                        |
                                                        o
                                                        """);
                        case 2 ->System.out.println("""
                                                        |
                                                        o
                                                        |
                                                        """);
                        case 3 ->System.out.println("""
                                                        |
                                                        o
                                                       /|
                                                       """);
                        case 4 ->System.out.println("""
                                                        |
                                                        o
                                                       /|\\
                                                       """);
                        case 5 ->System.out.println("""
                                                        |
                                                        o
                                                       /|\\
                                                       /
                                                       """);
                    }
                    System.out.println("The word contains " + countInLoop + " " + letter + "'s");
                    for (int i = 0 ; i < word.length() ; i++){
                        System.out.print(array[i][1]+" ");
                    }
                    System.out.println();
                }else {
                    System.out.println("The word does not contain any "+letter+"'s");
                    hangman++;
                    switch (hangman){
                        case 1 -> System.out.println("""
                                                        |
                                                        o
                                                        """);
                        case 2 ->System.out.println("""
                                                        |
                                                        o
                                                        |
                                                        """);
                        case 3 ->System.out.println("""
                                                        |
                                                        o
                                                       /|
                                                       """);
                        case 4 ->System.out.println("""
                                                        |
                                                        o
                                                       /|\\
                                                       """);
                        case 5 ->System.out.println("""
                                                        |
                                                        o
                                                       /|\\
                                                       /
                                                       """);
                        case 6 ->System.out.println("""
                                                        |
                                                        o
                                                       /|\\
                                                       / \\
                                                       """);
                    }
                    for (int i = 0 ; i < word.length() ; i++){
                        System.out.print(array[i][1]+" ");
                    }
                    System.out.println();
                    if (hangman == 6){
                        System.out.println("You have lost the game, the word was: "+word);
                        break;
                    }
                }
            }
            if (hangman != 6){
                System.out.println("Congratulations! You have won the game");
            }





        } catch (FileNotFoundException e) {
            System.out.println("File not found");;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

         */


        //Hangman gemini optimize
        /*
        String path = "src\\AnimeName.txt";
        ArrayList<String> list = new ArrayList<>();

        try(BufferedReader reader = new BufferedReader(new FileReader(path))){
            String line;
            while ((line = reader.readLine()) != null){
                list.add(line.trim());
            }
            int rand = random.nextInt(list.size());

            String word = list.get(rand).toUpperCase().trim();
            char[] displayArray = new char[word.length()];
            Arrays.fill(displayArray, '_');

            int remainingLetters = word.length();
            int hangman = 0;

            System.out.println("Welcome to the HANGMAN GAME\n");

            while (remainingLetters > 0 && hangman < 6) {
                printArray(displayArray);
                System.out.print("Please enter a letter: ");
                char let = scanner.next().toUpperCase().charAt(0);

                boolean foundNew = false;
                int countInLoop = 0;

                for (int i = 0; i < word.length(); i++) {
                    if (word.charAt(i) == let && displayArray[i] == '_') {
                        displayArray[i] = let;
                        countInLoop++;
                        remainingLetters--;
                        foundNew = true;
                    }
                }

                if (foundNew) {
                    System.out.println("\nThe word contains " + countInLoop + " " + let + "'s");
                } else {
                    hangman++;
                    System.out.println("\nThe word does not contain any " + let + "'s");
                }

                drawHangman(hangman);
            }

            if (remainingLetters == 0) {
                printArray(displayArray);
                System.out.println("Congratulations! You have won");
            } else {
                System.out.println("Game Over! The word was: " + word);
            }

        } catch (FileNotFoundException e) {
            System.out.println("File not found");;
        } catch (IOException e) {
            System.out.println("Something went wrong");;
        }

         */


        //Date Time
        /*
        LocalDate date = LocalDate.now();
        LocalTime time = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();
        Instant instant = Instant.now(); //UTC

        System.out.println(date);
        System.out.println(time);
        System.out.println(dateTime);
        System.out.println(instant);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String newDateTime = dateTime.format(formatter);

        System.out.println(newDateTime);

        LocalDateTime dateTime1 = LocalDateTime.of(2024, 12, 25, 12, 0, 0);
        LocalDateTime dateTime2 = LocalDateTime.of(2025, 1, 1, 0, 0, 0);

        if (dateTime1.isAfter(dateTime2)){
            System.out.println(dateTime1+" is earlier");
        } else if (dateTime1.isBefore(dateTime2)){
            System.out.println(dateTime2+" is earlier");
        } else if (dateTime1.isEqual(dateTime2)){
            System.out.println(dateTime2+" and "+dateTime2+" are equal");
        }

         */


        //Anonymous Class
        /*
        Dog dog1 = new Dog();
        Dog dog2 = new Dog(){
          @Override
          void sound(){
              System.out.println("wan");
          }
        };

        dog1.sound();
        dog2.sound();

         */


        //Timer TimerTask
        /*
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            int count = 5;
            @Override
            public void run() {
                System.out.println("hello");
                count--;
                if (count<=0){
                    timer.cancel();
                }
            }
        };

        timer.schedule(task, 0, 1000);

         */


        //Countdown Timer
        /*
        int response;
        System.out.print("Enter the number you want to countdown from: ");
        response = scanner.nextInt();

        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            int countdown = response;

            @Override
            public void run() {
                System.out.println(countdown);
                countdown--;
                if (countdown <= -1){
                    System.out.println("Happy New Year!");
                    timer.cancel();
                }
            }
        };

        timer.schedule(task, 0, 1000);

         */


        //Generics
        /*
        //kısacası classınn içinde type belirtmemize gerek yok
        Product<String, Integer> product1 = new Product<>("a",1);
        Product<String, Double> product2 = new Product<>("b",3.5);

        System.out.println(product1.getItem());
        System.out.println(product2.getItem());
        System.out.println(product1.getPrice());
        System.out.println(product2.getPrice());

         */


        //hasmaps (python sözlük)
        /*
        HashMap<String, Double> map = new HashMap<>();

        map.put("apple", 1.25);
        map.put("orange", 1.50);
        map.put("banana", 1.75);
        map.put("coconut", 2.00);

        System.out.println(map.get("orange"));
        System.out.println(map.keySet());
        System.out.println(map.remove("apple"));
        System.out.println(map.keySet());
        System.out.println(map.containsKey("orange"));
        System.out.println(map.containsValue(3.00));
        System.out.println(map.size());
        System.out.println(map.values());

        for (String key : map.keySet()){
            System.out.println(key+" : $"+map.get(key));
        }

         */


        //Enums
        /*
        String response = scanner.nextLine();
        Day day = Day.valueOf(response.toUpperCase());

        switch (day){
            case MONDAY, THUESDAY, WEDNESDAY, THURSDAY, FRIDAY -> System.out.println("Its the weekday");
            case SATURDAY, SUNDAY -> System.out.println("Its the weekend");
        }

         */


        //Threads
        /*
        MyRunnable myRunnable = new MyRunnable();
        Thread thread = new Thread(myRunnable);
        thread.setDaemon(true);


        System.out.print("Enter your name in 5 seconds: ");
        thread.start();
        String name = scanner.nextLine();
        //thread.interrupt();

        System.out.println("Merhaba "+name);

         */


        //Multithreading
        /*
        Thread thread1 = new Thread(new MyRunnable("1"));
        Thread thread2 = new Thread(new MyRunnable("2"));

        System.out.println("GAME START!");

        thread1.start();
        thread2.start();

        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        System.out.println("GAME END!");

         */


        //Alarm Clock
        /*
        System.out.print("Enter the time you want alarm to go off (hh mm ss): ");
        int hour = scanner.nextInt();
        int minute = scanner.nextInt();
        int second = scanner.nextInt();
        scanner.nextLine();

        Thread thread2 = new Thread(new MyRunnable(hour, minute, second));
        thread2.start();

        Thread thread1 = new Thread(new MyRunnable());
        thread1.setDaemon(true);
        thread1.start();

         */





    }
















    //Hangman gemini optimize
    /*
    public static void drawHangman(int stage) {
        String drawing = switch (stage) {
            case 1 -> "  |\n  o";
            case 2 -> "  |\n  o\n  |";
            case 3 -> "  |\n  o\n /|";
            case 4 -> "  |\n  o\n /|\\";
            case 5 -> "  |\n  o\n /|\\\n /";
            case 6 -> "  |\n  o\n /|\\\n / \\";
            default -> "";
        };
        System.out.println(drawing + "\n");
    }

    public static void printArray(char[] arr) {
        for (char c : arr) System.out.print(c + " ");
        System.out.println();
    }

     */



    //quiz game
    /*
    static void bloker(int lenght){
        for (int i = 0 ; i < lenght ; i++){
            System.out.print("*");
        }
        System.out.println();
    }

     */



    //dice rolling program
    /*
    static void diceUp(){
        System.out.print(" ");
        for (int i = 0 ; i < 7 ; i++)
            System.out.print("-");
        System.out.println();
    }

    static int diceRoll(int total){
        int number = random.nextInt(1,7);
        String dice1= """
                |       |
                |   ●   |
                |       |""";
        String dice2= """
                | ●     |
                |       |
                |     ● |""";
        String dice3= """
                | ●     |
                |   ●   |
                |     ● |""";
        String dice4= """
                | ●   ● |
                |       |
                | ●   ● |""";
        String dice5= """
                | ●   ● |
                |   ●   |
                | ●   ● |""";
        String dice6= """
                | ●   ● |
                | ●   ● |
                | ●   ● |""";

        diceUp();
        switch (number){
            case 1 ->{
                System.out.println(dice1);
                diceUp();
                System.out.println("You rolled 1!");
                total += 1;
            }
            case 2 ->{
                System.out.println(dice2);
                diceUp();
                System.out.println("You rolled 2!");
                total += 2;
            }
            case 3 ->{
                System.out.println(dice3);
                diceUp();
                System.out.println("You rolled 3!");
                total += 3;
            }
            case 4 ->{
                System.out.println(dice4);
                diceUp();
                System.out.println("You rolled 4!");
                total += 4;
            }
            case 5 ->{
                System.out.println(dice5);
                diceUp();
                System.out.println("You rolled 5!");
                total += 5;
            }
            case 6 ->{System.out.println(dice6);
                diceUp();
                System.out.println("You rolled 6!");
                total += 6;
            }
        }
        System.out.println();
        return total;
    }

     */


    //banking program
    /*
    static void bloker(int lenght){
        for (int i = 0 ; i < lenght ; i++){
            System.out.print("*");
        }
        System.out.println();
    }

    static void showBalance(double balance){
        System.out.println("Your current balance is: "+balance);
    }

    static double deposit(double balance){
        System.out.print("Enter the deposit amount: ");
        double amount = scanner.nextDouble();
        if (amount<0)
            System.out.println("Amount can't be negative!");
        else {
            balance += amount;
            System.out.println("Your new balance is: " + balance);
        }

        return balance;
    }

    static double withdraw(double balance){
        System.out.print("Enter the withdraw amount: ");
        double amount = scanner.nextDouble();
        if (amount>balance){
            System.out.println("You do not have enough balance");
            showBalance(balance);
        }else if (amount<0)
            System.out.println("Amount can't be negative!");
        else{
            balance -= amount;
            System.out.println("Your new balance is: "+balance);
        }

        return balance;
    }

     */






}
