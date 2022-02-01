import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './FileUpload.styles.css'
import PropTypes from 'prop-types';


const FileUpload = ({ onDrop, text='Upload File', dragActiveText='Upload File' }) => {
  const handleDrop = useCallback(acceptedFiles => {
    if (!onDrop) {
      console.warn('FileUpload: onDrop is not defined')
      return
    }
    onDrop(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop: handleDrop})

  return (
    <div {...getRootProps()} className={`w-full border-2 border-dashed border-gray-300 rounded-lg p-4 transition-opacity duration-150 ease-in-out bg-gray-700 ${isDragActive ? 'opacity-80' : ''}`}>
      <input {...getInputProps()} />
      <div className='flex justify-center items-center text-gray-300'>
        {
          isDragActive ?
            <div>{text}</div> :
            <div>{dragActiveText}</div>
        }
      </div>
    </div>
  )
};

FileUpload.PropTypes = {
  onDrop: PropTypes.func.isRequired,
  text: PropTypes.node,
  dragActiveText: PropTypes.node,
}

FileUpload.defaultProps = {
  text: 'Upload File',
  dragActiveText: 'Upload File'
}

export default FileUpload;
