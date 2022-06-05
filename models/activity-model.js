const mongoose = require("mongoose");
const { Schema } = mongoose;

const activitySchema = new Schema({
    title: {
        type: String,
        required: [true, "A title is required."],
        minlength: [4, "Minimum length for the title is 4 characters."]
    },
    link: {
        type: String,
        required: [true, "A link is required."],
        minlength: [1, "Minimum length for the link is 1 character."]
    },
    type: {
        type: String,
        required: [true, "A type is required"]
    }

});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;