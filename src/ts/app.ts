const myObj: HTMLElement | null = document.getElementById('demo');
if(myObj){
    myObj.innerHTML = "This text has been passed in from javascript";
}

var btn = document.createElement("BUTTON");   // Create a <button> element
    btn.innerHTML = "CLICK ME";                   // Insert text
    document.body.appendChild(btn);               // Append <button> to <body>gg