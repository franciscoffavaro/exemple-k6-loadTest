import http from 'k6/http';
import { thresholds, check } from 'k6'

export const URL = 'http://host.docker.internal:80';

export const options = {
   stages:[
    {duration: '5m', target: 5},
    {duration: '10m', target: 5},
    {duration: '5m', target: 0}
   ],
    thresholds: {
        http_req_duration: ['p(95) < 1000'],
        http_req_failed: ['rate<0.01'],
        checks: ['rate>0.99']
    }
}

export default function() {
    const response = http.get(URL);
    check(response, 
        {
            'is status 200': (r) => r.status === 200,
            'body is not null': (r) => r.body.length > 0
        }
    )
}