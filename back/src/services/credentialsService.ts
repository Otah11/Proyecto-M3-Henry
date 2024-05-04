import ICredentials from "../interfaces/ICredentials"

let id = 1;
let credentials: ICredentials[] = [];
export const createCredentialsService = async (username: string, password: string) => {
    const newCredentials:ICredentials = {
        id,
        username,
        password
        
        
    }
    credentials.push(newCredentials);
    id++;
    return newCredentials.id
}

export const getCredential = async () => {
    return credentials
}

export const checkCredentialsService = async (username: string, password: string) : Promise<number | null> =>{
    const foundCredentials: ICredentials | undefined = credentials.find(credentials => credentials.username === username && credentials.password === password);
    if(!foundCredentials) return null
    return foundCredentials.id
}