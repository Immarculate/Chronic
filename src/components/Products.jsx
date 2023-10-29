import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import Product from './Product';

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [cart, setCart] = useState([]);

  // Create an array of all product objects
  const allProducts = [
    { name: "Product 1", image: 'image-url-1', price: 10.99 },
    { name: "Product 2", image: 'image-url-2', price: 19.99 },
    { name: "Product 3", image: 'image-url-3', price: 7.49 },
    { name: "Product 4", image: 'image-url-4', price: 5.99 },
    { name: "Product 5", image: 'image-url-5', price: 14.99 },
    { name: "Product 6", image: 'image-url-6', price: 12.49 },
    { name: "Product 7", image: 'image-url-7', price: 8.99 },
    { name: "Product 8", image: 'image-url-8', price: 11.99 },
  ];

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  
  const productsToDisplay = showAll ? allProducts : allProducts.slice(0, 4);

  
  const toggleProducts = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className='mt-[50px]'>
      <Grid container justifyContent="center" spacing={4} className='mb-10'>
        {productsToDisplay.map((product, index) => (
          <Grid key={index}  item xs={12} sm={6} md={4} lg={3}>
            <Product className='prd_bx' product={product} />
          </Grid>
        ))}
      </Grid>
      <Button onClick={toggleProducts}>
        {showAll ? 'Show Less' : 'Show All'}
      </Button>
    </div>
  );
}

export default Products;
