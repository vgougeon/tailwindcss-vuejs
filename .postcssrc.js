const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    () => {console.log("hello test de postcss")},
    autoprefixer,
  ],
};