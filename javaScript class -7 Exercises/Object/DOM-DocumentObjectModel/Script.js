const mybutton = document.getElementById("myButton");
const p = document.getElementById("myParagraph");


mybutton.addEventListener("click", () => {
    // alert("Button clicked");
    p.textContent = "Btn Clicked";
})