/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { startLoadPhotos } from "../actions/photos";
import Photo from "./Photo";

const Gallery = ({ errors, photos, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoadPhotos());
  }, []);

  useEffect(() => {
    if (
      photos.length > 0 ||
      (errors.fetchingError && errors.fetchingError.data)
    ) {
      setIsLoading(false);
    }
  }, [photos, errors.fetchingError]);

  return (
    <div className="photos-list">
      {errors && errors.fetchingError && !photos.length && (
        <p className="errorMsg centered-message">
          Something doesn't seem right. Please try later.
          <span>({errors.fetchingError.status})</span>
        </p>
      )}
      {isLoading ? (
        <div className="loading-msg centered-message">Loading...</div>
      ) : (
        photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.photos || [],
    errors: state.errors || {},
  };
};

export default connect(mapStateToProps)(Gallery);
