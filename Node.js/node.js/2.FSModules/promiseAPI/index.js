import * as fs from "fs/promises"

//creating a folder 
try {
    await fs.mkdir("c:/Users/zaman/Desktop/newFolder") //bu sadece bir tane folder oluşturur
    await fs.mkdir("c:/Users/zaman/Desktop/alper/aaa", { recursive: true }) //bu var olan son folderdan itibaren ek folderların hepsini oluşturur
} catch (error) {
    console.log(error);
}
//not:diğerlerinde de try catch kullanılmalı

//reading the contents of a folder (shows the files inside)
/* await fs.mkdir("c:/Users/zaman/Desktop/alper/a/b/c/d", { recursive: true })
const files = await fs.readdir("c:/Users/zaman/Desktop/alper/a/b/c/d")
console.log(files);
files.forEach(e => {
    console.log(e);
});
 */

//removing a directory(only empty directories)
/* fs.rmdir("c:/Users/zaman/Desktop/alper/a/b/c/e") */

//writing a file
/* await fs.writeFile("a.txt", "hello auu")
// const file = await fs.readFile("a.txt") buffer olarak verir
const file = await fs.readFile("a.txt","utf-8")
console.log(file); */

//dosyaya ekleme yapma
/* await fs.writeFile("a.txt", "hello auu")
await fs.appendFile("a.txt", "\nnice to meet you")
const file = await fs.readFile("a.txt","utf-8")
console.log(file); */

//dosya kopyalama
/* await fs.writeFile("a.txt", "hello auu")
await fs.appendFile("a.txt", "\nnice to meet you")
const file = await fs.readFile("a.txt","utf-8")

await fs.copyFile("a.txt", "b.txt")
const file2 = await fs.readFile("b.txt","utf-8")
console.log(file, "\n", file2); */

//dosya bilgisi alma
/* await fs.writeFile("a.txt", "hello auu")
const info = await fs.stat("a.txt")
console.log(info);
console.log(info.isDirectory());
console.log(info.isFile()); */
