import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Aishwarya:Aish1234@cluster0.nl58j1c.mongodb.net/Mess-App').then(()=>console.log("DB Connected"));
}
