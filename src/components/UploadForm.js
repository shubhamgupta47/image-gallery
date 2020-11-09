import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { beginAddPhoto } from "../actions/photos";

const UploadForm = ({ errors, dispatch, uploadSuccess }) => {
  const [photo, setPhoto] = useState(null);
  const [errorMsg, setErroMsg] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setErroMsg("Upload failed. Please try again.");
  }, [errors.uploadError]);

  useEffect(() => {
    setErroMsg(""); // reset error message on page load
  }, []);

  useEffect(() => {
    uploadSuccess && setUploading(false);
  }, [uploadSuccess]);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (photo) {
      setErroMsg("");
      setUploading(true);
      dispatch(beginAddPhoto(photo));
    }
  };

  return (
    <React.Fragment>
      {uploading && !errorMsg && (
        <div className="alert alert-secondary">Uploading... </div>
      )}
      {errorMsg ? (
        <p className="errorMsg centered-message">{errorMsg}</p>
      ) : (
        uploadSuccess &&
        !uploading && (
          <p className="successMsg centered-message">
            Photo uploaded successfully.
          </p>
        )
      )}
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Choose photo to upload</Form.Label>
          <Form.Control type="file" name="photo" onChange={handleOnChange} />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className={`${!photo ? "disabled submit-btn" : "submit-btn"}`}
          disabled={photo ? false : true}
        >
          Upload
        </Button>
      </Form>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {},
  uploadSuccess: state.uploadSuccess,
});

export default connect(mapStateToProps)(UploadForm);
