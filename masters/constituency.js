// Constituency Name	मतदारसंघाचे नाव	Assembly Number

const mongoose = require("mongoose");

const constituencySchema = new mongoose.Schema(
  {
    council: {
      constituency_name: {
        type: String,
      },
      constituency_type: {
        type: mongoose.Schema.Types.ObjectId,ref: "ConstituencyTypes",
      },
      constituency_subtype: {
        type: String,
      },
      year: {
        type: Date,
      },
    },
    assembly: {
      constituency_name: {
        type: String,
      },
      assembly_number: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assembly",
        default: null,
      },
      year: {
        type: Date,
      },
      constituency_type: {
        type: mongoose.Schema.Types.ObjectId,ref: "ConstituencyTypes",
      },
    },
    isHouse: {
      type: String,
      enum: ["Assembly", "Council"],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
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

const Constituency = mongoose.model("Constituency", constituencySchema);

module.exports = Constituency;
