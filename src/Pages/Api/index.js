import axios from "axios";

const url = "https://backend-gtvsairam-project.herokuapp.com/api/home";

const dataFetch = async () =>{
    try{
        const res = await axios.get(url);
        return res.data;

    } catch (err) {}
};
export default dataFetch;