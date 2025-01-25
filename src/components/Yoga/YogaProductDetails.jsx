
import React,{useState} from 'react';
import Price from '../content/Price'; 
import Rating from '../content/Rating';
import Reviews from '../content/Reviews'; 
import { FormButton } from '../formCompo/FormButton'; 

const YogaProductDetails = ({ title, price, rating, brand, description, colors, specification }) => {

  const [selectedSize, setSelectedSize] = useState('S');
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    console.log("🚀 ~ handleSizeChange ~ handleSizeChange:")
  };

  const cardBodyStyle = {
    padding: '2rem',
  };

  const h2Style = {
    fontSize: '2rem',
    fontWeight: 'bold',
  };

  const badgeStyle = {
    backgroundColor: '#6c757d',
  };

  const btnStyle = {
    fontSize: '1.5rem',
    padding: '0.5rem',
    cursor: 'pointer',
  };

  return (
    <div className="col-lg-7 mt-5">
      <div className="card">
        <div className="card-body" style={cardBodyStyle}>
          <h1 className="h2" style={h2Style}>{title}</h1>
          <Price price={price} />
          <div className="py-2">
            <Rating rating={rating} />
            <span className="list-inline-item text-dark">
              <Reviews reviews={36} /> 
            </span>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <h6>Brand:</h6>
            </li>
            <li className="list-inline-item">
              <p className="text-muted">
                <strong>{brand}</strong>
              </p>
            </li>
          </ul>

          <h6>Description:</h6>
          <p>{description}</p>

          <ul className="list-inline">
            <li className="list-inline-item">
              <h6>Available Color :</h6>
            </li>
            <li className="list-inline-item">
              <p className="text-muted">
                <strong>{colors}</strong>
              </p>
            </li>
          </ul>

          <h6>Specification:</h6>
          <ul className="list-unstyled pb-3">
            {specification.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <form action="" method="GET">
            <input type="hidden" name="product-title" value={title} />
            <div className="row">
              <div className="col-auto">
                <ul className="list-inline pb-3">
                  <li className="list-inline-item">
                    Size :
                    <input type="hidden" name="product-size" id="product-size" value={selectedSize} />
                  </li>
                  {['S', 'M', 'L', 'XL'].map(size => (
                     <li className="list-inline-item" key={size}>
                     <FormButton
                       label={size}
                       style={{
                         padding: '3px 7px',
                         fontSize: '12px',
                         backgroundColor: selectedSize === size ? '#218838' : '#28a745',
                       }}
                       onClick={() => handleSizeChange(size)}
                     />
                   </li>
                  ))}
                </ul>
              </div>
              <div className="col-auto">
                <ul className="list-inline pb-3">
                  <li className="list-inline-item text-right">
                    Quantity
                    <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn btn-success"
                      id="btn-minus"
                      style={btnStyle}
                      onClick={() => {
                        const qtyElement = document.getElementById('var-value');
                        const currentValue = parseInt(qtyElement.innerText, 10);
                        if (currentValue > 1) {
                          qtyElement.innerText = currentValue - 1;
                        }
                      }}
                    >
                      -
                    </span>
                  </li>
                  <li className="list-inline-item">
                    <span className="badge bg-secondary" id="var-value" style={badgeStyle}>1</span>
                  </li>
                  <li className="list-inline-item">
                    <span
                      className="btn btn-success"
                      id="btn-plus"
                      style={btnStyle}
                      onClick={() => {
                        const qtyElement = document.getElementById('var-value');
                        const currentValue = parseInt(qtyElement.innerText, 10);
                        qtyElement.innerText = currentValue + 1;
                      }}
                    >
                      +
                    </span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col d-grid">
                <FormButton label="Buy" />
              </div>
              <div className="col d-grid">
                <FormButton label="Add To Cart" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YogaProductDetails;
