const myObj: HTMLElement | null = document.getElementById('demo');
if (myObj) {
  myObj.innerHTML = 'I am wondering how fast this will change';
}

const btn = document.createElement('BUTTON'); // Create a <button> element
btn.innerHTML = 'CLICK ME'; // Insert text
document.body.appendChild(btn); // Append <button> to <body>gg
