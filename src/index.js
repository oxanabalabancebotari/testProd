import { getParameters } from "codesandbox/lib/api/define";

const parameters = getParameters({
  files: {
    "index.js": {
      content: "console.log('hello')"
    },
    "package.json": {
      content: { dependencies: {} }
    }
  }
});

const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

document.body.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
