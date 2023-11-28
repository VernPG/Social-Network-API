const { Schema, model, Types } = require("mongoose");

const reactionCount = new Schema({
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
        get: (date) => timeSince(date),
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
        get: (date) => timeSince(date),
    },
    username:{
        type: String,
        required: truw,
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
  .virtual("reactionCount")

  .get(function () {
    return this.reactions.length;
  });

  const Thought = model("Thought", thoughtSchema);

  module.exports = Thought;