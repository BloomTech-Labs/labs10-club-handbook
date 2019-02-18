import axios from 'axios';

export const START = 'START';
export const FAIL = 'FAIL';
export const GET_CLUBS = 'GET_CLUBS';
export const GET_CLUB_BY_ID = 'GET_CLUB_BY_ID';
export const CREATE_CLUB = 'CREATE_CLUB';
export const UPDATE_CLUB = 'UPDATE_CLUB';
export const DELETE_CLUB = 'DELETE_CLUB';
export const GET_CLUB_SECTIONS = 'GET_CLUB_SECTIONS';
export const ADD_SECTION_BY_CLUB_ID = 'ADD_SECTION_BY_CLUB_ID';
export const UPDATE_SECTION_BY_CLUB_ID = 'UPDATE_SECTION_BY_CLUB_ID';
export const DELETE_ALL_SECTIONS_BY_CLUB_ID = 'DELETE_ALL_SECTIONS_BY_CLUB_ID';
export const DELETE_ALL_SECTIONS_BY_CLUB_ID = 'DELETE_ALL_SECTIONS_BY_CLUB_ID';
export const DELETE_SECTION_BY_SECTION_ID = 'DELETE_SECTION_BY_SECTION_ID';

export const getClubs = () => dispatch => {
    dispatch({type: START, message: `Getting list of clubs`})

    axios.get('https://club-handbook.herokuapp.com/api/clubs').then(res => {
        // returns an array of club objects
        dispatch({type: GET_CLUBS, payload: res.data}) 
    }).catch(err => {
        dispatch({type: FAIL, error: err})
    })
}

