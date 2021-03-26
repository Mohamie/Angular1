import { Address } from "./address";

export class User
{
    
    
    constructor(public id: number, public fornames: string, public surname: string, public email: string, public password: string, public address: Address)
    {

    }

    firstName() : string
    {
        if(!this.fornames) return '';

        return this.fornames.split(' ')[0];
    }

    fullNames() : string
    {

        return this.firstName() + ' ' + this.surname;
    }
}