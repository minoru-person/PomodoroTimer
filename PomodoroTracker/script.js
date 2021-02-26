document.getElementById("startTimer").addEventListener("click", startNow);

function startNow(){
    
    var myDuration = document.getElementById('duration').value;
    
    myDuration = myDuration/1;
    
    // if user inputs invalid number, show error
    if (myDuration !== myDuration ){
	return alert("Please enter a valid time");
    }

    // if user inputs 0, throw error
    if (myDuration == 0){
        return alert("Please enter a valid time");
    }
    
    // convert number into milliseconds.
    myDuration = 60000*myDuration;
    
    // start timer
    var myTimer = setTimeout(function(){
        var audio = new Audio('eating3.mp3');
	audio.play();
        audio.loop = true;	
    }, myDuration);

    // Display notification
    document.getElementById("timer").innerHTML = (myDuration/60000) + " min" ;

    var countTimer;
    var elapsedMinute;

    countTimer = 0;
    elapsedMinute = 0;

    var x = setInterval(function(){

	document.getElementById("countDown").innerHTML = countTimer;
	   document.getElementById("elapsedTime").innerHTML = elapsedMinute + " min elapsed";

	if(countTimer == (myDuration/1000)){
	    document.getElementById("timer").innerHTML = "Times Up!!!" ;
	    //document.getElementById("countDown").innerHTML = "";
	    //clearInterval(x);
	    //countTimer = 0;
	};

	if(countTimer!==0 && countTimer % 60 == 0){
	    elapsedMinute++;
	    document.getElementById("elapsedTime").innerHTML = elapsedMinute + " min elapsed";
	}
	
	countTimer++;
    },1000);

    document.getElementById("reloadTimer").addEventListener("click", reloadTimer);
    
    function reloadTimer(){
	document.getElementById("timer").innerHTML = ""
	document.getElementById("countDown").innerHTML = "";
	document.getElementById("elapsedTime").innerHTML = "";
	clearInterval(x);
        clearTimeout(myTimer);
	document.getElementById("startTimer").disabled = false;
	location.reload();
    }
    document.getElementById("startTimer").disabled = true;
};

document.getElementById("freeze").addEventListener("click",FreezeButton);
document.getElementById("unfreeze").addEventListener("click",UnFreezeButton);

function FreezeButton(){
    $(".studysub").attr('readonly', 'readonly');
    $(".studycheckbox").attr('disabled', 'disabled');
    $(".timeBox").attr('readonly', 'readonly');
}

function UnFreezeButton(){
    $(".studysub").attr('readonly', false);
    $(".studycheckbox").attr('disabled', false);
    $(".timeBox").attr('readonly', false);
}

document.getElementById("study1time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study2time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study3time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study4time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study5time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study6time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study7time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study8time").addEventListener("input", myTotalStudyTime1)
document.getElementById("study9time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study10time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study11time").addEventListener("input", myTotalStudyTime1);
document.getElementById("study12time").addEventListener("input", myTotalStudyTime1);

function myTotalStudyTime1(){
    
    var x = document.getElementById("study1time").value;
    var y = document.getElementById("study2time").value;
    var z = document.getElementById("study3time").value;
    var a = document.getElementById("study4time").value;
    var b = document.getElementById("study5time").value;
    var c = document.getElementById("study6time").value;
    var d = document.getElementById("study7time").value;
    var e = document.getElementById("study8time").value;
    var f = document.getElementById("study9time").value;
    var g = document.getElementById("study10time").value;
    var h = document.getElementById("study11time").value;
    var i = document.getElementById("study12time").value;
    
    document.getElementById("total1").innerHTML = Number(x) + Number(y) + Number(z) + Number(a) + Number(b)+Number(c)+Number(d)+Number(e)+Number(f)+Number(g)+Number(h)+Number(i);
}

document.getElementById("testAudio").addEventListener("click", testAlarm);

var audio = new Audio('eating3.mp3');

function testAlarm(){
    audio.play();
    setTimeout(function(){
	audio.pause();
    },3000);
}

