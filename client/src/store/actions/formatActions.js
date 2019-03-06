import axios from 'axios'

export const GET_FORMATS_START = 'GET_FORMATS_START'
export const GET_FORMATS_SUCCESS = 'GET_FORMATS_SUCCESS'
export const GET_FORMATS_FAIL = 'GET_FORMATS_FAIL'

const baseURL = 'https://club-handbook.herokuapp.com'

export const getFormatStyles = () => dispatch => {
  dispatch({ type: GET_FORMATS_START })

  axios
    .get(`${baseURL}/api/settings`)
    .then(res => {
      console.log('getFormatStyles', res.data)
      dispatch({ type: GET_FORMATS_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: GET_FORMATS_FAIL, error: err }))
}
