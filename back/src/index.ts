import server from "./server";
import { PORT, HOST, PROTO } from "./config/index";

server.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
    
});
