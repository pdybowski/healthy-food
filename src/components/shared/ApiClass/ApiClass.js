import API from './api';

class APIQuery {
    get(endpoint) {
        return API.get(`/${endpoint}`);
    }

    post(endpoint, item) {
        return API.post(`/${endpoint}`, item);
    }

    put(endpoint, item) {
        return API.put(`/${endpoint}`, item);
    }

    patch(endpoint, item) {
        return API.patch(`/${endpoint}`, item);
    }

    delete(endpoint) {
        return API.delete(`/${endpoint}`);
    }
}

export default new APIQuery();
