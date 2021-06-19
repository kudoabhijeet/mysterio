import { Column, Entity, getRepository, PrimaryColumn, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class Questions {
    @PrimaryGeneratedColumn('increment')
    id!: number

    @Column({type: "text"})
    hint!: string

    @Column({type: "text"})
    imageURL!: string

    @Column()
    correctScore!: number
}

export function getQuestionsRepo(): Repository<Questions> {
    return getRepository(Questions)
}
