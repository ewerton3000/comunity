import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    fileName:string

    @Column()
    mimetype:string

    @Column('longblob')  // Change to 'longblob' or 'blob'
    data: Buffer;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date
}
   