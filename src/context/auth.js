import axios from "axios";

export function getSingleUser(userId) {
    axios.get(`http://localhost:5051/users/${userId}`).then((response)=>{
        return response.data;
    });
}

export function getSingleUserByEmail(email) {
    return axios.get(`http://localhost:5051/users/${email}`)
      .then((response) => {
        // console.log(response.data);
        return response.data;
      });
  }