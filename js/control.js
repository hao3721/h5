/**
 * Created by ASUS on 2016/11/1.
 */
window.onload = function(){
    var music=document.getElementById("disc");
    var audio=document.getElementsByTagName("audio")[0];

    var page1=document.getElementById("page1");
    var page2=document.getElementById("page2");
    var page3=document.getElementById("page3");
    //music.onclick = function(){
    //    if(audio.paused){
    //        audio.play();
    //        this.setAttribute("class","play");
    //    }
    //    else{
    //        audio.pause();
    //        this.setAttribute("class","");
    //    }
    //}
    music.addEventListener("touchstart",function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
        }
        else{
            audio.pause();
            this.setAttribute("class","");
        }

    })
    page1.addEventListener("touchstart",function(event){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";

        setTimeout(function(){
            page2.setAttribute("class","page fadeout");
            page3.setAttribute("class","page fadein");
        },6000)
    })

}

