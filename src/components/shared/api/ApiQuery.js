import Api from './Api';

class ApiQuery {
    static get(endpoint) {
        return Api.get(`/${endpoint}`);
    }

    static post(endpoint, item) {
        return Api.post(`/${endpoint}`, item);
    }

    static put(endpoint, item) {
        return Api.put(`/${endpoint}`, item);
    }

    static patch(endpoint, item) {
        return Api.patch(`/${endpoint}`, item);
    }

    static delete(endpoint) {
        return Api.delete(`/${endpoint}`);
    }
}

export default ApiQuery;
