import React from 'react';
import appContext from 'context';
import styles from './Categories.module.css';
import Sort from 'components/Sort/Sort';

const Categories = ({ value, onClickCategory, sortPrice, setSortPrice }) => {
  const { categories } = React.useContext(appContext);

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((categoryName, i) => (
          <li onClick={() => onClickCategory(i)} key={i} className={value === i ? styles.active : styles.item}>
            {categoryName.name}
          </li>
        ))}
      </ul>
      <Sort sortPrice={sortPrice} setSortPrice={(index) => setSortPrice(index)} />
    </div>
  );
};

export default Categories;
