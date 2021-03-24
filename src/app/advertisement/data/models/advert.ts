import { User } from "src/app/authentication/data/models/user";

export interface Advert
{
    id: number;
    title: string;
    description: string;
    price: number;
    dateCreated?: Date;
    user?: User;
}