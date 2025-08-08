tailwind.config = {
    theme: {
      extend: {
        gridTemplateColumns: {
          auto: "repeat(auto-fit, minmax(200px, 1fr))",
        },
        fontFamily: {
          Ovo: ["Ovo", "serif"],
          Playfair: ["Playfair Display", "serif"],
          Poppins: ["Poppins", "sans-serif"],
          Inter: ["Inter", "sans-serif"],
          Montserrat: ["Montserrat", "sans-serif"],
          Raleway: ["Raleway", "sans-serif"],
          Schibsted: ["Schibsted Grotesk", "sans-serif"],
          Outfit: ["Outfit", "sans-serif"],
        },
        animation: {
          "fade-in": "fadeIn 0.7s ease-out both",
          "slide-up": "slideUp 0.7s cubic-bezier(0.4,0,0.2,1) both",
          float: "float 3s ease-in-out infinite",
          "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          "bounce-slow": "bounce 3s infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" },
          },
          slideUp: {
            "0%": { transform: "translateY(30px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" },
          },
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-10px)" },
          },
        },
        colors: {
          darkTheme: "#111111",
          white: "#fff",
          black: "#000",
          gray: {
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#181818",
          },
        },
        boxShadow: {
          soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
          hover:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        },
        backdropBlur: {
          xs: "2px",
        },
      },
    },
    darkMode: "selector",
  };