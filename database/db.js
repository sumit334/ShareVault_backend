import mongoose from "mongoose";



const DBConnection= async ()=>{
    const MONGODB_URI=`mongodb+srv://file_sharingkey:sumitfile@file-sharing.phqykdg.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
    try {
        await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("Error while connecting the DataBase",error.message);
    }
}

export default DBConnection;
