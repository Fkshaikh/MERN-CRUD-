import axios from "axios"


const URL = "http://localhost:8766"

export const addUser = async (data) => {
    try {
        await axios.post(`${URL}/adduser`, data);

    } catch (error) {
        console.log(error);

    }
}

export const getUser = async () => {
    try {
        
       return await axios.get(`${URL}/alluser`);
       
    } catch (error) {
        console.log(error);
    }
}

export const findUser = async(id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while Calling",error);
        
    }

}
export const updateUser = async(data,id) =>{
    try {
        return await axios.post (`${URL}/${id}`,data)
    } catch (error) {
        console.log("Error while Calling",error);
        
    }

}


export const DeleteUser = async(id) =>{
    try {
        return await axios.delete(`${URL}/${id}`)
        
    } catch (error) {
        console.log("Error While Deleting",error);
        
    }
}