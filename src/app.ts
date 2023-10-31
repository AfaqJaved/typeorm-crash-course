import "reflect-metadata";
import express , {Request , Response} from "express";
import dataSource from "./datasource/dataSource";
import { User } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";
import { Todo } from "./entities/Todo.entity";
import { Student } from "./entities/Student.entity";
import { Course } from "./entities/Course.entity";

const PORT = 3000;
const app = express();

dataSource.initialize().then(()=>{
    console.log("DataSource Sucessfully Connected With The Database!!!");
}).catch((err)=>{
    console.log("DataSource Connection Failed" , err);
})


app.get("/",async (req : Request,res : Response)=> {

    // let studentRepo = dataSource.getRepository(Student);
    let coursesRepo = dataSource.getRepository(Course);

    // const course1 = new Course();
    // course1.code = "CS-001";
    // course1.title = "Computer Programming";

    // const course2 = new Course();
    // course2.code = "CS-002";
    // course2.title = "Web Programming";

    // const student = new Student();
    // student.age = 22;
    // student.firstName = "Ahmad";
    // student.lastName = "Asad";
    // student.rollNo = "ST-001";
    // student.courses = [course1,course2];



    let allCourses = await coursesRepo.find({
        relations : ["students"]
    });

    res.json(allCourses);


})


app.listen(PORT , ()=> {
    console.log(`Server Has Started On PORT ${PORT}`);
})





// let userRepo = dataSource.getRepository(User);
    // let profileRepo = dataSource.getRepository(Profile);


    // // let profile = new Profile();
    // // profile.gender = "female";
    // // profile.skill = "Video Editor";


    // // let user = new User();
    // // user.firstName = "Sara";
    // // user.lastName = "Jamshed";
    // // user.isActive = true;
    // // user.profile = profile;

    // // let savedUser = await userRepo.save(user);

    // // left to right
    // // user to profile
    // let allProfiles = await profileRepo.find({
    //     relations : ["user"]
    // });

    // res.json(allProfiles);



    // let userRepo = dataSource.getRepository(User);
    // let todoRepo = dataSource.getRepository(Todo);

    // // const todo1 = new Todo();
    // // todo1.title = "Learn Typeorm";
    // // todo1.description = "Learn Typeorm with notezz";

    // // const todo2 = new Todo();
    // // todo2.title = "Learn React";
    // // todo2.description = "Learn React with notezz";

    // // const todo3 = new Todo();
    // // todo3.title = "Learn NestJs";
    // // todo3.description = "Learn NestJs with notezz";

    // // const user  = new User();
    // // user.firstName = "Asad";
    // // user.lastName = "Javed";
    // // user.isActive = true;
    // // user.todos = [todo1,todo2,todo3];

    // let allTodos = await todoRepo.find({
    //     relations : ["user"]
    // });
    // // let savedUser = await userRepo.save(user);

    // res.json(allTodos);