


var playing= false;
var score=0;
var curr_time=60;
var timerr;
var correct;
var correct_bttn;

/* click on start/reset */
document.getElementById("startReset").onclick=function()
{
    
    if(playing)
    {
        /* reload page */
        location.reload();
        score=0;
    }
    else
    {
        playing=true;
        window.console.log(playing);
     
        score=0; document.getElementById("score_val").innerHTML=score;
        
       
        //show time
        document.getElementById("time").style.display="block";
        
        //change start to reset
        document.getElementById("startReset").innerHTML="Reset";
        
        
        window.console.log(curr_time);
        
        countDown();
        
        window.console.log("out");
        
        window.console.log(document.getElementsByClassName("box")[2]);
        
        QandA();
        
    }
    
    
    
}

document.getElementById("box1").onclick=function()
{
    if(correct_bttn==1)
        score++;
    else
        score--;
    QandA();
}

document.getElementById("box2").onclick=function()
{
    if(correct_bttn==2)
        score++;
    else
        score--;
    QandA();
}

document.getElementById("box3").onclick=function()
{
    if(correct_bttn==3)
        score++;
    else
        score--;
    QandA();
}

document.getElementById("box4").onclick=function()
{
    if(correct_bttn==4)
        score++;
    else
        score--;
    QandA();
}


function countDown()
{
    timerr=setInterval(function()
    {
       curr_time--; document.getElementById("remainingTime").innerHTML=curr_time;
        document.getElementById("score_val").innerHTML=score;
        if(curr_time==0)
        {
            gameOver();
        }
    },1000);
}


function gameOver()
{
    window.console.log(curr_time);
    clearInterval(timerr);
    
    document.getElementById("over").style.display="block";
    document.getElementById("overScore").innerHTML=score;
    playing=false;
}


function QandA()
{
    var x=Math.round( Math.random()*9 ) + 1;
    var y=Math.round( Math.random()*9 ) + 1;
    correct=x*y;
    
    
    document.getElementById("question").innerHTML=x+"x"+y;
    
    correct_bttn=1+Math.round( Math.random()*3 );
    
    for(i=1;i<5;i++)
    {    
       
       if(correct_bttn==i)
           document.getElementById("box"+i).innerHTML=correct;
        else
            document.getElementById("box"+i).innerHTML=(Math.round( Math.random()*9 ) + 1 ) * (  Math.round( Math.random()*9 ) + 1 );
    }
    
}
