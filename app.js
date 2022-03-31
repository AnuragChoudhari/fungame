

function plays(){

    var btntext = document.getElementById('btn');
    if(btntext.innerHTML=="Test your IQ! Click here"){
    var x = parseInt(prompt("What is 2 + 2?"));
  
    if(x==4){
        var wins =  document.getElementById('myVideo');
        var textonvid = document.getElementById('text1');
        textonvid.innerHTML = "Congratulations! 🤍🎉";
        wins.style.display = "block";
        var btntext = document.getElementById('btn');
        btntext.innerHTML = "Try again!";

        wins.play();
      
    }
    else{
    var vid =  document.getElementById('myVideo2');
    var textonvid = document.getElementById('text1');
    textonvid.innerHTML = "Bhai kya kar raha he tu ? 😀";
    vid.style.display = "block";
    var btntext = document.getElementById('btn');
    vid.play();
    btntext.innerHTML = "Try again!";   
    Event.preventDefault();
}

}
}

