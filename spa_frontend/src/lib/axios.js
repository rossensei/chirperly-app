import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 60000,
    withCredentials: true,
    // xsrfCookieName: 'XSRF-TOKEN',
    // xsrfHeaderName: 'X-XSRF-TOKEN'
    headers: {
        Accept: 'application/json',
    }
})

axios.interceptors.response.use(null, (e) => {
    const error = {
        status: e.response?.status,
        original: e, 
        validation: {},
        message: null,
    };

    if(e.response?.status === 422) {
        for(let field in e.response.data.errors) {
            error.validation[field] = e.response.data.errors[field][0];
        }
    } else {
        error.message = 'Something went wrong. Please try again later.'
    }

    return Promise.reject(error)
})

export default axios;