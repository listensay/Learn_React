import * as actionType from './constants'

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