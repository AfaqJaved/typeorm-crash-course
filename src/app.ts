import "reflect-metadata";
import express , {Request , Response} from "express";
import dataSource from "./datasource/dataSource";
import { User } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";

const PORT = 3000;
const app = express();

dataSource.initialize().then(()=>{
    console.log("DataSource Sucessfully Connected With The Database!!!");
}).catch((err)=>{
    console.log("DataSource Connection Failed" , err);
})


app.get("/",async (req : Request,res : Response)=> {

    // let userRepo = dataSource.getRepository(User);
    let profileRepo = dataSource.getRepository(Profile);


    // let profile = new Profile();
    // profile.gender = "female";
    // profile.skill = "Video Editor";


    // let user = new User();
    // user.firstName = "Sara";
    // user.lastName = "Jamshed";
    // user.isActive = true;
    // user.profile = profile;

    // let savedUser = await userRepo.save(user);

    // left to right
    // user to profile
    let allProfiles = await profileRepo.find({
        relations : ["user"]
    });

    res.json(allProfiles);

})


app.listen(PORT , ()=> {
    console.log(`Server Has Started On PORT ${PORT}`);
})