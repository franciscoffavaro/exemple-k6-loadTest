# exemple-k6-loadTest

Testes de Performance Unitários e de Cenários
Testes de performance validam requisitos funcionais e não funcionais.
Quais os objetivos finais dos testes ?

# Tipos de teste de Performance:

## Teste de Carga
- Saber capacidade máxima da aplicação e utilizar essa carga durante uma alta carga prolongada de aplicações, lembrando que o limite máximo não deve ser excedido. 
-0 Numerbo baixo de usuários e aumenta gradativamente até atingir um ponto abaixo do limite máximo. 

## Teste de Stress
- Tempo superior ao teste de carga;
- Dividido entre etapa sde carga e stress (Tempo de aumento de usuários e tempo de carga constante);
- Passa o limite máximo conhecido da aplicação;
- Serve para identificar a resposta em escala, a saturação em tempos de resposta e identificar limites de consumo e dependências da aplicação (E o nível de recuperação do sserviço);

## Teste de Picos
- Curto tempo de execução (5-10 minutos)
- carga inicial baixa e após um período curto, uma carga altíssima de requisições (10x  a quantidade de usuários inicial);
- Após 1/3 do tempo do teste, redução para o numero inicial de requisições. 
- Excelente (Sem afetar no alto e baixo nível), Bom (respostas lentas, mas sem erros), ruim(sistema retorna erros no pico, mas volta ao normal no baixo nível), inferior( parou de funcionar )

## Teste de imersão
- Dobro da carga normal da aplicação
- numero constante de requisições por um alto período de tempo;
- Medição de consumos, linearidade de consumo ou memory leak, gargalos de performance em altos picos de requisição;
- qual impacto feito caso a requisição reinicie durante o dia. 

- É possível implementar mais de um modelo de teste na mesma execução
- Perspectiva de melhorias na aplicação. 

## Instalação do K6
- roda em GO (não natuvamente em Javascript), então ele é compilado;
- Não executa nativamente no navegador, mas existe uma extensão chamada xk6 caso os testes dependam de métricas de front-end;

- $ docker pull  loadimpact/k6

## Exportação dos dados
- AWS CloudWatch / k6 Cloud
- CSV, Json, XML
- Datadog, Newrelic
- InfluxDB / Prometheus
- Grafana Cloud
- Outros (é possível criar os proprios exporters para os dados do k6);

## Docker
- Para rodar um script localhost com o docker container do Kˆ, substitua o localhost:80 por host.docker.internal:80 (conecta o container ao localhost do usuário)

## Checks
- Permitem verificar status Code, informações de Header e Body

## Thresholds
- Permite paralisar o teste com base em validações feitas durante a execução
- 