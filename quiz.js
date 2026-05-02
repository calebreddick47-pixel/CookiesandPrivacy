function submitQuiz(){
    let score=0;
    let total=5;
    let results="";

    // Question 1(fill in the blank)
    let q1=document.getElementById("q1").value.toLowerCase();

    if(q1==="data"){
        score++;
        results+="<p style='color:green;'>Q1: Correct</p>";
    } else{
        results+="<p style='color:red;'>Q1: Incorrect (Answer: data)</p>";
    }


    //Question 2(radio)
    let q2=document.querySelector('input[name="q2"]:checked');
    
    if(q2&&q2.value === "b"){
        score++;
        results+="<p style='color:green;'>Q2: Correct</p>";
    } else{
        results+="<p style='color:red;'>Q2: Incorrect (Answer: b)</p>";
    }


    //Question 3
    let q3=document.querySelector('input[name="q3"]:checked');

    if (q3&&q3.value ==="a"){
        score++;
        results+="<p style='color:green;'>Q3: Correct</p>";
    } else{
        results+="<p style='color:red;'>Q3: Incorrect (Answer: a)</p>";
    }

    
    //Question 4
    let q4=document.querySelector('input[name="q4"]:checked');

    if (q4&&q4.value ==="a"){
         score++;
         results+="<p style='color:green;'>Q4: Correct</p>";
    
    } else{
        results+="<p style='color:red;'>Q4: Incorrect (Answer: a)</p>";
    }


    //Question 5 (checkbox-multiple select)
    let q5=document.querySelectorAll('input[name="q5"]:checked');

    let selectedAnswers=[];
    q5.forEach(function(box) {
        selectedAnswers.push(box.value);
    });

    let correctAnswers=["a","c"];

    if(
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(val=>correctAnswers.includes(val))
    ){
         score++;
         results+="<p style='color:green;'>Q5: Correct</p>";
    } else{
        results+="<p style='color:red;'>Q5: Incorrect (Answers: a & c)</p>";
    }


    //Final Score
    let percent=(score/total)*100;
    let passFail=percent>=70? "PASS" : "FAIL";

    document.getElementById("results").innerHTML =
         `<h2>Score:${score}/${total} (${percent}%)</h2>
         <h2>${passFail}</h2>`+results;

}


function resetQuiz(){
    document.getElementById("quizForm").reset();
    document.getElementById("results").innerHTML ="";
}