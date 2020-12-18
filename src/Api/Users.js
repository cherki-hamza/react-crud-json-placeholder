import axios from "axios";

// get users
export async function getUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users/';
    try {
        const response = await axios.get(url);
        console.log(response);
        return response;
    }catch (error){
        console.error(error);
    }
}

// delete user
export async function deleteUser(id){
    const url = 'https://jsonplaceholder.typicode.com/users/'+id;
    try {
        const response = await axios.delete(url);
        console.log(response);
        return response;
    }catch (error){
        console.error(error);
    }
}

// update user
export async function updateUser(id,values){
    const url = 'https://jsonplaceholder.typicode.com/users/'+id;
    try {
        const response = await axios.put(url,values);
        console.log(response);
        return response;
    }catch (error){
        console.error(error);
    }
}

// add new user
export async function addUser(values){
    const url = 'https://jsonplaceholder.typicode.com/users/';
    try {
        const response = await axios.post(url,values);
        console.log(response);
        return response;
    }catch (error){
        console.error(error);
    }
}


