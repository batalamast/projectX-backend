const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        categories: [{
            type: String
        }],
        drinks: [{
            type: Schema.Types.ObjectId,
            ref: "Drink"
        }],
        foods: [{
            type: Schema.Types.ObjectId,
            ref: "Food"
        }],
    },
    {
        timestamps: true,
    }
);

module.exports = model("Store", schema);