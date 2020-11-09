const uploadReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case "UPLOAD_PHOTOS_SUCCESS":
      return true;
    default:
      return state;
  }
};

export default uploadReducer;
