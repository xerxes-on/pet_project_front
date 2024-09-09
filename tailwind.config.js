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
            orange: '#EFEAD3',
            white: '#FFF',
            yellow: '#FFD43B',
            red: '#ff0000',
            red500: '#ef4444',
        },
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            fontWeight: {
                regular: 400,
                semibold: 600,
                bold: 700,
                extralight: 200,
            },
        },
    },
    plugins: [],
}
