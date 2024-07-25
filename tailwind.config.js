const flowbite = require('flowbite-react/tailwind')
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
    theme: {
        extend: {
            colors: {
                'main-colors': '#2582BD',
                'main-bgcolors': '#182441',
                'main-table': '#adb7c2',
            },

            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                mulish: ['Mulish', 'sans-serif'],
                soro: ['Soro', 'sans-serif'],
            },
            backgroundImage: {
                'bg-img': "url('/Img/EkycFlatform/background.png')",
                'bg-img-a': "url('/Img/EkycFlatform/background_1.png')",
                'bg-img-product': "url('/Img/Products/Background.png')",
            },
        },
    },
    plugins: [require('tailwindcss-animated'), flowbite.plugin()],
}
