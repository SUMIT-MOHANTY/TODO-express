import {app} from "./app.js";
import  dotenv from "dotenv";
import {connectDB} from "./db/connect.js";


dotenv.config({
    path: "./.env",
}
);

const port = process.env.PORT;

connectDB()
 .then(() => {
    app.on("error",()=>{
        console.log(`error starting the app`);
    });
    app.listen(port,()=>{
        console.log(`App is running on port ${port}`);
    });
})
.catch((error) =>{
    console.log(`Error when conmnecting DB ${error}`);
});

 




