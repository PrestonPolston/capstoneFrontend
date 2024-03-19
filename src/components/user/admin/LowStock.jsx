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
  if (isError) return <div>Error while fetching the data data</div>;

  return (
    <div>
      <div style={{ fontSize: "22px", fontWeight: "bold", color: "#5B6270" }}>
        Low Stock (threshold: {lowStockThreshold})
      </div>
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
