import ICredentials from "../interfaces/ICredentials"
import { CredentialsModel, UserModel } from "../config/data-source";
import { Credentials } from "../entities/Credential";
import { User } from "../entities/User";


let id = 1;
let credentials: ICredentials[] = [];
export const createCredentialsService = async (username: string, password: string): Promise<number> => {
    const newCredentials: Credentials = CredentialsModel.create({username, password});
    await  CredentialsModel.save(newCredentials);
    return newCredentials.id
}



export const checkCredentialsService = async (username: string, password: string) : Promise<User | null> =>{
   const foundCredentials = await CredentialsModel.findOne({where: {username, password}});

   if(!foundCredentials){
    throw new Error("Credentials not found");
   }else{
        const user = await UserModel.findOne({where: {id: foundCredentials.id}});
    
        return user;
   }
       
   }
   
