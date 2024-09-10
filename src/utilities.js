export function formatDate(date) {
    const dateObject = new Date(date)
    return dateObject.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
    })
}

