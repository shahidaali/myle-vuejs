export const axiosHelper = {
    handleResponse
};

function handleResponse (response) {
    const data = response.data;
    if (!response.statusText == 'OK') {
        if (response.status === 401) {

        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}