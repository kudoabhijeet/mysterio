import {createConnection, Connection} from "typeorm";
import { Questions } from "./questions.entity";



export const connect = async () => await createConnection({
    type: "postgres",
    url: "postgres://hlhwybenkdbwbv:0dcba82f695c280c34c26b29d61904e9d7b9e2568f7ea49aed2e9c5b38f61d07@ec2-18-214-208-89.compute-1.amazonaws.com:5432/d53pu41qal5a77",
    host: "ec2-18-214-208-89.compute-1.amazonaws.com",
    port: 5432,
    username: "hlhwybenkdbwbv",
    password: "0dcba82f695c280c34c26b29d61904e9d7b9e2568f7ea49aed2e9c5b38f61d07",
    database: "d53pu41qal5a77",
    entities: [ Questions ],
    synchronize: true,
    // extra: { ssl: true, rejectUnauthorized: false },
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