import React from 'react';
import Layout from '../../components/layout/Layout';
import products from '../../utils/products.json';
import ProductList from '../../components/productList/ProductList';
import { useParams } from 'react-router-dom';

function Category() {
  const { categoryName } = useParams();

  const category = products[categoryName];
  const items = category ? category.items : [];

  return (
    <Layout>
      <div className="container-fluid container-min-max-width">
        <h2>{category && category.name}</h2>
        <ProductList products={items} />
      </div>
    </Layout>
  );
}

export default Category;
