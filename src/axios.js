import axios from 'axios'

export const listenNotesApi = axios.create({
    baseURL: 'https://listen-api.listennotes.com/api/v2',
    headers: {
        'X-ListenAPI-Key': process.env.REACT_APP_LISTEN_NOTES_API_KEY,
    },
})
