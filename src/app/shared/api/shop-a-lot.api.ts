import { InMemoryDbService } from "angular-in-memory-web-api";
import { Advert } from "src/app/advertisement/data/models/advert";
import { IProvince } from "src/app/authentication/data/models/province";
import { User } from "src/app/authentication/data/models/user";

export class ShopALotAPI implements InMemoryDbService
{
    createDb()
    {

        //users
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

        //provinces
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

        //adverts
        const adverts: Advert[] = [
            {
                id: 1,
                title: 'Home Theatre',
                description: "Great sound and very stylish design",
                price: 5300,
                dateCreated: new Date(2021, 2, 27),
                userEmail: "mohau@gmail.com"
            },     
            {
                id: 2,
                title: 'Mechanical Keyboard',
                description: "he SK622 hybrid wireless gaming keyboard takes a modern approach to the classic mechanical keyboard with low profile switches housed in a sleek chassis for a drool-worthy aesthetic.",
                price: 1200,
                dateCreated: new Date(2021, 3, 21),
                userEmail: 'mohau@gmail.com'
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

        return {users, provinces, adverts};
    }
}