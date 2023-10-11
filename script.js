const aboutMe = document.getElementById("aboutMe");
    const edwardImg = document.getElementById("edwardImg");
    const btnChange1 = document.getElementById("btnChange1");
    const btnChange2 = document.getElementById("btnChange2");
    const pageFont = document.getElementById("pageFont");
    const callMe = document.getElementById("callMe");
    const pageColor = document.getElementById("pageColor");

pageColor.addEventListener("click", function() {
    aboutMe.style.background = '#003060';
    aboutMe.style.fontFamily = 'Courier New';
    edwardImg.style.border = '5px solid #68BBE3';
    btnChange1.style.background = '#055C9D';  
    btnChange1.style.border = '5px solid #68BBE3';
    btnChange1.style.color = '#FFFFFF';
    btnChange2.style.background = '#055C9D';  
    btnChange2.style.border = '5px solid #68BBE3';
    btnChange2.style.color = '#FFFFFF';
    pageColor.style.background = '#055C9D';
    pageColor.style.border = '5px solid #68BBE3';
    pageColor.style.color = '#FFFFFF';
    pageColor.style.fontFamily = 'Courier New';
    callMe.style.background = '#055C9D';
    callMe.style.border = '5px solid #68BBE3';
    callMe.style.color = '#FFFFFF';
    alert("You don't like brown? Don't worry, I got you!");
});

function fun() {
    alert("hey I just met you...");
    alert("and this is crazy...");
    alert("but here's my number 562-867-5309...");
    alert("so call me maybe!");
}