import EventEmitter from "node:events";

const customEmitter = new EventEmitter()

customEmitter.on("response1", (name, id)=>{
    console.log(`name: ${name}, id: ${id}`);
})
customEmitter.once("response2", (name, id)=>{
    console.log(`name: ${name}, id: ${id}`);
})

customEmitter.emit("response1", "a", 1)
customEmitter.emit("response2", "b", 2)

customEmitter.emit("response1", "a", 1)
customEmitter.emit("response2", "b", 2)