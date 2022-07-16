const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['admin', 'owner', 'user'],
            default: 'user'
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", schema);