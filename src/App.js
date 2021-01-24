import React, { useState } from 'react';
//import FileUploader from './components/FileUploader';
import './App.css'; //centers content on page
import { Button } from 'atomize'; //if this throws an error re: styletron-react, install that manually
import logo from './logo.png';
import sitename from './sitename.png';

const App = () => {
  
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [pron, setPron] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () =>{
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("pronoun", pron);
    formData.append("file", selectedFile);

    //axios //this is for uploading your information to a specific address/server/website using axios
      //.post(UPLOAD_URL, formData)
      //.then((res) => {
        //alert("Submission Success");
     // })
      //.catch((err) => alert("Submission Error"));
  };

  return (
    <div className="App">
    <header className="App-header">
      <img src={sitename} className="App-logo" alt="eduwire" />
      <form>
        <input 
          type="text"
          id="first"
          value={fname}
          onChange={(e) => setfName(e.target.value)} 
        />
        <input 
          type="text"
          id="last"
          value={lname}
          onChange={(e) => setlName(e.target.value)} 
        />
        <br />
        <input 
          type="text"
          id="pronouns"
          value={pron}
          onChange={(e) => setPron(e.target.value)} 
        />
        <br />
      <input
        type="file"
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.files[0])}
        //FileUploader //this is a separate component that I can't get to work
          //onFileSelectSuccess={(file) => setSelectedFile(file)}
          //onFileSelectError={({ error }) => alert(error)}
        />
        <br />
        <button onClick={submitForm}>Submit</button>
      </form>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
