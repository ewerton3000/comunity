import { File } from "src/files/entities/file.entity";
import { Registration } from "src/registration/entities/registration.entity";
import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async() =>{
            const dataSource = new DataSource({
                type: 'mysql', 
                host: 'localhost', 
                port:3306,
                username:'root',
                password:'bank5898@',
                database:"comunity",
                entities:[Registration,File], 
            synchronize: true,
            });


            return dataSource.initialize()
        }
    }
]
