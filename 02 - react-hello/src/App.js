import Header from './components/Header';
import Main from './components/Main';
import Test from './components/Test';

export default function App() {
  return (
    <>
      <Header size="large">Componente Header - Projeto react-hello</Header>
      <Main>
        <p>Seu nome é Ubirajara Neves, com 15 caracteres, e você tem 49 anos.</p>
      </Main>
      <Test number={10} string="Teste" visible data={{a: 1, b: 2}}></Test>
    </>
  )
}
