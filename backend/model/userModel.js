import mongoose from 'mongoose'

//user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //it needs to unique
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, //when an user registers, they shouldn't be admin.
    },
  },
  {
    timestamps: true, // to add created and updated timestamps
  },
)

//Now we have to create a model using the schema defined above

const User = mongoose.model('User', userSchema)

export default User
