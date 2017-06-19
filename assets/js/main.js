var name = document.getElementById("usuarioId");
var pass = document.getElementById("pwId");

document.getElementById("buttonId").addEventListener("click", function(val){

	if(name.value == ""){
			
		name.classList.add('showInput');
	}else{
		name.classList.remove('showInput');
	}

	if(pass.value.length < 6 || pass.value == "123456"){
		pass.classList.add('showInput');
	}else{
		pass.classList.remove('showInput');
	}

	if(name.value != "" && pass.value.length >= 6 && pass.value != "123456"){

		document.getElementById("linkId").setAttribute("href", "home.html");
	}
	
});


function drag(ev) {
  console.log(ev.target.src);
  ev.dataTransfer.setData('text', ev.target.id);
}

function permitirDrop(ev){
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var id_foto = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(id_foto));
}