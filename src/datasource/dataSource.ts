import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Profile } from "../entities/Profile.entity";


const dataSource = new DataSource({
    type : "postgres",
    host : "localhost",
    port : 5432,
    username : "postgres",
    password : "",
    database : "test",
    logging : true,
    synchronize : true,
    entities : [
        User,
        Profile
    ]
})


export default dataSource;