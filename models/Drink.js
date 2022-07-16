const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        // brand: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "Brand",
        //     required: true,
        // }],
        stores: [{
            type: Schema.Types.ObjectId,
            ref: "Store",
            required: true,
        }],
    },
    {
        timestamps: true,
    }
);

module.exports = model("Drink", schema);