import server from "./server";
import { PORT, HOST, PROTO } from "./config/index";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
    server.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`);});    
})
