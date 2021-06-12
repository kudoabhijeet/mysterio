import {createConnection, Connection} from "typeorm";
import { Questions } from "./questions.entity";


export const connect = async () => await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    database: "",
    logging: "all",
    logger: "advanced-console",
    entities: [ Questions ], // add entities as schemas
    synchronize: true,
    // dropSchema: true, // drops tables on restart
});