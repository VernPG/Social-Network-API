const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => new Date(date).toLocaleString(),
    }

})


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => new Date(date).toLocaleString(),
    },
    username:{
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
    id: false,
}
);
thoughtSchema
  .virtual("reactionSchema")

  .get(function () {
    return this.reactions.length;
  });

  const Thought = model("Thought", thoughtSchema);

  module.exports = Thought;