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
        }, 2000);
    }, 2000);
    }, 2000);
    /**
     * funcion de mostrar ocultar
     */

    function hideShowMessage(id){
    if(id=="paso1"){
        document.getElementById("message-1").classList.add("hide")
        document.getElementById("message-2").classList.replace("hide", "show");
        document.getElementById("message-2").classList.add("animate-zoom")
    }else if(id=="paso2"){
        document.getElementById("message-2").classList.replace("show","hide");
        document.getElementById("message-2").classList.add("animate-zoom")
        document.getElementById("message-3").classList.replace("hide", "show");
        document.getElementById("message-3").classList.add("animate-zoom")
    }
    }
    /**
     * Seccion de los eventListener
     */
    document.getElementById("btn_1").addEventListener("click",(e)=>{
        hideShowMessage("paso1")
    })

    document.getElementById("btn_2").addEventListener("click",(e)=>{
        hideShowMessage("paso2")
    })