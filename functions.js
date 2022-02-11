
score=0;
counter=0;
wrong=0;
function result(res, answer, q_num){
    if (res=="correct"){
        console.log("richtig");
        document.getElementById('corr'+q_num).id="correct";
        score+=1;
        counter=2;
        console.log("Score: "+score);
    }
    else if (res=="wrong" && answer==1){
        console.log("Score_answer1: "+score);
        document.getElementById('wro1'+q_num).id="wrong1";
        document.getElementById('comment'+q_num).innerHTML="Try again";
        wrong++; counter++;
        console.log("Wrong: "+wrong);
    }
    else if (res=="wrong" && answer==2){
        console.log("Score_answer2: "+score);
        document.getElementById('wro2'+q_num).id="wrong2";
        document.getElementById('comment'+q_num).innerHTML="Try again";
        wrong++; counter++;
        console.log("Wrong: "+wrong);
    }
    else{
        console.log("Score_answer3: "+score);
        document.getElementById('wro3'+q_num).id="wrong3";
        document.getElementById('comment'+q_num).innerHTML="Try again";
        wrong++; counter++;
        console.log("Wrong: "+wrong);
    }
    document.getElementById('kleinbild'+q_num).className="mx-auto img-thumbnail col-7 col-md-5 col-xl-3";
    document.getElementById('comment'+q_num).style.display="block";
    document.getElementById('weiter'+q_num).style.display="inline-block";
    if (counter==2){result_of_question(q_num, res)}
    return
}

function cont(question){
    if (question<5){
        num=question+1;
        element_before="question"+(num-1);
        element="question"+num;
        document.getElementById(element).style.display="block";
        document.getElementById(element_before).style.display="none";
        document.getElementById('comment'+question).style.display="none";
        document.getElementById("weiter"+question).style.display="none";
    }
    else{
        console.log("Score: "+score);
        r=score-wrong;
        console.log("Gesamt: "+r);
        document.getElementById("question5").style.display="none";
        document.getElementById('comment'+question).style.display="none";
        document.getElementById("weiter"+question).style.display="none";
        document.getElementById("achievement").innerHTML="Congratluation on finishing this quiz. You achieved a score of "+r+" ("+score+" correct answers and "+wrong+" wrong answers).";
        document.getElementById("achievement2").innerHTML="See what the score means";
        document.getElementById("interpretation").style.display="inline-block";
        enable_result(question);
    }
    return
}

function result_of_question(q_num, res){
    console.log("Wrong: "+wrong);
    console.log("Score: "+score);
    if (res!="correct"){
        document.getElementById('corr'+q_num).id="correct";
    }
    document.getElementById('comment'+q_num).innerHTML="";
    counter=0;  
}

function enable_result(question){
    if (question==5){
        el=document.getElementsByClassName("disabled-link")
        el[0].classList.remove("disabled-link")
    }   
    console.log("Question: "+question);
}

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    var get_caption= document.getElementsByClassName("get_alt");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log(slides[i].alt);
    }
    console.log("SlideIndex: "+slideIndex);
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = get_caption[slideIndex-1].alt;
  }