import tailwindThemeConfig from './tailwind-theme';
import './ToggleTheme.css';
import type ITheme from './Itheme';

interface IProps {
  themes: ITheme[];
  activeTheme: string | undefined;
  changeThemeToggle: (theme: string) => void;
}
export const ToggleTheme = (props: IProps): JSX.Element => {
  function changeTheme(theme: string): void {
    const colors = (tailwindThemeConfig.theme as any).colors[theme];
    const root = document.documentElement;
    Object.keys(colors).forEach((color) => {
      root.style.setProperty(`--color-${color}`, colors[color]);
    });
    props.changeThemeToggle(theme);
  }

  return (
    <div
      className="h-18 container mt-6
        flex w-2/4 content-center justify-around rounded-full
        lg:border-4 lg:border-solid
        lg:border-slate-700 lg:bg-gray-300/40 lg:p-1 lg:shadow-inner
        lg:shadow-gray-800 lg:backdrop-blur
        lg:dark:border-slate-300 lg:dark:bg-slate-50/40"
    >
      {props.themes?.map((theme) => (
        <button
          className={`m-2 h-12 w-12 
          rounded-full border border-solid border-slate-300 text-md 
          shadow-md hover:shadow-inner 
          lg:rounded-lg cursor-${theme.name} ${
            props.activeTheme === theme.name ? 'bg-gray-400/30' : 'silver'
          }`}
          key={theme.name}
          onClick={() => {
            changeTheme(theme.name);
          }}
        >
          <span
            className={`${
              props.activeTheme === theme.name
                ? 'text-xl drop-shadow-[0px_0px_3px_rgb(232,248,7)]'
                : 'text-center align-middle '
            }`}
          >
            {theme.picture}
          </span>
        </button>
      ))}
    </div>
  );
};
