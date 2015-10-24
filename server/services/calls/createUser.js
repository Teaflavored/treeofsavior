export default (fetchr, params, body) => {
    return fetchr.create("users").body(body).end();
}