// Assembly Number	Assembly Name	Start Date	End Date	Current Assembly

const mongoose = require("mongoose");

const assemblySchema = new mongoose.Schema(
  {
    assembly_number: {
      type: String,
      required: true,
    },
    assembly_name: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
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

const Assembly = mongoose.model("Assembly", assemblySchema);

module.exports = Assembly;
