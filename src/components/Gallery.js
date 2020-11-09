/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { startLoadPhotos } from "../actions/photos";
import Photo from "./Photo";

const Gallery = ({ errors, photos, loading, dispatch }) => {
  useEffect(() => {
    dispatch(startLoadPhotos());
  }, []);

  return (
    <div className="photos-list">
      {/* Show Error */}
      {errors && errors.fetchingError && !photos.length && (
        <p className="errorMsg centered-message">
          Something doesn't seem right. Please try later.
          <span>({errors.fetchingError.status})</span>
        </p>
      )}
      {/* If still loading... */}
      {loading && !errors.fetchingError && (
        <div className="loading-msg centered-message">Loading...</div>
      )}
      {/* If not loading, and either data or no data */}
      {!loading && !photos.length ? (
        <div className="alert alert-secondary">No photo available. </div>
      ) : (
        photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    photos: state.gallery.photos || [],
    loading: state.gallery.loading,
    errors: state.errors || {},
  };
};

export default connect(mapStateToProps)(Gallery);
