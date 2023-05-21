import http from 'k6/http';
import { thresholds, check } from 'k6'

export const URL = 'http://host.docker.internal:80';

export const options = {
    vus: 1,
    duration: '5m',
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        checks: ['rate>0.9']
    }
}

export default function() {
    const response = http.get(URL);
    check(response, 
        {
            'is status 200': (r) => r.status === 200,
        }
    )
}