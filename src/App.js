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
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = () =>{
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("pronoun", pron);
    formData.append("q1", q1);
    formData.append("q2", q2);
    formData.append("q3", q3);
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
      <br />
      <em>create your profile</em>
      <form className="Form">
        <ul>
          <ul>
            <input 
              type="text"
              id="first"
              placeholder="First Name"
              value={fname}
              onChange={(e) => setfName(e.target.value)} 
            />
            &nbsp;&nbsp;
            <input 
              type="text"
              id="last"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => setlName(e.target.value)} 
            />
          </ul>
          <ul>
            <input 
              type="text"
              id="pronouns"
              placeholder="Pronouns"
              value={pron}
              onChange={(e) => setPron(e.target.value)} 
            />
          </ul>
          <ul>
            <input 
              type="text"
              id="q2"
              placeholder="Favorite Beverage"
              value={q2}
              onChange={(e) => setQ2(e.target.value)} 
            />
          </ul>
          <ul>
            <input 
              type="text"
              id="q3"
              placeholder="Favorite Song"
              value={q3}
              onChange={(e) => setQ3(e.target.value)} 
            />
          </ul>
          <p>
          <ul>
            <textarea 
              type="text"
              id="q1"
              placeholder="Major and Career Goals"
              value={q1}
              onChange={(e) => setQ1(e.target.value)} 
            />
          </ul>
          </p>
          <ul>
            <input
              type="file"
              id="choosefile"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
              //FileUploader //this is a separate component that I can't get to work
                //onFileSelectSuccess={(file) => setSelectedFile(file)}
                //onFileSelectError={({ error }) => alert(error)}
              />
          </ul>
        </ul>
        <button onClick={submitForm}>Submit</button>
      </form>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
