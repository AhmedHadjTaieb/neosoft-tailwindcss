import React, { type ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { ToggleTheme } from './theme/ToggleTheme';
import { DarkModeToggle } from './theme/DarkModeToggle';
import type ITheme from './theme/Itheme';
function App(): JSX.Element {
  const [themes, setThemes] = useState<ITheme[]>([]);
  const [activeTheme, setActiveTheme] = useState<ITheme | undefined>();
  const [animalName, setAnimalName] = useState<string>('');
  const fetchAnimals = (): void => {
    fetch('./data/animals.json')
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        setThemes(data);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    fetchAnimals();
  }, []);

  function changeAnimal(animal: string): void {
    setActiveTheme(themes.find((theme) => theme.name === animal));
    setAnimalName('');
  }

  function changeHandler(evt: ChangeEvent<HTMLInputElement>): void {
    setAnimalName(evt.target.value);
  }

  return (
    <div
      className="App grid h-screen w-screen grid-rows-[200px_150px_minmax(900px,_1fr)] justify-items-stretch
     overflow-hidden bg-gradient-to-br from-primary_dark to-secondary_dark
     dark:from-primary dark:to-secondary"
    >
      <div className="justify-self-end p-10">
        <DarkModeToggle></DarkModeToggle>
      </div>
      <div className="flex items-center">
        <ToggleTheme
          themes={themes}
          changeThemeToggle={(animal) => {
            changeAnimal(animal);
          }}
          activeTheme={activeTheme?.name}
        />
      </div>
      {activeTheme != null ? (
        <div className="container mt-8 flex flex-col">
          <span className="px-8 text-gray-800 dark:text-gray-50">
            {activeTheme?.description}
          </span>
          <input
            type="text"
            className={`my-4 h-8 w-36 animate-text self-center
            border-b border-solid border-gray-800 
            bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 
            placeholder-white placeholder-opacity-50 placeholder:italic
             dark:border-gray-50 cursor-${activeTheme.name}`}
            autoFocus
            placeholder="give me a name"
            onChange={changeHandler}
            value={animalName}
          />
          <h2 className="text-animation">{animalName}</h2>
        </div>
      ) : (
        <h3 className="text-animation !self-start justify-self-center lg:!text-xl">
          Please choose Me !
        </h3>
      )}
    </div>
  );
}

export default App;
