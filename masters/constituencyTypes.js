// Party Full Name	Short Name	Party Flag	Party Symbol

const mongoose = require("mongoose");

const constituencyTypesSchema = new mongoose.Schema(
  {
    marathi: {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      short_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    },
    english: {
      name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      short_name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    },
    isHouse: {
      type: String,
      enum: ["Assembly", "Council"],
      default: "Assembly",
      trim: true,
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

const constituencyTypes = mongoose.model(
  "constituencyTypes",
  constituencyTypesSchema
);

module.exports = constituencyTypes;
