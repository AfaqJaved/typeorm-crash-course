import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne , ManyToMany , JoinTable } from "typeorm"
import { User } from "./User.entity";
import { Course } from "./Course.entity";

@Entity({name : "Student"})
export class Student {

	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable : false})
	rollNo: string;

	@Column({nullable : false})
	firstName : string;

    @Column({nullable : false})
	lastName : string;

    @Column({nullable : false})
	age : number;

    @ManyToMany(()=> Course , (course)=> course.students, {
        cascade : true,
    })
    @JoinTable()
    courses : Course[]



}