// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foriegnKey: 'product_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foriegnKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
