import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import appContext from 'context';
import styles from './styles.module.css';
import Header from 'components/Header/Header';
import HomePage from 'components/HomePage/HomePage';
import Cart from 'components/Cart/Cart';

const App = () => {
  const [item, setItem] = React.useState([]);
  const [cartItem, setCartItem] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    async function fetchData() {
      try {
        await fetch('http://localhost:3001/api/products/')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return setItem(data);
          });

        await fetch(`http://localhost:3001/api/product/categories/`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return setCategories(data);
          });
      } catch (error) {
        alert('error');
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <appContext.Provider
        value={{
          item,
          cartItem,
          setCartItem,
          categories,
          setCategories,
          count,
          setCount,
        }}
      >
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            <Route path={'/cart'}>
              <Cart />
            </Route>
            <Route path={'/'}>
              <HomePage />
            </Route>
          </Switch>
        </div>
      </appContext.Provider>
    </BrowserRouter>
  );
};

export default App;
