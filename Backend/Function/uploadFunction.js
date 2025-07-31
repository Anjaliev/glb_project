import uploadModel from "../Schema/uploadSchema.js";

export const fileCreate = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(401).json({ message: "No file uploaded", success: true });
    }
    const newFile = {
      file_name: file.originalname,
      content_type: file.mimetype,
    };

    await uploadModel.create(newFile);
    res.status(201).json({ message: "Uploaded Successfully", success: true });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

export const fileGet = async (req, res) => {
  try {
    const getData = await uploadModel.find();
    res.status(201).json({ message: getData, success: true });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};

export const fileGetId = async (req, res) => {
  try {
    const getData = await uploadModel.findById(req.params.id);
    res.status(201).json({ message: getData, success: true });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
