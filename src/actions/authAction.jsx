import axios from "axios";
import fire from "./../fire";
import Cookies from "js-cookie";

export const signinModal = (payload) => {
  return { type: "SIGNIN_MODAL", payload };
};
export const fetchUserInfo = (response) => {
  return (dispatch) => {
    try {
      console.log(response);
      const { id, name, picture, gender, birthday, email } = response;
      const userData = {
        uid: id,
        name,
        gender,
        birthday,
        email,
        image: picture.data.url,
      };
      axios.post("http://127.0.0.1:5000/signin", userData).then((res) => {});
      axios.get(`http://127.0.0.1:5000/u/${id}`).then((res) => {
        dispatch(setUserState(res.data));
      });
    } catch {
      console.log("NOT DONE");
    }
  };
};
export const setUserState = (payload) => {
  return { type: "SET_USER_STATE", payload };
};
export const logoutState = (payload) => {
  return { type: "LOGOUT_USER", payload };
};

export const firebaseFacebook = () => {
  return (dispatch) => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
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
              });
          });
      }
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
