import * as actionType from './constants'
import axios from 'axios'

export const subNumberAction = (num) => {
  return {
    type: actionType.SUB_NUMBER_TYPE,
    num
  }
}

export const addNumberAction = (num) => {
  return {
    type: actionType.ADD_NUMBER_TYPE,
    num
  }
}

export const changeRecommendsAction = (recommends) => {
  return {
    type: actionType.RECOMMENDS_TYPE,
    recommends
  }
}

export const changeBannersAction = (banners) => {
  return {
    type: actionType.BANNERS_TYPE,
    banners
  }
}

export const fetchHomeDataAction = () => {
  return async (dispatch, getState) => {
      const result = await axios.get('http://123.207.32.32:8000/home/multidata')
      const banners = result.data.data.banner.list
      const recommends = result.data.data.recommend.list
  
      console.log('first')
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
  }
}