const groupID = 'plus-cohort-5';
const token = '42558f7a-d6c8-4f0b-8fbe-7da82591e326';

export function loadUserInfo() {
    return fetch(`https://nomoreparties.co/v1/${groupID}/users/me`, {
        headers: {
            authorization: token
        }
    });
}

export function loadCardsData() {
    return fetch(`https://nomoreparties.co/v1/${groupID}/cards`, {
        headers: {
            authorization: token
        }
    });
}

export function sendUserInfo(data) {
    return fetch(`https://nomoreparties.co/v1/${groupID}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
    });
}

export function requestNewCard(data) {
    return fetch(`https://nomoreparties.co/v1/${groupID}/cards`, {
        method: 'POST',
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    });
}