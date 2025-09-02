const { Schema, model } = require("mongoose");


const toolTechnologySchema = new Schema(
    {
        name: { type: String, required: true },
        exp: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

const ToolTechnology = model("ToolTechnology", toolTechnologySchema);
module.exports = ToolTechnology;