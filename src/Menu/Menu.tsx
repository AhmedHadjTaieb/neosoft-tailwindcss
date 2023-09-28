import tailwindThemeConfig from '../theme/config/tailwind-theme';
import './Menu.css';
import type ITheme from '../theme/model/Itheme';

interface IProps {
  themes: ITheme[];
  activeTheme: string | undefined;
  changeThemeToggle: (theme: string) => void;
}
export const Menu = (props: IProps): JSX.Element => {
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
      className="h-18 lg:border-slate-700 lg:dark:border-slate-300
        lg:dark:bg-slate-50/40 container mt-6 flex w-4/5
        content-center
        justify-around rounded-full
        sm:w-2/4 lg:border-4 lg:border-solid lg:bg-gray-300/40
        lg:p-1 lg:shadow-inner
        lg:shadow-gray-800 lg:backdrop-blur"
    >
      {props.themes?.map((theme) => (
        <button
          className={`border-slate-300 m-2 h-12 
          w-12 rounded-full border border-solid text-md 
          shadow-md hover:shadow-inner 
          lg:rounded-lg cursor-${theme.name} 
          ${props.activeTheme === theme.name ? 'bg-gray-400/30' : 'silver'}
          `}
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
