import axios from "axios";
export const OrderCheckout = (payload) => {
  debugger;
  const userId = localStorage.getItem("userID");
  axios
    .post(`http://localhost:3007/API/orders/placeOrder/${userId}`, payload)
    .then((res) => {
      debugger;
      console.log("add cart response    ", res.data);
    })
    .then((error) => console.log(error));
};

export const getOrders = (setData) => {
  axios
    .get(`http://localhost:3007/API/orders`)
    .then((res) => {
      console.log(res);
      let managedData = res.data.map((item) => {
        return {
          id: item._id,
          customerName: item.user.firstname + " " + item.user.lastname,
          number: item.user.contact,
          totalprice: item.totalAmount,
          address: item.address,
          status: item.OrderStatus,
        };
      });
      setData(managedData);
    })
    .then((error) => console.log(error));
};
export const orderplaced = (id) => {
  debugger;

  axios
    .put(`http://localhost:3007/API/orders/${id}`)
    .then((res) => {
      debugger;
      console.log("placedorder   ", res.data);
    })
    .then((error) => console.log(error));
};
