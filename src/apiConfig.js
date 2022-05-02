let APILink

const apiUrls = {
    production: "https://brie-server-django.herokuapp.com/api/status",
    development: "https://brie-server-django.herokuapp.com/api/status"
}

if (window.location.hostname === "localhost") {
    APILink = apiUrls.development
} else {
    APILink = apiUrls.production
}

export default APILink