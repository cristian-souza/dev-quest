const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Home page')
});

app.get('/about', (req, res)=>{
    res.send('About page')
});

app.get('/usuarios/:name', (req, res)=>{
    const name = req.params.name;
    res.send(`Este é o perfil do usuário ${name}`)
})

app.listen(3000, () => {
    console.log('Servidor em execução em httt://localhost:3000'); 
});