export const publishedMonth = (publishedAt) => (new Date( publishedAt ).getMonth() + 1)

export const publishedDay = (date) => {
    const day = new Date( date ).getDate()
    return day >= 1 && day <= 9 ? '0' + day : day
}