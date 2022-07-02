/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "600px",
            lg: "768px",
            xlg: "1200px",
            "2xl": "1440px",
        },
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
            minHeight: {
                "nav-screen": "calc(100vh - 88px)",
            },
            letterSpacing: {
                4.75: "4.75px",
                2.35: "2.35px",
                2.7: "2.7px",
                1.25: "1.25px",
            },
            backgroundImage: {
                "home-mobile": "url(./assets/home/background-home-mobile.jpg)",
                "home-tablet": "url(./assets/home/background-home-tablet.jpg)",
                "home-desktop":
                    "url(./assets/home/background-home-desktop.jpg)",
            },
        },
    },
    plugins: [],
};
