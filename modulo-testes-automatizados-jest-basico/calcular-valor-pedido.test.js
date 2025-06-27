const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos forem superior a 500', () => {
    //AAA - 3 passos de criação de um teste

    // ARANGE - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT - AÇÃO - O QUE VAI SER TESTADO
    const reultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL O RESULATDO ESPERADO
    expect(reultado).toBe(2000)
});

it('deve cobrar valor de frete quando o valor dos produtos for menos que 500', () =>{
     // ARANGE - ARRUMAR - O OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT - AÇÃO - O QUE VAI SER TESTADO
    const reultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL O RESULATDO ESPERADO
    expect(reultado).toBe(150)
});

it('deve cobrar valor do frete caso o valor dos produtos sejam EXATAMENTE 500', () =>{
    const meuPedido = {
        itens: [
            { nome: 'Porco', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    // ACT - AÇÃO - O QUE VAI SER TESTADO
    const reultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL O RESULATDO ESPERADO
    expect(reultado).toBe(600)
});

/* CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALOR DE 20% NA ENTREGA */
it('deve adiconar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () =>{
    const pedidoComEstadoRS = {
        estado: 'RS', 
        itens: [
            { nome: 'Porco', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
});

it('deve adiconar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () =>{
    const pedidoComEstadoSC = {
        estado: 'SC', 
        itens: [
            { nome: 'Porco', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC)

    expect(resultado).toBe(620)
});

it('não deve adiconar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SP', () =>{
    const pedidoComEstadoSP = {
        estado: 'SP', 
        itens: [
            { nome: 'Porco', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(600)
});