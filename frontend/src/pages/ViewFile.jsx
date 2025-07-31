import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ViewFile = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/file/file-get");
      setFiles(res.data.message);
    } catch (error) {
      console.error("Error fetching files", error);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold mb-6">Uploaded GLB Files</h2>
      <div className="grid gap-4 w-full max-w-xl">
        {files.map((file, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded shadow flex justify-between items-center cursor-pointer hover:bg-gray-100"
            onClick={() => navigate(`/model/${file.file_name}`)}
          >
            <span>{file.file_name}</span>
            <span className="text-sm text-gray-500">View 3D</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFile;
