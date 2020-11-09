const initialState = {
  photos: [],
  loading: true,
};

const photosReducer = (state = initialState, action) => {
  const { type, photos } = action;
  switch (type) {
    case "LOAD_PHOTOS":
      return { ...state, photos, loading: false };
    default:
      return state;
  }
};

export default photosReducer;
