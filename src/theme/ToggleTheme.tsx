import tailwindThemeConfig from "./tailwind-theme";
import theme from "tailwindcss/defaultTheme";

interface ITheme {
    name: string
    picture: any
}
export const ToggleTheme = () => {
    console.log((tailwindThemeConfig.theme as any).colors.fox)
    const themes:ITheme[] = [{name:'fox',picture:"🦊"},{name:'frog',picture:"🐸"},{name:'monkey',picture:"🐵"},{name:'chick',picture:"🐥"}]

    function changeTheme(theme:string) {
        console.log(theme)
        const colors = (tailwindThemeConfig.theme as any).colors[theme]
        const root = document.documentElement;
        console.log(Object.keys(colors))
        Object.keys(colors).forEach((color) => {
            console.log(color)
            root.style.setProperty(`--color-${color}`, colors[color]);
        })
    }
    return (
        <div className="container border-2 border-solid rounded border-slate-300 flex w-2/4 h-18 mt-6  justify-around content-center">
            {themes.map(theme =>
                <button className="p-2 m-2 h-12 w-12 border rounded border-solid border-slate-300 bg-grey"
                        key={theme.name}
                onClick={()=>changeTheme(theme.name)}>{theme.picture}</button>
            )}
        </div>
    );
};