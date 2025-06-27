import "./product.css"

const Product = ({ tree }) => {
  const { tree_title, tree_img, price } = tree || {};

  return (
    <div
      className="product-card"
      style={{
        backgroundImage: `url(${tree_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <div
        className="product-overlay"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          {tree_title || "Vineyard Reach"}
        </h2>
        <span
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#f5a623' }}>${price || '1099'}</span>
          <del
            style={{
              color: '#ccc',
              fontSize: '16px',
              marginTop: '5px',
            }}
          >
            ${price ? (price * 1.5).toFixed(2) : '659'}
          </del>
        </span>
      </div>
    </div>
  );
};

export default Product;
