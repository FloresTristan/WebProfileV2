"use client";

import React from "react";

const ThemeController = () => {
  const themes = [
    "light", "dark", "cupcake", "synthwave", "luxury", "black", "dim",
    "garden", "wireframe", "pastel", "lemonade", "winter",
    "retro", "cyberpunk", "aqua", "lofi", "valentine",
  ];

  const [selectedTheme, setSelectedTheme] = React.useState<string>(localStorage.getItem("theme") || "light");

  React.useEffect(() => {
    localStorage.setItem("theme", selectedTheme);
    // Optionally: Apply the theme dynamically (if using TailwindCSS or other CSS framework).
    document.documentElement.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <div className="relative z-10">
      <label htmlFor="theme-select" className="block text-lg font-medium ">
        Themes ({selectedTheme})
      </label>
      <select
        id="theme-select"
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
        className="mt-2 w-full p-2 border rounded-lg  focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {themes.map((theme, index) => (
          <option className="" key={index} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeController;
