import React from 'react';
import appContext from 'context';
import styles from './ProductItem.module.css';

const ProductItem = ({ name, category, price }) => {
  const { cartItem, setCartItem, count, setCount } = React.useContext(appContext);
  const [personalCount, setPersonalCount] = React.useState(0);

  const addToCart = (obj) => {
    setCartItem([...cartItem, obj]);
    setCount(count + 1);
    setPersonalCount(personalCount + 1);
  };

  const removeItem = (id) => {
    setCartItem((prev) => prev.filter((item) => item.name !== name));
    setCount(0);
    setPersonalCount(0);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productItem}>
        <div className={styles.category}>Category : {category.name}</div>
        <div className={styles.name}>Name : {name}</div>
        <div className={styles.price}>Price : ${price}</div>
        <div className={styles.actionMenu}>
          <img
            onClick={(id) => removeItem({ price, name, category, count })}
            className={personalCount !== 0 ? styles.button : styles.disabled}
            src="./img/remove.svg"
            alt="remove"
          />
          <span className={styles.select}>Select:{personalCount}</span>
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

export default ProductItem;
