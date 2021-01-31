export const beginner = [
  {
    type: 'multiple',
    question: 'Which company developed JavaScript?',
    answers: [
      { text: 'Google', points: 0 },
      { text: 'Facebook', points: 0 },
      { text: 'Twitter', points: 0 },
      { text: 'Netscape', points: 1 },
    ],
  },
  {
    type: 'multiple',
    question: 'What would be the result in the console 3+2+"7"',
    answers: [
      { text: '12', points: 0 },
      { text: '327', points: 0 },
      { text: '57', points: 1 },
    ],
  },
  {
    type: 'multiple',
    question:
      'Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?',
    answers: [
      { text: 'slice()', points: 0 },
      { text: 'split()', points: 1 },
      { text: 'replace()', points: 0 },
      { text: 'search()', points: 0 },
    ],
  },
  {
    type: 'multiple',
    question:
      'Which of the following is the correct syntax to create a cookie using JavaScript?',
    answers: [
      {
        text:
          "document.cookie = 'key1 = value1; key2 = value2; expires = date';",
        points: 1,
      },
      {
        text:
          "browser.cookie = 'key1 = value1; key2 = value2; expires = date';",
        points: 0,
      },
      {
        text: "window.cookie = 'key1 = value1; key2 = value2; expires = date';",
        points: 0,
      },
      {
        text:
          "navigator.cookie = 'key1 = value1; key2 = value2; expires = date';",
        points: 0,
      },
    ],
  },
]
