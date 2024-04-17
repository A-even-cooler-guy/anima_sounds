function startClassify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XiMh-y0hZ/model.json" , modelReady);
    
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }
    
    function gotResults(error,results){
        var cat=0;
        var dog=0;
        var cow=0;
        var lion=0;
    if(error){
        console.log("ERROR 101 brace for explosion" , error)   
    }
    else{
    console.log(results)
    random_numR=Math.floor( Math.random()*255)+1;
    random_numG=Math.floor( Math.random()*255)+1;
    random_numB=Math.floor( Math.random()*255)+1;
    
    document.getElementById("result_name").innerHTML="I can hear-" + results[0].label;
    document.getElementById("result_accuracy").innerHTML="Accuracy-" + (results[0].confidence*100).toFixed(3)+"%";
    
    document.getElementById("result_name").style.color="rgb(" + random_numR +","+ random_numG +","+ random_numB +")";
    document.getElementById("result_accuracy").style.color="rgb(" + random_numR +","+ random_numG +","+ random_numB +")";
    
    img1=document.getElementById("cat");
    img2=document.getElementById("lion");
    img3=document.getElementById("cow");
    img4=document.getElementById("doggo");
    
    if(results[0].label=="Cat"){
        img1.src="cat.gif";
        img2.src="lion.gif";
        img3.src="cow.png";
        img4.src="doggo.png";
  
   
    }
    else if(results[0].label=="Doggo"){
     
       img1.src="cat.jpg";
       img2.src="lion.gif";
       img3.src="cow.png";
       img4.src="doggo-doge.gif";
        }
    
    else if(results[0].label=="Lion"){
        img1.src="cat.jpg";
        img2.src="lion1.gif";
        img3.src="cow.png";
        img4.src="doggo.png";
        }
        else if(results[0].label=="Cow"){
       img1.src="cat.jpg";
       img2.src="lion.gif";
       img3.src="polish-cow-icegif.gif";
       img4.src="doggo.png";
             }
       
    }
    }