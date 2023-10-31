import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm"
import { User } from "./User.entity";

@Entity({name : "Profile"})
export class Profile {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({nullable : false})
	gender: string;

	@Column({nullable : true})
	skill: string;

	// @OneToOne(()=> User , (user) => user.profile)
	// user : User;

}