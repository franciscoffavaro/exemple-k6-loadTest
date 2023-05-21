import http from 'k6/http';
import { sleep } from 'k6';

export const URL = 'http://host.docker.internal:80';

export const options = {
    vus: 10,
    duration: '30s'
}

export default function() {
    http.get(URL);
    sleep(1);
}