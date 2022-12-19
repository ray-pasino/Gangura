var MenuItems = document.getElementById("MenuItems");

MenuItems.style.height = "0px";


function menutoggle() {


   
   if ( MenuItems.style.height == "0px") {

   MenuItems.style.height = "200px";

   }
   else {
       MenuItems.style.height = "0px";

   }

}