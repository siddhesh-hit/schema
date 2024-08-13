const mongoose = require("mongoose");

const sessionFieldSchema = new mongoose.Schema(
  {
    marathi: {
      name: {
        type: String,
        required: true,
      },
    },
    english: {
      name: {
        type: String,
        required: true,
      },
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
  { timestamps: true }
);

module.exports = mongoose.model("SessionField", sessionFieldSchema);
