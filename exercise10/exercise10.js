const order = {};
const order_city = order?.customer?.address?.city;
if (order_city == undefined) {
  console.log("City is required");
}