const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    keywords: {
      type: String,
      required: [true, "Keywords are required."],
    },
    url: {
      type: String,
      required: [true, "URL is required."],
      unique: true,
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

const Seo = mongoose.model("Seo", seoSchema);

module.exports = Seo;
