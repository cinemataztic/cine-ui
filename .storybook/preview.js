import "tailwindcss/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "light",
        value: "#E5E5E5",
      },
      {
        name: "dark",
        value: "#1E1E1E",
      },
    ],
  },
};
