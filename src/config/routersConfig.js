import contacts from './contactsConfig';

const routes = {
    main: {
        page: 'news',
        exact: true,
        path: '/main',
        countNews: 6,
        title: 'Всегда свежие новости',
        isLink: true
    },
    news: {
        page: 'news',
        exact: true,
        path: '/news',
        countNews: 18,
        title: 'Быть в курсе событий',
        isLink: false
    },
    contact: {
        page: 'contact',
        exact: true,
        path: '/contact',
        data: contacts
    },
    redirect: {
        exact: true,
        path: '/',
        to: '/main'
    }
}
export default routes;