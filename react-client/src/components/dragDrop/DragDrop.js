import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from 'axios';

class DragDrop extends Component {

  constructor() {
    super()
    this.state = {
      files: [],
      loaded: 0
    }
  }

  onDrop(files) {
    // POST to a test endpoint for demo purposes
    /*const req = request.post('http://localhost:8080');

    files.forEach(file => {
      req.attach(file.name, file);
    });

    req.end();*/
    this.setState({files});
  } 
  
  onCancel() {
    this.setState({
      files: []
    });
  }

  upload() {
    let data = new FormData();
    
    if(this.state.files.length > 0 ) {

      const map = this.state.files.map((cur, idx, arr) => {
        return {f : cur, n: `${idx}file`}
      })

      console.log(this.state.files[0])

      data.append('file', this.state.files[0])

      axios
      .post('http://localhost:8080/upload', data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
          })
        },
      })
      .then(res => {
        console.log(res.statusText)
      })


    } else console.log('dsadas');
  }

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ))

    return (
      <section style={{paddingTop: 20}}>
        <Dropzone 
          onDrop={this.onDrop.bind(this)}
          onFileDialogCancel={this.onCancel.bind(this)}
        >
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                style={baseStyle}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
        <button onClick={()=> {this.upload()}}>Upload</button>
        <div> {Math.round(this.state.loaded,2) } %</div>
      </section>
      
    );
  }
}

const baseStyle = {
  width: 200,
  height: 200,
  margin: 'auto',
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
};
const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#eee'
};
const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#c66',
  backgroundColor: '#eee'
};

export default DragDrop;