var icon = document.getElementById("icon");
         icon.onclick = function(){
            document.body.classList.toggle("dark-mode");
            if(document.body.classList.contains("dark-mode")){
                icon.src = "images/light.png";
            }else{
                icon.src = "images/moon.png";
            }
         }