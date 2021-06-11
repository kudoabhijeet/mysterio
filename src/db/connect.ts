import {createConnection, Connection} from "typeorm";


export const connect = async () => await createConnection({
    type: "postgres",
    username: "",
    password: "",
    database: "",
    logging: "all",
    logger: "advanced-console",
    // entities: [  ], // add entities as schemas
    synchronize: true,
    // dropSchema: true, // drops tables on restart
});