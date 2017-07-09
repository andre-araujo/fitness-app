# Fitness app
A little app to manage a food menu using the [Nutritionix API](https://developer.nutritionix.com/docs/v1_1)

# Running the project
## Install
`npm install`

## Start
`npm start`

## Config .env
This app have the main purpose is to show react-redux workflow, but, if ou want to run this app properly, you need the KEYS for google and nutritionix APIs.

First step, create an `.env` file at the application root directory with the following content:

```
    GOOGLE_SEARCH_API_KEY=xxxxxx
    GOOGLE_SEARCH_CSE=xxxxxx
    NUTRITIONIX_API_KEY=xxxxxx
```

Then replace `xxxxxx` with the API KEYS

#### Where to found the KEYS
[GOOGLE_SEARCH_API_KEY](https://console.cloud.google.com/apis/credentials) - make a app credential that accepts http requests.

[GOOGLE_SEARCH_CSE](https://cse.google.com/cse) - make an custom field that search the desired app repository to get food images. Just create a CSE in blank, then activate images to search the entire web.

[NUTRITIONIX_API_KEY](https://developer.nutritionix.com/docs/v1_1) - just create an account and get API key.

# Project Stack
- [Express](http://expressjs.com)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [LowDB](https://github.com/typicode/lowdb)