(function(){
  var App=function(content){
     this.content=document.querySelector(content||".content")
     this.item=this.content.getElementsByTagName("*")
     
     this.boxArr=new Array()
     this.box=this.getbox(this.item);
     this.hArr=new Array()
     this.minh=0;
     this.index=0;

     for(var i=0;i<this.box.length;i++){
          if(i<2){
          	this.hArr.push(this.box[i].offsetHeight)
          }else{
          	this.minh=Math.min.apply(null,this.hArr)
            this.index=this.getindex(this.hArr,this.minh)
            this.box[i].style.position="absolute"
            this.box[i].style.top=this.minh+"px"
            this.box[i].style.left=this.box[this.index].offsetLeft+"px"
            this.hArr[this.index]+=this.box[i].offsetHeight;
          }
        
     }
     
     
  }
  App.prototype.getbox=function(item){
     for(var i=0;i<item.length;i++){
     	if(item[i].className=="item"){
     		this.boxArr.push(item[i])
     	}
     }
      return this.boxArr;
     

  }
  App.prototype.getindex=function(arr,minh){
     for(var i in arr){
     	if(arr[i]==minh){
     		return i;
     	}
     }


  }

var app=new App()

var Btn=function(btn,bar){
       this.btn=document.querySelector(btn||".btn")
        var bar=document.querySelector(bar||".bar")

        bar.style.display="none"
        var self=this;
      this.btn.addEventListener("click",fn)
     function fn(){
     	if(bar.style.display=="none"){
     		self.open()
     		bar.style.display="block"
     	}else{
     		self.close()
     		bar.style.display="none"
     	}
     }   

}

Btn.prototype.open=function(){
   console.log("打开")
   
}
Btn.prototype.close=function(){
   console.log("关闭")
  
}
var btn=new Btn()
})()
