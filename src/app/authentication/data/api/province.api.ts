import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api'
import { IProvince } from '../models/province';

export class ProvinceAPI implements InMemoryDbService
{
    createDb()
    {
        const provinces: IProvince[] = [
             {
                 "id": 1,
                 "provinceName": "Free State"
             },   
             {
                 "id": 2,
                 "provinceName": "Gauteng"
             },   
             {
                 "id": 3,
                 "provinceName": "Limpopo"
             },   
             {
                 "id": 4,
                 "provinceName": "Mpumalanga"
             },   
             {
                 "id": 5,
                 "provinceName": "Kwa-Zulu Natal"
             },   
             {
                 "id": 6,
                 "provinceName": "Eastern Cape"
             },   
             {
                 "id": 7,
                 "provinceName": "Western Cape"
             },   
             {
                 "id": 8,
                 "provinceName": "Northern Cape"
             },   
             {
                 "id": 9,
                 "provinceName": "North West"
             }   
        ]

        return provinces;    
    }
    
}