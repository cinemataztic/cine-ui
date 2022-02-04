import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './FileUpload.styles.css'
import PropTypes from 'prop-types';


const FileUpload = ({ onDrop, text='Upload File', dragActiveText='Upload File', dragRejectText='Invalid File', acceptedFileTypes }) => {
  const handleDrop = useCallback(acceptedFiles => {
    if (!onDrop) {
      console.warn('FileUpload: onDrop is not defined')
      return
    }
    onDrop(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    onDrop: handleDrop,
    accept: acceptedFileTypes
  })

  const DropzoneContent = () => {
    if (isDragReject) {
      return <div>{dragRejectText}</div>
    }

    if (isDragActive) {
      return <div>{dragActiveText}</div>
    }

    return <div>{text}</div>
  }

  let borderColor = 'border-secondary'
  if (isDragActive) {
    borderColor = 'border-primary'
  }
  if (isDragReject) {
    borderColor = 'border-danger'
  }

  return (
    <div {...getRootProps()} className={`w-full border-3 border-dashed ${borderColor} rounded-lg p-4 transition duration-150 ease-in-out`}>
      <input {...getInputProps()} />
      <div className={`flex justify-center items-center text-default`}>
        <DropzoneContent />
      </div>
    </div>
  )
};

FileUpload.PropTypes = {
  onDrop: PropTypes.func.isRequired,
  text: PropTypes.node,
  dragActiveText: PropTypes.node,
  acceptedFileTypes: PropTypes.string
}

FileUpload.defaultProps = {
  text: 'Upload File',
  dragActiveText: 'Upload File',
  dragRejectText: 'Invalid File',
}

export default FileUpload;
