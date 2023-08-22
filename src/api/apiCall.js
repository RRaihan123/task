import axios from 'axios';

export default async function apiCall(){
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data[0].id;
}