// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        // Define your custom box shadow utilities here
        custom: "10px 10px 17px 0px rgba(0,0,0,0.32)",
        custom1: "15px 15px 8px -10px rgba(0,0,0,0.07)",
        // Add more custom box shadow utilities as needed
      },
      colors: {
        placeholdergray: "#f5f5f5",
      },
      width: {
        "1p": "1%",
        "2p": "2%",
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "8p": "8%",
        "9p": "9%",
        "10p": "10%",
        "11p": "11%",
        "12p": "12%",
        "13p": "13%",
        "14p": "14%",
        "15p": "15%",
        "16p": "16%",
        "17p": "17%",
        "18p": "18%",
        "19p": "19%",
        "20p": "20%",
        "21p": "21%",
        "22p": "22%",
        "23p": "23%",
        "24p": "24%",
        "25p": "25%",
        "26p": "26%",
        "27p": "27%",
        "28p": "28%",
        "29p": "29%",
        "30p": "30%",
        "31p": "31%",
        "32p": "32%",
        "33p": "33%",
        "34p": "34%",
        "35p": "35%",
        "36p": "36%",
        "37p": "37%",
        "38p": "38%",
        "39p": "39%",
        "40p": "40%",
        "41p": "41%",
        "42p": "42%",
        "43p": "43%",
        "44p": "44%",
        "45p": "45%",
        "46p": "46%",
        "47p": "47%",
        "48p": "48%",
        "49p": "49%",
        "50p": "50%",
        "51p": "51%",
        "52p": "52%",
        "53p": "53%",
        "54p": "54%",
        "55p": "55%",
        "56p": "56%",
        "57p": "57%",
        "58p": "58%",
        "59p": "59%",
        "60p": "60%",
        "61p": "61%",
        "62p": "62%",
        "63p": "63%",
        "64p": "64%",
        "65p": "65%",
        "66p": "66%",
        "67p": "67%",
        "68p": "68%",
        "69p": "69%",
        "70p": "70%",
        "71p": "71%",
        "72p": "72%",
        "73p": "73%",
        "74p": "74%",
        "75p": "75%",
        "76p": "76%",
        "77p": "77%",
        "78p": "78%",
        "79p": "79%",
        "80p": "80%",
        "81p": "81%",
        "82p": "82%",
        "83p": "83%",
        "84p": "84%",
        "85p": "85%",
        "86p": "86%",
        "87p": "87%",
        "88p": "88%",
        "89p": "89%",
        "90p": "90%",
        "91p": "91%",
        "92p": "92%",
        "93p": "93%",
        "94p": "94%",
        "95p": "95%",
        "96p": "96%",
        "97p": "97%",
        "98p": "98%",
        "99p": "99%",
        "100p": "100%",
      },
      height: {
        "1p": "1%",
        "2p": "2%",
        "3p": "3%",
        "4p": "4%",
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "8p": "8%",
        "9p": "9%",
        "10p": "10%",
        "11p": "11%",
        "12p": "12%",
        "13p": "13%",
        "14p": "14%",
        "15p": "15%",
        "16p": "16%",
        "17p": "17%",
        "18p": "18%",
        "19p": "19%",
        "20p": "20%",
        "21p": "21%",
        "22p": "22%",
        "23p": "23%",
        "24p": "24%",
        "25p": "25%",
        "26p": "26%",
        "27p": "27%",
        "28p": "28%",
        "29p": "29%",
        "30p": "30%",
        "31p": "31%",
        "32p": "32%",
        "33p": "33%",
        "34p": "34%",
        "35p": "35%",
        "36p": "36%",
        "37p": "37%",
        "38p": "38%",
        "39p": "39%",
        "40p": "40%",
        "41p": "41%",
        "42p": "42%",
        "43p": "43%",
        "44p": "44%",
        "45p": "45%",
        "46p": "46%",
        "47p": "47%",
        "48p": "48%",
        "49p": "49%",
        "50p": "50%",
        "51p": "51%",
        "52p": "52%",
        "53p": "53%",
        "54p": "54%",
        "55p": "55%",
        "56p": "56%",
        "57p": "57%",
        "58p": "58%",
        "59p": "59%",
        "60p": "60%",
        "61p": "61%",
        "62p": "62%",
        "63p": "63%",
        "64p": "64%",
        "65p": "65%",
        "66p": "66%",
        "67p": "67%",
        "68p": "68%",
        "69p": "69%",
        "70p": "70%",
        "71p": "71%",
        "72p": "72%",
        "73p": "73%",
        "74p": "74%",
        "75p": "75%",
        "76p": "76%",
        "77p": "77%",
        "78p": "78%",
        "79p": "79%",
        "80p": "80%",
        "81p": "81%",
        "82p": "82%",
        "83p": "83%",
        "84p": "84%",
        "85p": "85%",
        "86p": "86%",
        "87p": "87%",
        "88p": "88%",
        "89p": "89%",
        "90p": "90%",
        "91p": "91%",
        "92p": "92%",
        "93p": "93%",
        "94p": "94%",
        "95p": "95%",
        "96p": "96%",
        "97p": "97%",
        "98p": "98%",
        "99p": "99%",
        "100p": "100%",
      },
    },
  },
  plugins: [],
};