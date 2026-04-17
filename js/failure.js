    /**
     * animacion de entrada
     */
    const title = document.getElementById("dungeon-name");
    title.classList.replace("hide", "show");
    title.classList.add("animate-zoom"); 
    setTimeout(()=> {
    title.classList.replace("animate-zoom", "animate-zoom-out");
    setTimeout(()=> {
        title.classList.replace("show", "hide");
        setTimeout(()=> {
        document.getElementById("message-container").classList.replace("hide", "show");
        document.getElementById("message-container").classList.add("animate-zoom");
        }, 1000);
    }, 1000);
    }, 2000);
