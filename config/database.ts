import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect Successful");
  } catch (error) {
    console.log("Connect Failed");
  }
};
