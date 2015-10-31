const defaultAPIUrl = "/api";
let domainUrl = process && process.env.BASE_URL || window.__baseUrl;

export default (url) => {
    return domainUrl + defaultAPIUrl + url;
};