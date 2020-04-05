import config from '@/config/config.js';
import { axios, axiosHelper } from '@/axios';

export const eventService = {
    getCategories
};

function getCategories() {
	return axios.get('/api/fetch_categories', { 

    })
    .then(axiosHelper.handleResponse)
    .then(categories => {
    	console.log(categories.Result);
        return categories.Result;
    });
}