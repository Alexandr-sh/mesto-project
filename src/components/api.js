const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-5',
    headers: {
      authorization: '42558f7a-d6c8-4f0b-8fbe-7da82591e326',
      'Content-Type': 'application/json'
    }
  }

export function loadUserInfo() {
    return fetch(`${config.baseUrl}/users/me`, {
        headers:config.headers
    });
}

export function loadCardsData() {
    return fetch(`${config.baseUrl}/cards`, {
        headers:config.headers
    });
}

export function sendUserInfo(data) {
    return fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers:config.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
    });
}

export function requestNewCard(data) {
    return fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers:config.headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link
        })
    });
}

export function requestDelCard(id) {
    return fetch(`${config.baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers:config.headers
    });
}

export function requestPutLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers:config.headers
    });
}

export function requestDeleteLike(cardId) {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers:config.headers
    });
}

export function requestUpdateAvatar(link) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers:config.headers,
        body: JSON.stringify({
            avatar: link
        })
    });
}