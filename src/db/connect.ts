import {createConnection, Connection} from "typeorm";
import { Questions } from "./questions.entity";
export const connect = async () => await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [ Questions ], // add entities as schemas
    synchronize: true,

});

// export const connect = async () => await createConnection({
//     type: "postgres",
//     username: "mysterio",
//     password: "mysterio",
//     database: "mysterio",
//     logging: "all",
//     logger: "advanced-console",
//     entities: [ Questions ],
//     synchronize: true,
//     // dropSchema: true,
// });