import axios from 'axios';

//const url = 'http://localhost:8800';
export const authenticateSignup = async (user) => {
    try {
        return await axios.post('http://localhost:8800/signup', user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}
export const authenticateLogin = async (user) => {
    try {
        return await axios.post('http://localhost:8800/login', user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
        return error.response;
    }
}
export const payment = async(data) =>{
    try{
        let response = await axios.post('http://localhost:8800/payment',data)
        return response.data;

    }
    catch(error){
        console.log('Error while payment api calling', error)
    }
}