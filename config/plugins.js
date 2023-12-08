module.exports = ({ env}) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: end('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET')
        }
    },
    actionOptions: {
        upload: {},
        delete: {},
    },
})