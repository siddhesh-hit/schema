const mongoose = require("mongoose");

const portalBranchSchema = new mongoose.Schema(
  {
    marathi: {
      name: {
        type: String,
      },
    },
    english: {
      name: {
        type: String,
      },
    },
    for: {
      type: String,
      enum: ["Portal", "CMS"],
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

module.exports = mongoose.model("PortalBranch", portalBranchSchema);
