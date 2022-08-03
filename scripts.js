var screen = screen.width;
console.log(screen);
if(screen <= 725)
{
    var menuBars = document.getElementById("menu_icon");
    var closeIcon = document.getElementById("close_icon");
    var menu = document.getElementById("nav_items");
    menuBars.addEventListener("click", expandMenu);
    closeIcon.addEventListener("click", collapseMenu);

    menu.style.display = "none"
    function expandMenu(){
        if(menu.style.display == "none")
        {
            menu.style.display = "block";
            menuBars.style.display = "none";
            closeIcon.style.display = "block";
            console.log("clicked menu"); 
        }

    }

    function collapseMenu()
    {
        if(menu.style.display == "block")
        {
            menu.style.display = "none";
            menuBars.style.display = "block";
            closeIcon.style.display = "none";
        }
    }

}
