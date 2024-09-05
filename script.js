const hueSlider = document.getElementById('hue-slider');
const hueInput = document.getElementById('hue-input');
const hueDisplayValue = document.getElementsByClassName('hue-display-value');
const hueTertiaryDisplayValue = document.getElementsByClassName('teritary-hue-display-value');
const hueAccentDisplayValue = document.getElementsByClassName('accent-hue-display-value');
const computedStyle = getComputedStyle(document.documentElement);
const copyBtn = document.getElementById('copy-button');

updatePreCode('0', computedStyle)

copyBtn.addEventListener('click', () => {
  const preCode = document.getElementById('code-container');
  const codeText = preCode.innerText;

  navigator.clipboard.writeText(codeText)
    .then(() => {
      console.log('Code copied to clipboard');
    })
    .catch((error) => {
      console.error('Failed to copy code to clipboard:', error);
    });
});
hueSlider.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  document.documentElement.style.setProperty('--hue', inputValue);
  hueInput.value = inputValue;

  const computedStyle = getComputedStyle(document.documentElement);

  updatePreCode(inputValue, computedStyle);
});

function updatePreCode(inputValue, computedStyle) {
  Array.from(hueDisplayValue).forEach(element => {
    element.textContent = inputValue;
  });

  Array.from(hueTertiaryDisplayValue).forEach(element => {
    element.textContent = computedStyle.getPropertyValue('--teritary-hue');
  });

  Array.from(hueAccentDisplayValue).forEach(element => {
    element.textContent = computedStyle.getPropertyValue('--accent-hue');
  });
}
