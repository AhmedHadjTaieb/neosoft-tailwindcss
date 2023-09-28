import './DarkModeToggle.css';
import { ReactComponent as Moon } from '@/svg/moon.svg';
import { ReactComponent as Sun } from '@/svg/sun.svg';

export const DarkModeToggle = (): JSX.Element => {
  function onCheckHandler(): void {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  return (
    <>
      <input
        type="checkbox"
        id="darkmode-toggle"
        className="invisible"
        onChange={() => {
          onCheckHandler();
        }}
      />
      <label
        htmlFor="darkmode-toggle"
        className="relative block h-[40px] w-[80px] cursor-pointer rounded-full bg-neutral-200
                    shadow-[inset_0px_5px_15px_rgba(0,0,0,0.4)] transition-all
                    after:absolute after:left-[3px] after:top-[3px] after:h-[34px] after:w-[34px] after:rounded-full
                    after:bg-gradient-to-b after:from-orange-300 after:to-yellow-600 after:shadow after:content-['']
                    active:after:w-[74px]"
      >
        <Sun className="sun left-[10px] fill-white delay-200" />
        <Moon className="moon left-[52px] fill-neutral-500 delay-200" />
      </label>
    </>
  );
};
