import { File } from "src/files/entities/file.entity";
import { Registration } from "src/registration/entities/registration.entity";
import { DataSource } from "typeorm";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async() =>{
            const dataSource = new DataSource({
                type: 'mysql', 
                host: process.env.HOST, 
                port:3306,
                username:process.env.USER,
                password:process.env.PASSWORD,
                database:process.env.DATABASE,
                entities:[__dirname + '/../**/*.entity{.ts,.js}'], 
            synchronize: true,
            });


            return dataSource.initialize()
        }
    }
]
 