module.exports = {
  important: true,
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    safelist: [
      "bg-green-100",
      "bg-blue-100",
      "bg-yellow-100",
      "bg-pink-100",
      "bg-yellow-100",
      "bg-red-100",
      "bg-purple-100",
      "bg-gray-100",
      "border-green-300",
      "border-blue-400",
      "border-yellow-600",
      "border-pink-400",
      "border-yellow-400",
      "border-red-600",
      "border-purple-400",
      "border-gray-500",
      "bg-green-400",
      "bg-blue-400",
      "bg-yellow-900",
      "bg-pink-400",
      "bg-yellow-500",
      "bg-red-600",
      "bg-purple-400",
      "bg-gray-500"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    }
},
  plugins: [],
}