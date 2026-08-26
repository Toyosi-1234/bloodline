const mongoose =
    require("mongoose");

const bloodschema = new
    mongoose.Schema(
        {
            donor_name: {
                type: String
            },
            phone_number: {
                type: String
            },
            blood_group: {
                type: String,
                enum: ["A", "B", "AB", "O"],
            },
            rhesus_factor: {
                type: String,
                enum: ["Positive", "Negative"],
            },
            has_donated_before: { type: Boolean },
            health_status: { type: String },
        },
        { timestamps: true, }
    );

module.exports =
    mongoose.model("Blood",
        bloodschema);