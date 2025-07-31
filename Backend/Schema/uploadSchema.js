import { Schema, model } from "mongoose";

const uploadSchema = Schema({
  file_name: {
    type: String,
  },
  content_type: {
    type: String,
  },
  upload_date: {
    type: Date,
    default: Date.now,
  },
});

const uploadModel = model("Uploads", uploadSchema);

export default uploadModel;
