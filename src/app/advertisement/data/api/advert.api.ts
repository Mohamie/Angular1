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
               description: "Great sound and very stylish design",
               price: 5300,
               dateCreated: new Date(2021, 2, 27),
           },     
           {
               id: 2,
               title: 'Mechanical Keyboard',
               description: "he SK622 hybrid wireless gaming keyboard takes a modern approach to the classic mechanical keyboard with low profile switches housed in a sleek chassis for a drool-worthy aesthetic.",
               price: 1200,
               dateCreated: new Date(2021, 3, 21)
           },     
           {
               id: 3,
               title: 'AMD RX 570, 4GB GDDR5',
               description: "The 4th generation GCN architecture is engineered for gamers who play anything from the latest MOBA’s to the most popular AAA titles. Asynchronous Shaders and an enhanced Geometry Engine power new levels of smooth gameplay performance",
               price: 3400,
               dateCreated: new Date(2021, 3, 19)
           },     
           {
               id: 4,
               title: '512GB Hikvision NVMe SSD',
               description: "The Hikvision E2000 SSD has extremely high read and write speeds of up to 3500MB/s and supports both NVMe and PCIe.",
               price: 1800,
               dateCreated: new Date(2021, 3, 17)
           },     
           {
               id: 5,
               title: 'Monitor Arm',
               description: "This single arm monitor stand fits most LCD/LED monitors measuring 17”-27”/43-58cm and supports up to 14.3 Ibs/6.5kg.\nIts is made from aircraft grade aluminium alloy material, which makes this desk mount light and reliable.",
               price: 780,
               dateCreated: new Date(2021, 3, 22)
           },     
        ] 

        return {adverts};
    }
}