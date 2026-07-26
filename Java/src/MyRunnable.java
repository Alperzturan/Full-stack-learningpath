import javax.sound.sampled.*;
import java.io.File;
import java.io.IOException;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Formatter;
import java.util.Locale;
import java.util.Scanner;

public class MyRunnable implements Runnable{
    @Override
    public void run() {

    }


    //Threading
    /*
    @Override
    public void run() {
        for (int i = 5 ; i >= 1 ; i--){
            try {
                Thread.sleep(1000);

                if (i == 1){
                    System.out.println("\nTime is up");
                    System.exit(0);
                }
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }

    }

     */

    //Multithreading
    /*
    private final String text;
    MyRunnable(String text){
        this.text = text;
    }

    @Override
    public void run() {
        for (int i = 1 ; i <=5 ; i++){
            try {
                System.out.println(text);
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }

     */

    //Alarm Clock
    /*
    private int hour = -1;
    private int minute = 00;
    private int second = 00;


    MyRunnable(){}

    MyRunnable(int hour, int minute, int second){
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    String path = "src/ちゃんみな-TEST-ME-_Official-Music-Video_.wav";
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
    static int stop = 0;

    @Override
    public void run() {
        if (hour == -1){
            while (true){
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                LocalTime time = LocalTime.now();
                System.out.print("\r"+time.format(formatter));
                if (stop == 1){
                    stop = 3;
                    break;
                }
            }
        }else {
            LocalTime thisTime = LocalTime.of(hour, minute, second);
            System.out.println("Alarm set for: "+thisTime.format(formatter));
            while (true){
                LocalTime time = LocalTime.now().truncatedTo(ChronoUnit.SECONDS);
                if (thisTime.equals(time)){
                    File file = new File(path);
                    try (AudioInputStream audioStream = AudioSystem.getAudioInputStream(file)){
                        Clip clip = AudioSystem.getClip();
                        clip.open(audioStream);
                        clip.start();
                        stop = 1;
                        Thread.sleep(100);
                        if (stop == 3){
                            System.out.print("\nPress anything on your keyboard to stop the alarm: ");
                            String choice = Main.scanner.next();
                            if (!choice.isEmpty()){
                                clip.close();
                                System.exit(0);
                            }
                        }

                    } catch (LineUnavailableException | UnsupportedAudioFileException | IOException |
                             InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }
    }

     */

    //Alarm Clock Gemini Optimize (gemini mal)
    /*
    private int hour = -1;
    private int minute = 0;
    private int second = 0;

    // Değişkenlerin threadler arası anlık senkronizasyonu için volatile şart
    private static volatile boolean isAlarmActive = false;
    private final String path = "src/ちゃんみな-TEST-ME-_Official-Music-Video_.wav";
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");

    public MyRunnable() {}

    public MyRunnable(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    @Override
    public void run() {
        if (this.hour == -1) {
            runClockDisplay();
        } else {
            runAlarmChecker();
        }
    }

    // SAATİ GÖSTEREN THREAD
    private void runClockDisplay() {
        // Şartı içeride kontrol ederek son saniyeyi yazdırmayı garanti ediyoruz
        while (true) {
            System.out.print("\rŞu Anki Saat: " + LocalTime.now().format(formatter));

            // Eğer alarm çaldıysa, son saati yazdırdıktan sonra döngüden çık
            if (isAlarmActive) {
                break;
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                return;
            }
        }
    }

    // ALARMI KONTROL EDEN THREAD
    private void runAlarmChecker() {
        LocalTime alarmTime = LocalTime.of(hour, minute, second);
        System.out.println("\nAlarm kuruldu: " + alarmTime.format(formatter));

        while (true) {
            // Nanosaniyeyi kırpıyoruz
            LocalTime now = LocalTime.now().truncatedTo(ChronoUnit.SECONDS);

            if (now.equals(alarmTime)) {
                triggerAlarm();
                break; // Alarm tetiklendi, döngüden çık
            }

            try {
                // İşlemciyi yormamak için yarım saniyede bir kontrol et
                Thread.sleep(500);
            } catch (InterruptedException e) {
                return;
            }
        }
    }

    // ALARM ÇALMA VE DURDURMA MANTIĞI
    private void triggerAlarm() {
        isAlarmActive = true; // Diğer thread (saat) bunu görüp ekrana yazmayı bırakır

        try {
            File file = new File(path);
            AudioInputStream audioStream = AudioSystem.getAudioInputStream(file);
            Clip clip = AudioSystem.getClip();
            clip.open(audioStream);
            clip.start();

            System.out.println("\n\n!!! ALARM ÇALIYOR !!!");
            System.out.print("Durdurmak için bir şeyler yazıp Enter'a basın: ");

            // Main sınıfındaki static scanner'ı kullanıyoruz
            if (Main.scanner.hasNext()) {
                Main.scanner.next();
            }

            clip.stop();
            clip.close();
            System.out.println("Alarm durduruldu. Program kapatılıyor...");
            System.exit(0);

        } catch (Exception e) {
            System.err.println("Alarm çalarken hata: " + e.getMessage());
        }
    }

     */


}
