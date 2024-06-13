const mongoose = require("mongoose")

const URL =  "mongodb+srv://clownlaugh100:thapa@cluster0.rwio1hg.mongodb.net/mernadmin?retryWrites=true&w=majority&appName=Cluster0"


// mongodb+srv://clownlaugh100:thapa@cluster0.lfq1qxs.mongodb.net/mern_admin?retryWrites=true&w=majority


const connectdb = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Connection successful to the database");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

module.exports= connectdb

// const mongoose = require("mongoose");

// const URL = "mongodb+srv://clownlaugh100:thapa@cluster0.rwio1hg.mongodb.net/mernadmin?retryWrites=true&w=majority&appName=Cluster0";

// const connectdb = async () => {
//   try {
//     await mongoose.connect(URL,{
//         useNewUrlParser: true,
//   useUnifiedTopology: true,
//     });
//     console.log("Connection successful to the database");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     process.exit(1); // Exit process with failure
//   }
// };

// module.exports = connectdb;
