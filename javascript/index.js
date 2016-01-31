window.onload=function(){

	var el=document.getElementsByClassName('lb'),
		show=document.getElementById('show'),
		els=document.getElementsByClassName('lb-list');

	var left=1,OFFWIDTH=(-show.firstElementChild.offsetWidth);
	var provious=null;
	var kaiguan=true;

	var fn=function(){
		els[left].style.background='#ccc';
		els[left].style.webkitTransform='scale3d(1.1,1.1,1.1)';
		if(provious!==null){
			provious.style.background='#606060';
			provious.style.webkitTransform='scale3d(1,1,1)';
		}
		show.style.marginLeft=left*OFFWIDTH+'px';
		provious=els[left];
		left+=1;
		if (left==el.length) {left=0;};
	};
	
	var td1=setInterval(fn,1000);
	
	





	for(var i=0;i<el.length;i++){
		el[i].index=i;
		el[i].onmouseover=function(){
			clearInterval(td1); 
		}
		el[i].onmouseout=function(){
			clearInterval(td1);
			td1=setInterval(fn,1000)
		}
		// els[this.index].onclick=function(){
		// 	el[this.index].style.marginLeft=this.index*OFFWIDTH+'px';
		// 	els[this.index].style.background='red';
		// // 	console.log(els[this.index]);
		// }
	}




	for(var i=0;i<els.length;i++){
		els[i].aa=i
		els[i].onclick=function(){

			provious.style.background='#606060';
			provious.style.webkitTransform='scale(1.0)';
			
			show.style.marginLeft=this.aa*OFFWIDTH+'px';
			this.style.background='#ccc';
			this.style.webkitTransform='scale(1.1)';
			// el[this.aa].style.marginLeft=*OFFWIDTH+'px';
			provious=this;
			clearInterval(td1);
		}
		
		// els[i].onmouseover=function(){
		// 	// provious.style.background='#606060';
		// 	this.style.background='#CCC';

		// 	// provious=this;
		// }
	}


var l=document.getElementById('span-l'),
	r=document.getElementById('span-r');

r.onclick=function(e){
		e.propagation()
		fn();
		clearInterval(td1);
	}
r.onmouseover=function(){
	r.style.background='rgba(20,20,20,0.8)';
}
r.onmouseout=function(){
	r.style.background='none';
}

l.onmouseover=function(){
	l.style.background='rgba(20,20,20,0.8)';
}
l.onmouseout=function(){
	l.style.background='none';
}
l.onclick=function(){
	clearInterval(td1);
	var fn2=function(){
	
	if (left==0) {left=el.length;}
	left-=1;
	show.style.marginLeft=left*OFFWIDTH+'px';
	if(provious!==null){
		provious.style.background='#606060';
		provious.style.webkitTransform='scale(1)';
	}
	els[left].style.background='#ccc';
	els[left].style.webkitTransform='scale(1.1)';
	provious=els[left];	
	}();
	left=left;
	
}


}