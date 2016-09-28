console.log('connected');


  var locate = window.location.search


  // var text = document.pet.gender.value
  // var text2 = document.pet.color.value

  function delineate(str) {
    theLeft = str.indexOf("=") + 1;
    theRight = str.lastIndexOf("&");
    return(str.substring(theLeft, theRight));
  }


  function delineate2(str) {
    point = str.lastIndexOf("=");
    return(str.substring(point+1,str.length));
  }

  console.log("You adopted a " + delineate(locate) )

