import http from 'k6/http';
import { sleep } from 'k6'

export const URL = 'http://host.docker.internal:80';

export const options = {
   stages:[
    {duration: '2m', target: 14}, //Carga de Saturação
    {duration: '10m', target: 14}, //Período de estabilizaão
    {duration: '2m', target: 0}, //Ramp-down
   ]
}

export default function() {
    http.get(URL);
    sleep(1)
}