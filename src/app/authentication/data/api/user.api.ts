import {InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from '../models/user';

export class UserAPI implements InMemoryDbService
{
    createDb() 
    {
        let users: User[] = [

            new User(0, "Thabelo Nelson", "Mohamie", "thabelo@gmail.com", "password123", {
                recipientPhone: 27719084767,
                street: "Mandela Street",
                surburb: "Willows",
                town: "Bloemfontein",
                province: {id: 0, provinceName: "Free State"},
                postalCode: 9300
            }),

            new User(1, "Mohau", "Modise", "mohau@gmail.com", "password123", {
                recipientPhone: 27719084767,
                street: "Eendrag CUT",
                surburb: "Willows",
                town: "Bloemfontein",
                province: {id: 0, provinceName: "Free State"},
                postalCode: 9300
            }),
            
            new User(2, "Thabelo Nelson", "Mohamie", "sthabe@gmail.com", "password123", {
                recipientPhone: 27719084767,
                street: "Mandela Street",
                surburb: "Willows",
                town: "Bloemfontein",
                province: {id: 0, provinceName: "Free State"},
                postalCode: 9300
            }),

        ]
       

        return {users};
    }
}