import React from 'react';
import appContext from 'context';
import styles from './CartProduct.module.css';

const CartProduct = ({ name, category, price }) => {
  const { cartItem, setCartItem, count, setCount } = React.useContext(appContext);

  const removeItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.name !== name));
    setCount(0);
  };
  const addToCart = (obj) => {
    setCartItem((prev) => prev.filter((item) => item.price !== obj));
    setCartItem([...cartItem, obj]);
    setCount(count + 1);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productItem}>
        <div className={styles.category}>Category : {category.name}</div>
        <div className={styles.name}>Name : {name}</div>
        <div className={styles.price}>Price : ${price}</div>
        <svg
          onClick={(id) => removeItem(price)}
          className={styles.closeButton}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.396 23.4C22.614 24.18 21.347 24.18 20.564 23.4L13.484 16.32L6.40401 23.4C5.62201 24.18 4.35401 24.18 3.57201 23.4C2.79001 22.61 2.79001 21.35 3.57201 20.56L10.652 13.48L3.57201 6.40004C2.79001 5.62004 2.79001 4.35004 3.57201 3.57004C4.35401 2.79004 5.62201 2.79004 6.40401 3.57004L13.484 10.65L20.564 3.57004C21.347 2.79004 22.614 2.79004 23.396 3.57004C24.179 4.35004 24.179 5.62004 23.396 6.40004L16.316 13.48L23.396 20.56C24.179 21.35 24.179 22.61 23.396 23.4ZM19.148 13.48L24.813 7.82004C26.376 6.26004 26.376 3.72004 24.813 2.16004C23.248 0.590044 20.712 0.590044 19.148 2.16004L13.484 7.82004L7.82001 2.16004C6.25701 0.590044 3.72101 0.590044 2.15601 2.16004C0.593015 3.72004 0.593015 6.26004 2.15601 7.82004L7.82001 13.48L2.15601 19.15C0.593015 20.71 0.593015 23.25 2.15601 24.81C3.72101 26.38 6.25701 26.38 7.82001 24.81L13.484 19.15L19.148 24.81C20.712 26.38 23.248 26.38 24.813 24.81C26.376 23.25 26.376 20.71 24.813 19.15L19.148 13.48Z"
            fill="black"
          />
        </svg>
        <div className={styles.actionMenu}>
          <img
            onClick={(prev) => removeItem({ price, name, category, count })}
            className={count !== 0 ? styles.button : styles.disabled}
            src="./img/remove.svg"
            alt="remove"
          />
          <span className={styles.select}>Select:{count}</span>
          <img
            onClick={(i) => addToCart({ price, name, category, count })}
            className={styles.button}
            src="./img/add.svg"
            alt="add"
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
