
function mostraSobre(){
	document.getElementsByClassName('home')[0].style.display = 'none';
	document.getElementsByClassName('sobre')[0].style.display = 'block';
	document.getElementsByClassName('experiencia')[0].style.display = 'none';
	document.getElementsByClassName('formacao')[0].style.display = 'none';
	document.getElementsByClassName('curso')[0].style.display = 'none';
	document.getElementsByClassName('contato')[0].style.display = 'none';
}
function mostraHome(){
	document.getElementsByClassName('sobre')[0].style.display = 'none';
	document.getElementsByClassName('home')[0].style.display = 'block';
	document.getElementsByClassName('experiencia')[0].style.display = 'none';
	document.getElementsByClassName('formacao')[0].style.display = 'none';
	document.getElementsByClassName('curso')[0].style.display = 'none';
	document.getElementsByClassName('contato')[0].style.display = 'none';
}
function mostraExperiencia(){
	document.getElementsByClassName('sobre')[0].style.display = 'none';
	document.getElementsByClassName('home')[0].style.display = 'none';
	document.getElementsByClassName('experiencia')[0].style.display = 'block';
	document.getElementsByClassName('formacao')[0].style.display = 'none';
	document.getElementsByClassName('curso')[0].style.display = 'none';
	document.getElementsByClassName('contato')[0].style.display = 'none';
}
function mostraFormacao(){
	document.getElementsByClassName('sobre')[0].style.display = 'none';
	document.getElementsByClassName('home')[0].style.display = 'none';
	document.getElementsByClassName('experiencia')[0].style.display = 'none';
	document.getElementsByClassName('formacao')[0].style.display = 'block';
	document.getElementsByClassName('curso')[0].style.display = 'none';
	document.getElementsByClassName('contato')[0].style.display = 'none';
}
function mostraCursos(){
	document.getElementsByClassName('sobre')[0].style.display = 'none';
	document.getElementsByClassName('home')[0].style.display = 'none';
	document.getElementsByClassName('experiencia')[0].style.display = 'none';
	document.getElementsByClassName('formacao')[0].style.display = 'none';
	document.getElementsByClassName('curso')[0].style.display = 'block';
	document.getElementsByClassName('contato')[0].style.display = 'none';
}
function mostraContato(){
	document.getElementsByClassName('sobre')[0].style.display = 'none';
	document.getElementsByClassName('home')[0].style.display = 'none';
	document.getElementsByClassName('experiencia')[0].style.display = 'none';
	document.getElementsByClassName('formacao')[0].style.display = 'none';
	document.getElementsByClassName('curso')[0].style.display = 'none';
	document.getElementsByClassName('contato')[0].style.display = 'block';
}