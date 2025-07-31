import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadForm from "./pages/UploadForm";
import ViewFile from "./pages/ViewFile";
import ModelViewer from "./pages/ModelViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadForm />} />
        <Route path="/view" element={<ViewFile />} />
        <Route path="/model/:filename" element={<ModelViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
