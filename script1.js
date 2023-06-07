//variables to track answers
var missing = false;
function answerMissing(bool) {
if (bool = false) {
    missing = false;
}
if (bool = true) {
    missing = true;
}
}


function submitQuiz() {
    var alpha = 0;
    var beta = 0;
    var zesty = 0;
    var sigma = 0;

    //q1
    if (document.getElementById('1-1').checked) {
        alpha++;
    } else if (document.getElementById('1-3').checked) {
        zesty++;
    } else if (document.getElementById('1-4').checked) {
        sigma++;
    } else if (document.getElementById('1-2').checked) {
        beta++;
    } 
    
    //q2
    if (document.getElementById('2-1').checked) {
        alpha++;
    } else if (document.getElementById('2-2').checked) {
        beta++;
    } else if (document.getElementById('2-3').checked) {
        zesty++;
    } else if (document.getElementById('2-4').checked) {
        sigma++;
    } 
    
    //q3
    if (document.getElementById('3-1').checked) {
        alpha++;
    } else if (document.getElementById('3-2').checked) {
        beta++;
    } else if (document.getElementById('3-3').checked) {
        zesty++;
    } else if (document.getElementById('3-4').checked) {
        sigma++;
    } 
    
    //q4
    if (document.getElementById('4-1').checked) {
        beta++;
    } else if (document.getElementById('4-2').checked) {
        alpha++;
    } else if (document.getElementById('4-3').checked) {
        zesty += 10000;
    } else if (document.getElementById('4-4').checked) {
        sigma++;
    } 
    
    //q5
    if (document.getElementById('5-1').checked) {
        beta++;
    } else if (document.getElementById('5-2').checked) {
        alpha++;
    } else if (document.getElementById('5-3').checked) {
        zesty++;
    } else if (document.getElementById('5-4').checked) {
        sigma++;
    } 
    
    //q6
    if (document.getElementById('6-1').checked) {
        beta++;
    } else if (document.getElementById('6-2').checked) {
        alpha++;
    } else if (document.getElementById('6-3').checked) {
        zesty++;
    } else if (document.getElementById('6-4').checked) {
        sigma++;
    } 
    
    //q7
    if (document.getElementById('7-1').checked) {
        alpha++;
    } else if (document.getElementById('7-2').checked) {
        beta++;
    } else if (document.getElementById('7-3').checked) {
        zesty++;
    } else if (document.getElementById('7-4').checked) {
        sigma++;
    } 

    //q8
    if (document.getElementById('8-1').checked) {
        alpha++;
    } else if (document.getElementById('8-2').checked) {
        beta++;
    } else if (document.getElementById('8-3').checked) {
        zesty++;
    } else if (document.getElementById('8-4').checked) {
        sigma++;
    } 

    //q9
    if (document.getElementById('9-1').checked) {
        alpha++;
    } else if (document.getElementById('9-2').checked) {
        beta++;
    } else if (document.getElementById('9-3').checked) {
        zesty++;
    } else if (document.getElementById('9-4').checked) {
        sigma++;
    } 
    
    var finalChoice = 0;
    
    console.log("Zesty: " + zesty);
    console.log("Alpha: " + alpha);
    console.log("Beta: " + beta);
    console.log("Sigma: " + sigma);

    if (alpha > beta & alpha > zesty & alpha > sigma) {
        console.log("Alpha");
        finalChoice = 1;
    } else if (beta > alpha & beta > zesty & beta > sigma) {
        console.log("Beta");
        finalChoice = 2;
    } else if (zesty > beta & zesty > alpha & zesty > sigma) {
        console.log("Zesty");
        finalChoice = 3;
    } else if (sigma > beta & sigma > alpha & sigma > zesty) {
        console.log("Sigma");
        finalChoice = 4;
    } else {
        console.log("Tie");
        finalChoice = 5;
    }

    console.log(finalChoice);

    const results = document.getElementById('results');

    if (finalChoice === 1) {
        results.innerHTML = "<h1>You are an Alpha</h1> <p>You are the dominant epic alpha male!</p> <img src='chad.jpg' height='288' width='512'>'"
    } else if (finalChoice === 2) {
        results.innerHTML = "<h1>You are a Beta</h1> <p>You are the inferior specimen.<p> <img src='beta.jpg' height='288' width='512'>'"
    } else if (finalChoice === 3) {
        results.innerHTML = "<h1>You are Zestylicious</h1> <p>You are a zesty fruity bootyliscious specimen.<p> <img src='liam.jpg' height='288' width='512'>'"
    } else if (finalChoice === 4) {
        results.innerHTML = "<h1>You are a Sigma</h1> <p>You are the top of the top sigma lone wolf epic chad.<p> <img src='lone wolf.jpg' height='288' width='512'>'"
    } else if (finalChoice === 5) {
        results.innerHTML = "<h1>You are mysterious</h1> <p>You are a person shrouded in mystery no one knows too much about you?<p> <img src='dude.jpg' height='288' width='512'>'"
    }

}