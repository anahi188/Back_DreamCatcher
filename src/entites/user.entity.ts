import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('users')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type:"varchar", name: 'nombre', length: '40', comment: 'Nombre Usuario'})
    name: string;

    @Column({type:"integer", name: 'apellido'})
    lastname: string;

    @Column({type:"varchar", name:'correo'})
    email: string;

    @Column({type:"boolean", name:'contraseña'})
    password: string;


}