import {postRequest} from './NetworkManager'

export const userLogin = (httpRequestObj) => {
  return postRequest(httpRequestObj)
}
