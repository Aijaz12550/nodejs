const { Schema, model } = require("mongoose");
const bcryptjs = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [6, 'Too few eggs'],
        max: 12

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exist"],
        validate: {
          validator: function (email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          },
          message: (props) => `${props.value} is not a valid Email!`,
        },
      },
      password: {
        type: String,
        required: [true, "Password required!"],
        trim: true,
        minlength: 5,
        maxlength: [20, "Maximum length of password is 20 characters"],
      },
})


userSchema.pre("save", function (next) {
    const user = this;

    if (user.isModified('password')) {
        const salt = bcryptjs.genSaltSync(10);
        const hash = bcryptjs.hashSync(user.password, salt);

        user.password = hash;
    }

    next();
})

const user = model("users",userSchema)

module.exports = user