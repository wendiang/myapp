window.onload=function(){
  function $(dom){
  
  var dom=document.querySelectorAll(dom)
	  for(var i=0;i<dom.length;i++){
	  return dom[i];

	  
	  
	  }
  
  
  }

 function on(even,type,fn){
     even.addEventListener(type,fn,false);
 
 
 }


   on($(".btn"),"click",function(){alert(4444)})

}


