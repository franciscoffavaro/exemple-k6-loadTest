import http from 'k6/http';
import { sleep } from 'k6';

//As option acomodam os stages, onde podemos setar as configurações dos testes antes dos mesmos serem executados
export const options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '30s', target: 20 }, //rampUp - Aumento da Carga
        { duration: '30s', target: 10 } //rampdown - Diminuição da Carga
    ],
};

export default function() {
    http.get('https://test.k6.io');
    sleep(1);
}