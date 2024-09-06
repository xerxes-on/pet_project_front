{
    import('tailwindcss').Config
}
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            light_blue: '#A4C0ED',
            primary_dark: '#E4EFC9',
            primary: '#F6FFDE',
            dark_blue: '#265073',
        },
        extend: {},
    },
    plugins: [],
}
