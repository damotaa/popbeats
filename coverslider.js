const coverimg  = document.querySelector(".cover"); /* Selects the class "cover" where image from "albums" are placed  */


let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {   /* Define Starting point in X axys   */
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = coverimg.scrollLeft;
}


const dragging = (e) => { /* Define behaviour when dragging  */
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    coverimg.scrollLeft = prevScrollLeft - positionDiff;
    
}

const dragStop = () => { /* Define stop point   */
    isDragStart = false;
}

/* Define mouse behaviour by selecting variable  */
coverimg.addEventListener("mousedown", dragStart);
coverimg.addEventListener("mousemove", dragging);
coverimg.addEventListener("mouseup", dragStop);



coverimg.addEventListener("touchstart", dragStart);
coverimg.addEventListener("touchmove", dragging);
coverimg.addEventListener("touchleave", dragStop);
