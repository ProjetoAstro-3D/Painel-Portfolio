function trocar(id, elemento){

    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

    document.querySelectorAll(".header-menu-1 p").forEach(p => {
        p.classList.remove("ativo");
    });
    document.querySelectorAll(".header-menu-2 p").forEach(p => {
        p.classList.remove("ativo");
    });

    elemento.classList.add("ativo");
}