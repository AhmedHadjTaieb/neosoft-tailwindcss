import './App.css';
import { DarkModeToggle } from './theme/DarkModeToggle';
function App(): JSX.Element {
  return (
    <div
      className="App grid
      h-screen
      w-screen grid-rows-[200px_150px_minmax(900px,_1fr)]
      justify-items-stretch overflow-hidden
      bg-gradient-to-b bg-gradient-to-br from-teal-200 to-orange-200
      dark:from-teal-800 dark:to-orange-800"
    >
      <div className="justify-self-end p-10">
        <DarkModeToggle></DarkModeToggle>
      </div>
      <div className="flex place-self-center">
        <h2
          className="animate-text bg-gradient-to-r from-orange-800
                      via-purple-500 to-teal-800 bg-clip-text text-2xl
                       text-transparent dark:from-neutral-300 dark:via-orange-300 dark:to-teal-300"
        >
          Hello World
        </h2>
      </div>
    </div>
  );
}

export default App;
