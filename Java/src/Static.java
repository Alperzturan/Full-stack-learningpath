public class Static {
    static int count = 0;
    //bu değişkeni statik yapmak oluşturulacak bütün classlarda bu değişkeni
    //yeni değilde hepsinde aynı olarak kullanmayı sağlar. mesela her oluşşturduğumuz
    //yeni classta renk farklı olacak ama count bu örneğe göre 1 artacak ve 1 olarak
    //kalmak yerine kaç tane oluşturulduysa o kadar olcak

    String color;

    Static(String color){
        this.color = color;
        count++;
    }

    static void ShowColorCount(){
        System.out.println("You have this many colors: "+count);
    }
}
