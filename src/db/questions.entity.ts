import { Column, Entity, getRepository, PrimaryColumn, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class Questions {
    @PrimaryColumn({type: "bigint"})
    id!: number

    @Column({type: "text"})
    hint!: string

    @Column()
    imageURL!: string

    @Column()
    correctScore!: number
    
}

export function getQuestionsRepo(): Repository<Questions> {
    return getRepository(Questions)
}