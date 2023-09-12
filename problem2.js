function dotProduct(v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error('Vector dimensions must be the same');
  }

  let product = 0;
  for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
  }

  return product;
}
