import React from 'react';
import { Link } from 'react-router-dom';
import appContext from 'context';
import styles from './Header.module.css';

const Header = () => {
  const { cartItem } = React.useContext(appContext);
  const sumPrice = cartItem.reduce((sum, obj) => +obj.price + +sum, 0);
  const roundNum = Math.round(sumPrice * 100) / 100;

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/" className={styles.left}>
          <img src="./img/logo.png" alt="logo" />
        </Link>
        <div className={styles.totalPrice}>Total price:{roundNum} $</div>
        <Link to="/cart" className={styles.right}>
          <img className={styles.rightimg} src="./img/cart.png" alt="cart" />
          <div className={styles.cartInfo}>
            <div className={styles.cart}>Cart</div>
            <span className={styles.total}>{cartItem.length}</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
