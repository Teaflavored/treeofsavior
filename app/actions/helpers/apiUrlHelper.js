const defaultAPIUrl = "/api";
let domainUrl = process.env.BASE_URL;

export default (url) => {
    return domainUrl + defaultAPIUrl + url;
};