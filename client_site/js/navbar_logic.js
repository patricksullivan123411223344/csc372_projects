document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navLogic");
    let prevNavState = window.pageYOffset;

    window.addEventListener("scroll", function () {
         const currentNavState = this.window.pageYOffset;
         if (prevNavState > currentNavState) {
            navBar.style.top = "0";
         } else {
            navBar.style.top = '-{$navBar.offsetHeight}px';
         }
         
         privNavState = currentNavState;
        });
}); 

console.log("JS has loaded. navBar:", navBar?.id, "class:", navBar?.classname) 