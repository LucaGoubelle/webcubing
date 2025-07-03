
function doKeysMegaminx(k){
    let moverMega = new MegaminxMover();
    switch(k){
        case DICO_KEYS["k"]: megaminx = moverMega.simpleMove(megaminx, "U"); break;
        case DICO_KEYS["m"]: megaminx = moverMega.simpleMove(megaminx, "U'"); break;
        case DICO_KEYS["o"]: megaminx = moverMega.simpleMove(megaminx, "R"); break;
        case DICO_KEYS["l"]: megaminx = moverMega.simpleMove(megaminx, "R'"); break;
        case DICO_KEYS["s"]: megaminx = moverMega.simpleMove(megaminx, "L"); break;
        case DICO_KEYS["z"]: megaminx = moverMega.simpleMove(megaminx, "L'"); break;
        case DICO_KEYS["j"]: megaminx = moverMega.simpleMove(megaminx, "F"); break;
        case DICO_KEYS["f"]: megaminx = moverMega.simpleMove(megaminx, "F'"); break;
        case DICO_KEYS["n"]: megaminx = moverMega.simpleMove(megaminx, "D"); break;
        case DICO_KEYS["v"]: megaminx = moverMega.simpleMove(megaminx, "D'"); break;
        case DICO_KEYS["arrowLeft"]: megaminx = moverMega.simpleMove(megaminx, "y"); break;
        case DICO_KEYS["arrowRight"]: megaminx = moverMega.simpleMove(megaminx, "y'"); break;
        default: break;
    }
    minxDrawer.draw(canvas, megaminx);

}
