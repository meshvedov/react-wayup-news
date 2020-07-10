const newsGet = (data) => {
    return {
        type: 'FETCH_NEWS_GET',
        data
    }
}

export {
    newsGet
}