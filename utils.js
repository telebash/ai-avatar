import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

import DID_API from './api.json' assert { type: 'json' };

export const api = axios.create({
    baseURL: 'https://api.d-id.com/',
    headers: {
        'Authorization': `Client-Key ${DID_API.key}`,
        'Content-Type': 'application/json',
    }
});
