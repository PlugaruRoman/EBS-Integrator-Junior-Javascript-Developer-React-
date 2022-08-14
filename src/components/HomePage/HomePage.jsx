import React, { useContext } from 'react';
import appContext from 'context';
import styles from './HomePage.module.css';
import ProductItem from 'components/ProductItem/ProductItem';
import Categories from 'components/Categories/Categories';

const HomePage = () => {
  const { item } = useContext(appContext);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortPrice, setSortPrice] = React.useState(0);

  const vegetable = item.filter((el, index) => {
    return el.category.id === 'vegetables';
  });

  const grain = item.filter((el, index) => {
    return el.category.id === 'grain';
  });

  const meal = item.filter((el, index) => {
    return el.category.id === 'meal';
  });

  const lactose = item.filter((el, index) => {
    return el.category.id === 'lactose';
  });

  return (
    <div className={styles.homepage}>
      <h1 className={styles.content}>Our Products</h1>
      <Categories
        sortPrice={sortPrice}
        setSortPrice={(index) => setSortPrice(index)}
        value={categoryId}
        onClickCategory={(i) => setCategoryId(i)}
      />

      <div className={styles.products}>
        {!categoryId && sortPrice === 0
          ? item.map((obj, index) => (
              <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
            ))
          : ''}
        {categoryId === 0 && sortPrice === 1
          ? item
              .sort((a, b) => a.price - b.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 0 && sortPrice === 2
          ? item
              .sort((a, b) => b.price - a.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 1 && sortPrice === 0
          ? vegetable.map((obj, index) => (
              <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
            ))
          : ''}
        {categoryId === 1 && sortPrice === 1
          ? vegetable
              .sort((a, b) => a.price - b.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 1 && sortPrice === 2
          ? vegetable
              .sort((a, b) => b.price - a.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 2 && sortPrice === 0
          ? grain.map((obj, index) => (
              <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
            ))
          : ''}
        {categoryId === 2 && sortPrice === 1
          ? grain
              .sort((a, b) => a.price - b.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 2 && sortPrice === 2
          ? grain
              .sort((a, b) => b.price - a.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}

        {categoryId === 3 && sortPrice === 0
          ? meal.map((obj, index) => (
              <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
            ))
          : ''}
        {categoryId === 3 && sortPrice === 1
          ? meal
              .sort((a, b) => a.price - b.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 3 && sortPrice === 2
          ? meal
              .sort((a, b) => b.price - a.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 4 && sortPrice === 0
          ? lactose.map((obj, index) => (
              <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
            ))
          : ''}
        {categoryId === 4 && sortPrice === 1
          ? lactose
              .sort((a, b) => a.price - b.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
        {categoryId === 4 && sortPrice === 2
          ? lactose
              .sort((a, b) => b.price - a.price)
              .map((obj, index) => (
                <ProductItem key={index} name={obj.name} price={obj.price} category={obj.category} />
              ))
          : ''}
      </div>
    </div>
  );
};

export default HomePage;
