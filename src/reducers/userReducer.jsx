const initState = {
    auth: false,
    isOpen:false,
    userInfo:[]
}
const userReducer = (state=initState,action) => {
    switch (action.type){
        case "TESTING_REDUX":
            return {name:"dhonta"}
        case "SET_USER_STATE":
            return {userInfo:action.payload, auth:true}
        case "LOGOUT_USER":
            return {userInfo:action.payload, auth:false}
        case "SIGNIN_MODAL":
            return {...initState, isOpen: action.payload}
        default:
            return state;
    }
}
 
export default userReducer;