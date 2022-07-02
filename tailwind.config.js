/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        colors: {
            black: "#0B0D17",
            purple: { 100: "#D0D6F9" },
            white: "#FFFFFF",
        },
        fontSize: {
            h1: "150px",
            "h1-mobile": "80px",
            h2: "100px",
            h3: "56px",
            h4: "32px",
            h5: "28px",
            lg: "20px",
            base: "18px",
            sm: "16px",
            "xs-15": "15px",
            "xs-14": "14px",
        },
        extend: {
            fontFamily: {
                primary: ["Barlow Condensed", "sans-serif"],
                secondary: ["Bellefair", "serif"],
                body: ["Barlow", "sans-serif"],
            },
            padding: {
                nav: "88px",
            },
            height: {
                nav: "88px",
            },
            letterSpacing: {
                4.75: "4.75px",
                2.35: "2.35px",
                2.7: "2.7px",
                1.25: "1.25px",
            },
            backgroundImage: {
                "home-mobile": "url(./assets/home/background-home-mobile.jpg)",
            },
        },
    },
    plugins: [],
};
