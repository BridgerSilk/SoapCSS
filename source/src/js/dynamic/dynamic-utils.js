document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("*").forEach(element => {
        element.classList.forEach(className => {
            const layout = {
                "ct-": "maxWidth" // container
            };
            
            const flexboxGrid = {

            };

            const spacing = {

            };

            const sizing = {

            };

            const typography = {

            };

            const background = {
                "bg-": "backgroundColor" // background
            };

            const borders = {

            };

            const effects = {

            };

            const filters = {

            };

            const tables = {

            };

            const transitionsAnimations = {

            };

            const transforms = {

            };

            const interactivity = {

            };

            const svg = {

            };

            //todo ...

            //todo add 2-3 premade color themes (eg. bg-mint-100) (also supports all other color utils)
            
            Object.keys(background).forEach(prefix => {
                if (className.startsWith(prefix)) {
                    const value = className.slice(prefix.length);
                    element.style[background[prefix]] = value;
                }
            });

            //optimize this system in the future
        });
    });
});