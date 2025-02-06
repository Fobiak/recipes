import axios from 'axios'

export interface Request {
    url: string
    method?: string
    headers?: never,
    params?: never,
    data?: never
}

const makeRequest = ({ url = '/', method = 'get', data, params, headers }: Request) =>
    axios({
        url,
        method,
        responseType: 'json',
        headers,
        params,
        data
    })

export default makeRequest