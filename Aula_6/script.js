import http from 'k6/http';
import { sleep } from 'k6';

export const URL = 'http://host.docker.internal:80';

export const options = {
    scenarios: {
        total_request_focus: {
            executor: 'shared-iterations',
            vus: '10',
            iteractions: '200',
            maxDuration: '2m',
        }
    }
}

export default function() {
    http.get(URL);
}