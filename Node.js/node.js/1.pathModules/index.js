import path from "path"

console.log(path.basename("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js"));

console.log(path.basename("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js", "js"));

console.log(path.dirname("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js"));

console.log(path.extname("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js"));

console.log(path.join("C:","Users","zaman","Desktop","HerSey","Ders","Kodlama","Node.js","node.js",
"pathModules","index.js"));

console.log(path.join("C:","Users","zaman","Desktop","HerSey","Ders","Kodlama","Node.js","node.js","pathModules","index.js",".."));

console.log(path.join("C:","Users","zaman","Desktop","HerSey","Ders","Kodlama","Node.js","node.js","pathModules","index.js","..",".."));

console.log(path.normalize("C:\Users\\zaman/////Desktop/HerSey/Ders/Kodlama/Node.js/node.js///\\pathModules///index.js"));

console.log(path.parse("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js"));

console.log(path.parse("C:/Users/zaman/Desktop/HerSey/Ders/Kodlama/Node.js/node.js/pathModules/index.js").dir);