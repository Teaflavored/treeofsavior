export default ( response ) => {
    if (response.status > 400) {
        return Promise.reject(response.json());
    } else {
        return response.json();
    }
}