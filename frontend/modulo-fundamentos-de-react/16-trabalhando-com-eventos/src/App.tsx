import type  { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import './App.css';

function App() {

  const handleClick = (name: string) => {
    alert(`${name} Clicou no botão`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('a tecla pressionada foi:', event.key);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Formulário foi enviado");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <button onClick={() => handleClick("Cristian")}>Clique aqui</button>

      <input type="text" onKeyDown={handleKeyPress} />

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite algo' onChange={handleChange}/>
        <button type='submit'>Enviar</button>
      </form>
    </>
  );
}

export default App
