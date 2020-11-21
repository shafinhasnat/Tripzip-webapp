const initState = {
  auth: false,
  isOpen: false,
  userInfo: [],
  profileModal: {
    locationModal: false,
    professionModal: false,
    mottoModal: false,
  },
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "TESTING_REDUX":
      return { name: "dhonta" };
    case "SET_USER_STATE":
      return { ...state, userInfo: action.payload, auth: true };
    case "LOGOUT_USER":
      return { userInfo: action.payload, auth: false };
    case "SIGNIN_MODAL":
      return { ...state, isOpen: action.payload };
    case "LOCATION_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          locationModal: action.payload,
        },
      };
    case "PROFESSION_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          professionModal: action.payload,
        },
      };
    case "MOTTO_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          mottoModal: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
