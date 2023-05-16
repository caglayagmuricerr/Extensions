const input = document.createElement('textarea');
input.style.position = 'fixed';
input.style.top = '0';
input.style.right = '0';
input.style.zIndex = '9999';
input.style.width = '200px';
input.style.height = '680px';
input.style.padding = '5px';
input.style.writingMode = 'vertical-rl';
input.style.textOrientation = 'mixed';
document.body.appendChild(input);

// Save button
const saveButton = document.createElement('button');
saveButton.innerText = 'Save';
saveButton.style.position = 'fixed';
saveButton.style.top = '700px';
saveButton.style.right = '10px';
saveButton.style.zIndex = '9999';
document.body.appendChild(saveButton);

saveButton.addEventListener('click', () => {
  const textToSave = input.value;
  const blob = new Blob([textToSave], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.download = 'input.txt';
  a.href = url;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});