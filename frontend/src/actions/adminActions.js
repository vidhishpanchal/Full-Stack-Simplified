import axios from "axios";
import {
    ADMIN_ERROR,
    ADMIN_LOADING,
    ADMIN_LOGIN,
    ADMIN_USERS
} from "../constants/adminConstants";

export const adminLogin = (email,password) => async (dispatch) => {
  try {
    dispatch({
        type:ADMIN_LOADING,
        payload:{}
    })
    const { data } = await axios.post(`/admin/adminLogin/`,{email,password});
    if(!data.data) {
        dispatch({
            type: ADMIN_ERROR,
            payload: {}
        })
        return;
    } else {
        dispatch({
            type: ADMIN_LOGIN,
            payload: data,
          });
    }
  } catch (error) {
      dispatch({
        type: ADMIN_ERROR,
        payload: error
      })
  }
};

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    const token = getState().admin.adminDetails.token
    console.log(token)
    const headers = {authorization: `Bearer ${token}`}
    const  {data} = await axios.get('/admin/getAllStudents',{headers});
    if(data.data) {
      dispatch({
        type: ADMIN_USERS,
        payload: data.data
      })
    } else {
      console.log("Error in getallUsers")
    }
  } catch(error) {
    dispatch({
      type: ADMIN_ERROR,
      payload: error
    })
  }
}
