const mongoose = require("mongoose");

const MemberNameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String },
    id: { type: Number },
    profile: { type: Object },
    assembly_journey: [
      {
        house: {
          type: String,
          enum: ["Assembly", "Council"],
          default: "Assembly",
        },
        party: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "PoliticalParty",
        },
        constituency: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Constituency",
        },
        district: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "District",
        },
        assembly: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Assembly",
        },
        designation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Designation",
        },
        ministry: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ministry",
        },
        from_year: {
          type: Date,
        },
        to_year: {
          type: Date,
        },
      },
    ],
    council_journey: [
      {
        house: {
          type: String,
          enum: ["Assembly", "Council"],
          default: "Council",
        },
        party: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "PoliticalParty",
        },
        constituency: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Constituency",
        },
        designation: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Designation",
        },
        ministry: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ministry",
        },
        from_year: {
          type: Date,
        },
        to_year: {
          type: Date,
        },
      },
    ],
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Archived"],
      default: "Pending",
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MemberName", MemberNameSchema);
