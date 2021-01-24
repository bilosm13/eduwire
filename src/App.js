import React, { useState } from 'react';
//import FileUploader from './components/FileUploader';
import './App.css'; //centers form and other content on page

const App = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () =>{
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", selectedFile);

    //axios //this is for uploading your information to a specific address/server/website using axios
      //.post(UPLOAD_URL, formData)
      //.then((res) => {
        //alert("File Upload Success");
     // })
      //.catch((err) => alert("File Upload Error"));
  };

  return (
    <div className="App">
      <form>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        //FileUploader //this is a separate component that I can't get to work
          //onFileSelectSuccess={(file) => setSelectedFile(file)}
          //onFileSelectError={({ error }) => alert(error)}
        />

        <button onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}

export default App;
