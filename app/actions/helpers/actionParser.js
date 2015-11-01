export default ( response ) => {
    if (response.status > 400) {
        return Promise.reject(
            Promise.resolve(response.json())
        );
    } else {
        return response.json();
    }
}