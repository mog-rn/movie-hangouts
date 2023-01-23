import {SET_TOP_HEADLINES, SET_TRENDING_HEADLINES} from './action.types';
import Axios from 'axios';

const API_KEY = '3d384ebff6a0463cb67fa7bcbdd1272d';

export const getTopHeadline = () => async dispatch => {
  const base_url = `https://newsapi.org/v2/top-headlines?country=za&category=entertainment&apiKey=${API_KEY}`;
  console.log('enterd');
  try {
    const {data} = await Axios.get(base_url);
    console.log(data);
    dispatch({
      type: SET_TOP_HEADLINES,
      payload: data.articles,
    });
  } catch (error) {}
};

export const getTopThreeTrendingNews = () => async dispatch => {
  const base_url = `https://newsapi.org/v2/top-headlines?category=entertainment&pageSize=3&apiKey=${API_KEY}`;
  console.log('enterd');
  try {
    const {data} = await Axios.get(base_url);
    console.log(data);
    dispatch({
      type: SET_TRENDING_HEADLINES,
      payload: data.articles,
    });
  } catch (error) {}
};
