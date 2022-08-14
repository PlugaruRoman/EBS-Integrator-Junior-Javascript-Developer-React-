import React, { useContext } from 'react';
import appContext from 'context';
import styles from './Cart.module.css';

import CartProduct from 'components/CartProduct/CartProduct';

const Cart = () => {
  const { cartItem } = useContext(appContext);

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.content}>Our Cart Products</h1>
      <div className={styles.products}>
        {!cartItem
          ? []
          : cartItem.map((el, index) => (
              <CartProduct key={index} name={el.name} price={el.price} category={el.category} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
