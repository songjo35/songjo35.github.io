let myHeading =document.querySelector('h1');
myHeading.textContent='BUL경 읽기';

img_doc = document.querySelector('img')
img_doc.onclick=function(){
	let id_src = img_doc.getAttribute('src');
	if(id_src == 'images/pinecone.jpg'){
		img_doc.setAttribute('src', 'images/logo.jpg');
	}else{
		img_doc.setAttribute('src', 'images/pinecone.jpg');
	}
	
}
let storage_name = 	localStorage.getItem('name');
if(storage_name !=null){
	document.querySelector('h1').textContent = storage_name+'하이';
}else{
	setName();
}
document.querySelector('button').onclick=function(){
	setName();
}
function setName(){
	let input = prompt("please enter your name");
	localStorage.setItem('name', input);
	document.querySelector('h1').textContent = input+'하이'
}
/*img_doc.onclick = function() {
	let id_src = imgdoc.getAttribute('src');
	if(id_src === 'images/pinecone.jpg'){
		img_doc.setAttribute('src', 'images/pants.jpg');
	}else{
		img_doc.setAttribute('src', 'images/pinecone.jpg');
	}
    alert('Ouch! Stop poking me!');
}*/