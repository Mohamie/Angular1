import {IProvince} from './province'

export class Address
{
    recipientName?: string;
    recipientPhone: number;
    street: string;
    complex?: string;
    surburb: string;
    town: string;
    province: string;
    postalCode: number; 
}