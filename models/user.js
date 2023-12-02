const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /\w+@\w+\.\w{2,10}/ 
      ]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought",
    }],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
userSchema
  .virtual("friendSchema")
  .get(function () {
    return this.friends.length;
  });

const User = model("User", userSchema);

module.exports = User;
