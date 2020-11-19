import axios from "axios";
import fire from './../fire';

export const signinModal = (payload) =>{
    return{type:"SIGNIN_MODAL", payload}
}
export const fetchUserInfo =(response)=>{
    return(dispatch)=>{
        try{
            console.log(response);
            const { id, name, picture, gender, birthday, email } = response;
            const userData = {uid:id, name, gender, birthday, email, image:picture.data.url}
            axios.post("http://127.0.0.1:5000/signin", userData).then((res) => {
            });
            axios.get(`http://127.0.0.1:5000/u/${id}`).then(res=>{dispatch(setUserState(res.data))})
        }catch{console.log("NOT DONE")}
        
    }
}
export const setUserState = (payload) =>{
    return{type:"SET_USER_STATE",payload}
} 
export const logoutState = (payload) =>{
    return{type:"LOGOUT_USER",payload}
} 

export const firebaseFacebook=()=>{
    return(dispatch)=>{
        try{
            fire.auth().onAuthStateChanged(user=>{
                const userData = {uid: user.uid, name: user.displayName, email: user.email, image: `${user.photoURL}?height=500`}
                console.log("---------->",user)
                dispatch(setUserState(userData))
            }).catch((error)=>{console.log("error->", error)})
        }catch{console.log("error")}
    }
}
// https://graph.facebook.com/3512084825574234?fields=id,name&access_token=EAAj7TMwb7D8BAJRRFf2jAVLJj8cH0ohxvC6TVTLZCX0kKZCAkq0WwXUQgyqXdmnAaLLv22ZArh2gWgX7gb88CNnZC4MIvaUIlwj0C8PfSEZBeE12qCw3nk3MzrwoqgPiuYVuAolZAyBhv5sZAwqZBpxwKLuxYxJP5TZB4EgE4RknxdHlzRKfZBNnWWp2cA5ZAwHY1gZD
export const logout=()=>{
    return(dispatch)=>{
        fire.auth().signOut().then(res=>{
            const userData = {uid: undefined, name: undefined, email: undefined, image: undefined}
            console.log("logout action")
            dispatch(logoutState(userData))
        })
    }
}