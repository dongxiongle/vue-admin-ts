declare const APIURL: string;
import axios, {AxiosRequestHeaders, AxiosRequestConfig} from 'axios';
import qs from 'qs';

axios.defaults.baseURL = APIURL;
axios.defaults.timeout = 3000;

axios.interceptors.request.use((config) => {
  (config.headers as AxiosRequestHeaders).token = 'token';
  return config;
});
axios.interceptors.response.use((res) => {
  if(res.status == 200) {
    return res.data
  } else {
    return res
  }
});

export function formPost (config: AxiosRequestConfig) {
  const {data} = config;
  return axios({
    ...config,
    method: 'post',
    data: qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export default axios;