import axios from "axios";
let tenantID = localStorage.getItem("tenantId");
export const editCategory = (data, history, id, setSuccess) => {
  axios
    .put(`http://localhost:3007/API/categories/${id}`, data)
    .then((res) => {
      console.log("add cart response    ", res.data);
      setSuccess(true);
      history.push("/category");
    })
    .then((error) => console.log(error));
};
export const getCategory = (id, setData) => {
  debugger;
  axios
    .get(`http://localhost:3007/API/categories/tenant/${id}`, id)
    .then((res) => {
      debugger;
      console.log("add cart response    ", res.data);
      setData(res.data);
    })
    .then((error) => console.log(error));
};
