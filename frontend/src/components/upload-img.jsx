import React,{ useEffect,useState } from 'react'
import Button from '@mui/material/Button';

// Import React FilePond
import { FilePond,registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation,FilePondPluginImagePreview)

const uploadImg = async (file) => {
  const formData = new FormData()
  formData.append("file_uploaded",file)
  try {
    const response = await fetch('http://127.0.0.1:8000/api/upload/',{
      method: 'POST',
      body: formData,
    });

    // Handle the response
    if (response.ok) {
      // Image upload successful
      console.log('Image uploaded successfully!');
    } else {
      // Image upload failed
      console.log('Image upload failed.');
    }
  } catch (error) {
    console.error('Error uploading image:',error);
  }

  console.log(files[0]?.file)
}

function UploadImg() {
  const [files,setFiles] = useState([])

  // useEffect(() => {
  //   console.log(files[0]?.file)
  // },[files])
  return <div>
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={false}
      maxFiles={1}
      name="files" /* sets the file input name, it's filepond by default */
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
    <Button variant='contained' onClick={() => uploadImg(files[0]?.file)}>Upload</Button>
  </div>
}


export default UploadImg