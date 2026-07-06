const totalPages = 68;

const book = document.getElementById("book");

let page = 1;

function draw(){

    book.innerHTML = "";

    // Cover
    if(page===1){

        const img=document.createElement("img");

        img.src=`pages/${String(1).padStart(2,"0")}.jpg`;

        img.className="page single";

        img.onclick=next;

        book.appendChild(img);

        return;
    }

    // Back cover
    if(page===totalPages){

        const img=document.createElement("img");

        img.src=`pages/${String(totalPages).padStart(2,"0")}.jpg`;

        img.className="page single";

        img.onclick=prev;

        book.appendChild(img);

        return;
    }

    const left=document.createElement("img");
    const right=document.createElement("img");

    left.src=`pages/${String(page).padStart(2,"0")}.jpg`;
    right.src=`pages/${String(page+1).padStart(2,"0")}.jpg`;

    left.className="page";
    right.className="page";

    left.onclick=prev;
    right.onclick=next;

    book.appendChild(left);
    book.appendChild(right);

}

function next(){

    if(page===1){

        page=2;

    }else if(page<totalPages-1){

        page+=2;

    }

    draw();
}

function prev(){

    if(page===2){

        page=1;

    }else if(page>2){

        page-=2;

    }

    draw();
}

document.getElementById("next").onclick=next;
document.getElementById("prev").onclick=prev;

draw();

document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight"){
        next();
    }

    if(event.key === "ArrowLeft"){
        prev();
    }

});

document.getElementById("fullscreen").onclick = function(){

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

};
