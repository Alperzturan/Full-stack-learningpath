import mongoose, { connect } from "mongoose"

async function connectDB(DATABASE_URL) {
    try {
        await connect(DATABASE_URL)
        console.log("database connected..");
        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB