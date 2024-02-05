import "./styles.css";

import { PropTypes } from 'prop-types';

const ProductCard = (props) => {
  return (
    <>
      <div className="Produto">
        <article>
          <span className="desconto">-30%</span>
          <figure>
            <img src={props.productImage} />
            <h3 className="nome">{props.productName}</h3>
            <p className="description">{props.productDescription}</p>
            <h3>{props.productPrice}</h3>
          </figure>
        </article>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  productImage: PropTypes.string,
  productName: PropTypes.string,
  productDescription: PropTypes.string,
  productPrice: PropTypes.string,
};

export default ProductCard;
