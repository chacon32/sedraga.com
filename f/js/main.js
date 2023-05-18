

  function nComentario(){
            let li = document.createElement("li");
            let valoringresado = document.getElementById("nuevoComentario").value;
            let text = document.createTextNode(valoringresado);
            li.appendChild(text);

            if(valoringresado === ''){
                alert("Ingrese un comentario")
            } else{
                document.getElementById("comentarios").appendChild(li);
            }

            document.getElementById("nuevoComentario").value = "";
            li.className = "comentario";

            let borrar = document.createElement("p");
            borrar.innerHTML = ("borrar")
            borrar.className = "cerrar";
            li.appendChild(borrar);

            let close = document.createElementClassName("cerrar");
            let i;
            for (i = 0; i < close.length; i++){
                close[i].onclick = function(){
                    let div = this.parentElement;
                    div.style.display = "none"
                }
            }
         }


let add = () => {
let name = document.querySelector('.container #name'); 
let comment = document.querySelector('.container #comment'); 
 
if (name.value !== "" && comment.value != "") { 
 
let list = document.querySelector('.list'); 
let time = new Date();
let h = time.getHours(); 
let m = time.getMinutes(); 
let s = time.getSeconds(); 
let now = h + " : " + m + " : " + s;
let list_item = document.createElement ("l1"); 
 
list_item.innerHTML = `
<span>
<p>${name.value} ${now}</p> 
</span>
<p>${comment.value}</p>
`;
list.append(list_item); 
}
 
if (name.value == "" || comment.value == "") {
let list = document.querySelector('.list'); 
let list_item = document.createElement ("l2"); 
var warn = 'Please enter name & comment!';  
list_item.innerHTML = `
<span>
<p>${warn}</p> 
</span>
`;
list.append(list_item); 
 }
name.value=comment.value = "";
}


          

       