const { default: mongoose } = require("mongoose");

export const dbConnect = async () => {

    const MONGODB_URI = 'mongodb+srv://buddhikamadusanka2000:2001219_Buddhika@knowledgemanager.vfpdl.mongodb.net/?retryWrites=true&w=majority&appName=knowledgeManager';

    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database successfully connected.....");
    }
    catch(err) {
        console.log("Something went wrong.... " + err);
    }
    
}