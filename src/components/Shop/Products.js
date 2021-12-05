import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={1}
          title="My First Book"
          price={6}
          description="This first book i ever wrote"
        />
        <ProductItem
          id={2}
          title="My Second Book"
          price={5}
          description="The second book i ever wrote"
        />
      </ul>
    </section>
  );
};

export default Products;
