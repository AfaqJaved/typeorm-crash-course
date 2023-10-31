import { Entity, PrimaryGeneratedColumn, Column , OneToOne , JoinColumn , OneToMany } from "typeorm"
import { Profile } from "./Profile.entity";
import { Todo } from "./Todo.entity";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	isActive: boolean;

	// @OneToOne(()=> Profile , (profile) => profile.user , {
	// 	cascade : true,
	// })
	// @JoinColumn()
	// profile : Profile;

	@OneToMany(()=> Todo , (todo) => todo.user , {cascade : true})
	todos : Todo[]
}