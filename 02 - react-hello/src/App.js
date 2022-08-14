import { useEffect, useState } from 'react';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';

import CheckboxInput from './components/CheckboxInput';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import OnlineOffline from './components/OnlineOffline';

export default function App() {

  const [name, setName] = useState('Bira Neves');
  const [birthDate, setBirthDate] = useState('1973-04-23');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnLine, setIsOnLine] = useState(true);

  useEffect(() => {document.title = name}, [name]);

  useEffect(() => {

    function toggleOnline() {
      setIsOnLine(true);
    }

    function toggleOffline() {
      setIsOnLine(false);
    }

    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);

    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header size="large">Componente Header - Projeto react-hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnLine} />
        {
          showTimer && (
            <div className='text-right m-2'>
              <Timer />
            </div>
          )
        }
        <CheckboxInput id={getNewId()} labelDescription='Mostrar cronômetro'
          onCheckboxChange={toggleShowTimer} />
        <TextInput id={getNewId()} labelDescription='Digite seu nome' inputValue={name}
          onInputChange={handleNameChange} autoFocus />
        <DateInput id={getNewId()} labelDescription='Informe sua data de nascimento'
          inputValue={birthDate} onInputChange={handleBirthDateChange} />
        <p>Seu nome é {name}, com {name.length} caracteres, e você tem {getAgeFrom(birthDate)} anos.</p>
      </Main>
    </>
  )
}