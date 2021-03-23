import {IProvince} from './province'

export interface IAddress
{
    recipientName?: string;
    recipientPhone: number;
    street: string;
    complex?: string;
    surburb: string;
    town: string;
    province: IProvince;
    postalCode: number; 
}