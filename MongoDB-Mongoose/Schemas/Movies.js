import mongoose, { Schema } from "mongoose"

//schema-tablo
const movieSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String,
        required: true,
        trim: true
    },
    ratings: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v)=> v >= 10
    },
    genre: {
        type: Array
    },
    isActive: {
        type: Boolean
    },
    comments: [{
        value: {
            type: String
        },
        published: {
            type: Date,
            default: Date.now
        }
    }]
})

//Creating a model
const MovieModel = mongoose.model("Movie", movieSchema)

//Creating a new document and inserting the data to the db
const createDoc = async ()=>{
    try {
        const m1 = new MovieModel({
            name: "swryhwer",
            ratings: 3,
            money: 563567,
            genre: ["sci-fi", "erşgöçer"],
            isActive: true,
            comments: [{
                value: "detrghe"
            }]
        })
        const result = await m1.save()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


//inserting more than one data to the db
const createMultipleDoc = async ()=>{
    try {
        const m1 = new MovieModel({
            name: "dsrr",
            ratings: 3,
            money: 345,
            genre: ["sci-fi", "erşgöçer"],
            isActive: true,
            comments: [{
                value: "detrghe"
            }]
        })
        const m2 = new MovieModel({
            name: "sdf",
            ratings: 3,
            money: 345,
            genre: ["sci-fi", "erşgöçer"],
            isActive: true,
            comments: [{
                value: "detrghe"
            }]
        })
        const m3 = new MovieModel({
            name: "gthkde",
            ratings: 3,
            money: 345,
            genre: ["sci-fi", "erşgöçer"],
            isActive: true,
            comments: [{
                value: "detrghe"
            }]
        })
        const m4 = new MovieModel({
            name: "dsrh",
            ratings: 3,
            money: 345,
            genre: ["sci-fi", "erşgöçer"],
            isActive: true,
            comments: [{
                value: "detrghe"
            }]
        })
        const result = await MovieModel.insertMany([m1, m2, m3, m4])
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}


//reading the data from th db
const readData = async ()=>{
    try {
        const data = await MovieModel.find()
        data.forEach(data => {
            console.log(data.name);              
        })
        data.forEach(data => {
            console.log(data.ratings);              
        })
        // console.log(data)
    } catch (error) {
        console.log(error);
    }
}


//reading single data
const readSingleData = async ()=>{
    try {
        /* const data = await MovieModel.findById("6a68dab10cd66b6bc1286f02")  */    
        /* const data = await MovieModel.findById("6a68dab10cd66b6bc1286f02", "name")   */  
        /* const data = await MovieModel.find({name: "dsrh"})  */
        /* const data = await MovieModel.find().limit(2)  */
        /* const data = await MovieModel.find().skip(2)  */
        /* const data = await MovieModel.find().countDocuments()  */
        /* const data = await MovieModel.find().sort({name: -1}) */
        const data = await MovieModel.find({money: {$gt: 700}}) //greater than - lt less than - ne not included - and kullanmak için array içine iki object şeklinde 
 
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}


//update data
const updateData = async (name)=>{
    try {
        /* const data = await MovieModel.updateOne({name: name}, {ratings: 4}) */

        const data = await MovieModel.updateMany({ratings: 3}, {isActive: false})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


const deleteData = async (name)=>{
    try {
        /* const data = await MovieModel.deleteOne({name: name}) */
        const data = await MovieModel.deleteMany({money: {$gt: 500}})
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

    
    
export {createDoc, createMultipleDoc, readData, readSingleData, updateData, deleteData} 