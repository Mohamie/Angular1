import { InMemoryDbService } from "angular-in-memory-web-api";
import { Advert } from "../models/advert";

export class AdvertAPI implements InMemoryDbService
{
    createDb()
    {
        
        const adverts: Advert[] = [
           {
               id: 1,
               title: 'Home Theatre',
               description: "",
               price: 5300
           },     
           {
               id: 2,
               title: 'Mechanical Keyboard',
               description: "",
               price: 1200
           },     
           {
               id: 3,
               title: 'AMD RX 570, 4GB GDDR5',
               description: "",
               price: 3400
           },     
           {
               id: 4,
               title: '512GB Hikvision NVMe SSD',
               description: "",
               price: 1800
           },     
           {
               id: 5,
               title: 'Monitor Arm',
               description: "",
               price: 780
           },     
        ] 

        return {adverts};
    }
}