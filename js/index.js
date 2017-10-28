window.onload=function(){
   var btn=document.querySelector(".btn")
   var bar=document.querySelector(".bar")
	bar.style.display="none";
	
	btn.onclick=function(){
		if(bar.style.display=="none"){
                   bar.style.display="block";
		}else{
			bar.style.display="none";}

	}




}
