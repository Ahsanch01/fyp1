import axios from "axios";

export const getSales = (setData) => {
  axios
    .get(`http://localhost:3007/API/orders/sales`)
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
