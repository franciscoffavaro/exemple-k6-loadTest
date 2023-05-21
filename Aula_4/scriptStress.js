import http from 'k6/http';
import { sleep } from 'k6'

export const URL = 'http://host.docker.internal:80';

export const options = {
   stages:[
    {duration: '2m', target: 3}, //Abaixo da carga normal
    {duration: '5m', target: 3},
    {duration: '2m', target: 5}, //Carga normal (Limite)
    {duration: '5m', target: 5},
    {duration: '2m', target: 7}, //Ponto de Stress
    {duration: '5m', target: 7},
    {duration: '2m', target: 10}, //Ponto de Saturação
    {duration: '5m', target: 10},
    {duration: '2m', target: 0}, //Ramp-Down
   ]
}

export default function() {
    http.get(URL);
    sleep(1)
}