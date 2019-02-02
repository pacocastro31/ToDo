var ul = document.getElementById("lista");
ul.addEventListener("click",function(ev){
  var element = ev.target;
  if(element.type === "checkbox"){
    element.nextSibling.classList.toggle("done");
  }
});

let checkboxes = document.getElementsByName("todo");
let input = document.getElementById("newitem");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if(newitem.value != ""){
        var node = document.createElement("LI");
        var span = document.createElement("span");
        var newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox";
        newCheckBox.name = "todo";
        newCheckBox.value = checkboxes.length;

        var textNode =document.createTextNode(newitem.value);
        node.appendChild(newCheckBox);
        node.appendChild(span);
        span.appendChild(textNode);
        

        document.getElementById("lista").appendChild(node);
        newitem.value = "";
        alert("se añadio correctamente")
    }
    else{
        alert("Invalido. Añade un valor");
    }
    }
});