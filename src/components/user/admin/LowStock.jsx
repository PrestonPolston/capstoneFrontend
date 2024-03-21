import { useGetProductsQuery } from "../../../api/metalApi";
const LowStock = () => {
  const {
    data: products = [],
    isError,
    isLoading,
    isSuccess,
    isUninitialized,
  } = useGetProductsQuery();

  const lowStockThreshold = 10;
  const lowStockProducts = products.filter(
    (product) => product.quantity < lowStockThreshold
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error while fetching the data data data</div>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "80vh",
        overflowY: "auto",
        marginTop: 10,
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>Low Stock:</div>
      {lowStockProducts.map((product, index) => (
        <div key={product.id}>
          <div>Product: {product.name}</div>
          <div style={{ marginTop: "5px" }}>
            Description: {product.description}
          </div>
          <div
            style={{
              marginTop: "10px",
              fontWeight: "bold",
              backgroundColor: "red",
            }}
          >
            Quantity: {product.quantity}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LowStock;
