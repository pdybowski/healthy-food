import API from './api';

class APIQuery {
    getData(endpoint) {
        return API.get(`/${endpoint}`);
    }

    createData(endpoint, item) {
        return API.post(`/${endpoint}`, item);
    }

    updateData(endpoint, itemId, item) {
        return API.put(`/${endpoint}/${itemId}`, item);
    }

    updateDataElement(endpoint, itemId, item) {
        return API.patch(`/${endpoint}/${itemId}`, item);
    }

    deleteData(endpoint, itemId) {
        return API.delete(`/${endpoint}/${itemId}`);
    }
}

export default new APIQuery();
