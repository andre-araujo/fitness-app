module.exports = {
    PORT: process.env.PORT || 3002,
    API_URL: '/api',
    IS_PRODUCTION: process.env.NODE_ENV === 'production'
};
