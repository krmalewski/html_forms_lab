console.log('connected');

var locate = window.location.search

function delineate(str) {
  theLeft = str.indexOf("=") + 1;
  theRight = str.lastIndexOf("&");
  return(str.substring(theLeft, theRight));
}


function delineate2(str) {
  point = str.lastIndexOf("=");
  return(str.substring(point+1,str.length));
}

var sex = delineate(locate);
var color = delineate2(locate);


var theForm = document.querySelector('form');
var diva = document.createElement('div');
theForm.appendChild(diva);

var a = document.createElement('input');
a.setAttribute("value", sex);
a.setAttribute("type", "checkbox");
a.setAttribute("name", "Gender");
a.required = true;
diva.appendChild(a);

var agreement = document.createElement('p');
agreement.textContent = "Check here if you agree to love your new pet!";
diva.appendChild(agreement);

var divb = document.createElement('div');
theForm.appendChild(divb);

var b = document.createElement('input');
b.setAttribute("value", color);
b.setAttribute("type", "checkbox");
b.setAttribute("name", "Fur")
b.required = true;
divb.appendChild(b);

var agreement2 = document.createElement('p');
agreement2.textContent = "Check here if your state allows the keeping of exotic pets";
divb.appendChild(agreement2);


var button = document.createElement('button');
button.setAttribute("type", "submit");
button.innerHTML = "Happiness is only one more click away!"
theForm.appendChild(button);
