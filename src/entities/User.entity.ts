import { Entity, PrimaryGeneratedColumn, Column , OneToOne , JoinColumn } from "typeorm"
import { Profile } from "./Profile.entity";

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

	@OneToOne(()=> Profile , (profile) => profile.user , {
		cascade : true,
	})
	@JoinColumn()
	profile : Profile;
}