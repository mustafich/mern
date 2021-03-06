

export function allUserApi(url, body) {


    const serverResponse = fetch(url, {
        method: 'POST',
        body: JSON.stringify({...body}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => {
        return res.json()
    })
    return serverResponse


}