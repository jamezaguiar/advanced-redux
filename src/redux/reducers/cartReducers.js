export const addToCart = (state, action) => {
  const { product } = action.payload;
  const findProduct = state.products.find(
    searchProduct => searchProduct.id === product.id
  );

  if (findProduct) {
    findProduct.quantity++;
    findProduct.total = findProduct.quantity * findProduct.price;
    return;
  }

  state.products.push({ ...product, quantity: 1, total: product.price });
};

export const incrementProductQuantity = (state, action) => {
  const { productId } = action.payload;
  const findProduct = state.products.find(product => product.id === productId);
  findProduct.quantity++;
  findProduct.total = findProduct.quantity * findProduct.price;
};

export const decrementProductQuantity = (state, action) => {
  const { productId } = action.payload;
  const findProduct = state.products.find(product => product.id === productId);
  findProduct.quantity--;
  findProduct.total = findProduct.quantity * findProduct.price;
};

export const toggleShowCart = state => {
  state.showCart = !state.showCart;
};
