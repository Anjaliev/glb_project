import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const UploadFiles = async (e) => {
    e.preventDefault();
    if (!file) {
      setMsg("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/file/file-create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMsg("Upload Success");
      setTimeout(() => navigate("/view"), 1000);
    } catch (error) {
      setMsg("Upload Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Upload GLB File</h2>
        <form onSubmit={UploadFiles} className="space-y-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".glb"
            className="block w-full text-sm border border-gray-300 rounded p-2"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Upload
          </button>
        </form>
        {msg && <p className="mt-4 text-center text-sm text-gray-700">{msg}</p>}
      </div>
    </div>
  );
};

export default UploadForm;
