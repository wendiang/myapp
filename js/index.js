var content=document.querySelector(".content");
  var item=content.getElementsByTagName("*");
  var boxArr= new Array();
   for(var i=0;i<item.length;i++){
   if(item[i].className=="item"){
   
     boxArr.push(item[i]);
   
   }

   
   
   
   }
   var hArr=new Array();
   var minh;
   for(var i=0;i<boxArr.length;i++){
      if(i<2){
      
      hArr.push(boxArr[i].offsetHeight)
      
      }else{
             minh=Math.min.apply(null,hArr);
	      var index=getindex(hArr,minh)
	      
             boxArr[i].style.position="absolute";
	      boxArr[i].style.top=minh+"px";
	      boxArr[i].style.left=boxArr[index].offsetLeft+"px";
	      
              
             hArr[index]+=boxArr[i].offsetHeight;

	  

      
      }
   
   
   }

 function getindex(arr,minh){
 
   for(var i in arr){
   if(arr[i]==minh){
   return i;
   
   }
   
   }
 
 
 } 

