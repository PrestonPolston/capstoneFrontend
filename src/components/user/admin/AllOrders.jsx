import { useGetAllOrdersQuery } from "../../../api/metalApi";

const AllOrders = () => {
  const {
    data: orders,
    isError,
    isLoading,
    isSuccess,
    isUninitialized,
  } = useGetAllOrdersQuery();

  const ordersStyle = {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    marginTop: "10px",
  };

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (isLoading) {
    return <h2>Loading orders...</h2>;
  }

  if (isError) {
    return <h2>Error fetching orders!!!!</h2>;
  }

  if (isSuccess) {
    return (
      <div style={ordersStyle}>
        {orders.map((order, index) => {
          const createdAtFormatted = formatDate(order.createdAt);

          return (
            <div>
              <div key={index}>
                <h2>Order: {order.orderNumber}</h2>
                <p>Total: {`$${order.totalPrice}`}</p>
                <p>Date: {createdAtFormatted}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (isUninitialized) {
    return <h2>No orders to display!!!!</h2>;
  }

  return null;
};

export default AllOrders;
