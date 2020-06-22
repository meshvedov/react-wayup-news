async function getData()  {
    // const apiKey = 'e39a44f66d9c42d28905e102788d66bc';
    const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=ru&' +
        'apiKey=e39a44f66d9c42d28905e102788d66bc';
    const req = new Request(url);
    let promise = fetch(req)
        .then(function(response) {
            return response.json();
        }).then(data => {
            const {articles} = data
            return articles
    })

    return promise;
}

export {
    getData
}