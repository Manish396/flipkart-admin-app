const baseURL = "https://flipkart-backend-application.herokuapp.com";
export const api = `${baseURL}/api`;
export const generatePublicURL = (filename) => {
    return `${baseURL}/public/${filename}`;
}
