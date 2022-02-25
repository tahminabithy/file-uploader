import axios from 'axios';
import React, { useState } from 'react';

const FileUpload = () => {
    const [files,setfiles] = useState(null);
    const handleUpload=(e) =>{
        setfiles(e.target.files[0])
    }
    const onSubmit=e=>{
        e.preventDefault();
        console.log('hi');
        const data = new FormData();
        data.append('file' , files)
     axios.post('http://localhost:5000/upload' , data)
     .then((e) => {
         console.log('success');
     })
    }
    return (
        
            <form method='post' onSubmit={onSubmit} action="">
              <div className='mt-4'>
                <label>Upload your file</label><br />
                <input className='mx-3' onChange={handleUpload} type="file" />
                <button className="btn btn-success ms-2">upload</button>
              </div>
              
            </form>
            
    );
};

export default FileUpload;