import mongoose from 'mongoose'

//review schema

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number, //individual ratings
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
//product schema
const productSchema = mongoose.Schema(
  {
    user: {
      //which user has created the products
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // reference the user model
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number, //average of all the user ratings for that particular product
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true, // to add created and updated timestamps
  },
)

//Now we have to create a model using the schema defined above

const Product = mongoose.model('Product', productSchema)

export default Product
