const initState = {
  auth: false,
  isOpen: false,
  isLoading: false,
  userInfo: [],
  profileModal: {
    birthdayModal: false,
    genderModal: false,
    locationModal: false,
    professionModal: false,
    interestModal: false,
    mottoModal: false,
    emailModal: false,
    socialModal: false,
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
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "SIGNIN_MODAL":
      return { ...state, isOpen: action.payload };
    case "BIRTHDAY_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          birthdayModal: action.payload,
        },
      };
    case "GENDER_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          genderModal: action.payload,
        },
      };
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
    case "INTEREST_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          interestModal: action.payload,
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
    case "EMAIL_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          emailModal: action.payload,
        },
      };
    case "SOCIAL_MODAL":
      return {
        ...state,
        profileModal: {
          ...initState.profileModal,
          socialModal: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
