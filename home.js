
        var icon = document.getElementById("icon");
         icon.onclick = function(){
            document.body.classList.toggle("dark-mode");
            
            if(document.body.classList.contains("dark-mode")){
                icon.src = "images/light.png";
            }else{
                icon.src = "images/moon.png";
            } 
            
        }
 
        function loadCoupon(){
            document.getElementById('coupon').style.visibility = 'visible';
            document.getElementById('main').style.opacity = '0.3'
        }
        
        function closeCoupon(){
            document.getElementById('coupon').style.visibility = 'hidden';
            document.getElementById('main').style.opacity = '1'
        }

       

        
       
  