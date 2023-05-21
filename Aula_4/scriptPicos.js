import http from 'k6/http';
import { sleep } from 'k6'

export const URL = 'http://host.docker.internal:80';

export const options = {
   stages:[
    {duration: '10s', target: 3}, //Abaixo da carga normal
    {duration: '1m', target: 3}, //Período de estabilizaão
    {duration: '10s', target: 20}, //Pico para 20 usuários simultâneos
    {duration: '3m', target: 20}, //3x o período de estabilizaão
    {duration: '10s', target: 3}, // ramp-Down
    {duration: '3m', target: 3},
    {duration: '10s', target: 0} // Estágio de recuperação
   ]
}

export default function() {
    http.get(URL);
    sleep(1)
}