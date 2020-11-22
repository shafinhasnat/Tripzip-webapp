import axios from "axios";
import fire from "./../fire";
import Cookies from "js-cookie";

export const signinModal = (payload) => {
  return { type: "SIGNIN_MODAL", payload };
};
export const setUserState = (payload) => {
  return { type: "SET_USER_STATE", payload };
};
export const logoutState = (payload) => {
  return { type: "LOGOUT_USER", payload };
};
export const loading = (payload) => {
  return { type: "LOADING", payload };
};
export const firebaseFacebook = () => {
  return (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(loading(true));
        const accessToken = Cookies.get("accessToken");
        axios
          .get(
            `https://graph.facebook.com/${user.providerData[0].uid}?fields=picture.height(400)&type=large&access_token=${accessToken}`
          )
          .then((res) => {
            // console.log(res.data.picture.data.url);
            const _image = res.data.picture.data.url;
            const userData = {
              uid: user.providerData[0].uid,
              name: user.providerData[0].displayName,
              email: user.providerData[0].email,
              image: _image,
              birthday: Cookies.get("birthday"),
              gender: Cookies.get("gender"),
            };
            // console.log("----555------>", userData);
            axios.post("http://127.0.0.1:5000/signin", userData).then((res) => {
              // console.log(res);
            });
            axios
              .get(`http://127.0.0.1:5000/u/${user.providerData[0].uid}`)
              .then((res) => {
                // console.log("get===>", res.data);
                dispatch(setUserState(res.data));
                dispatch(loading(false));
              });
          });
      }
      // dispatch(loading(false));
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    fire
      .auth()
      .signOut()
      .then((res) => {
        const userData = {
          uid: undefined,
          name: undefined,
          email: undefined,
          image: undefined,
        };
        console.log("logout action");
        dispatch(logoutState(userData));
      });
  };
};

export const modal = (a, payload) => {
  switch (a) {
    case "birthday":
      return { type: "BIRTHDAY_MODAL", payload };
    case "gender":
      return { type: "GENDER_MODAL", payload };
    case "location":
      return { type: "LOCATION_MODAL", payload };
    case "profession":
      return { type: "PROFESSION_MODAL", payload };
    case "interest":
      return { type: "INTEREST_MODAL", payload };
    case "motto":
      return { type: "MOTTO_MODAL", payload };
    case "email":
      return { type: "EMAIL_MODAL", payload };
    case "social":
      return { type: "SOCIAL_MODAL", payload };
  }
};
export const putData = () => {};
