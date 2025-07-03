
function doKeysKilominx(k){
    let kiloMover = new KilominxMover();
    switch(k){
        case DICO_KEYS["k"]: kilominx = kiloMover.simpleMove(kilominx, "U"); break;
        case DICO_KEYS["m"]: kilominx = kiloMover.simpleMove(kilominx, "U'"); break;
        case DICO_KEYS["o"]: kilominx = kiloMover.simpleMove(kilominx, "R"); break;
        case DICO_KEYS["l"]: kilominx = kiloMover.simpleMove(kilominx, "R'"); break;
        case DICO_KEYS["s"]: kilominx = kiloMover.simpleMove(kilominx, "L"); break;
        case DICO_KEYS["z"]: kilominx = kiloMover.simpleMove(kilominx, "L'"); break;
        case DICO_KEYS["j"]: kilominx = kiloMover.simpleMove(kilominx, "F"); break;
        case DICO_KEYS["f"]: kilominx = kiloMover.simpleMove(kilominx, "F'"); break;
        case DICO_KEYS["d"]: kilominx = kiloMover.simpleMove(kilominx, "DL"); break;
        case DICO_KEYS["q"]: kilominx = kiloMover.simpleMove(kilominx, "DL'"); break;
        case DICO_KEYS["arrowLeft"]: kilominx = kiloMover.simpleMove(kilominx, "y"); break;
        case DICO_KEYS["arrowRight"]: kilominx = kiloMover.simpleMove(kilominx, "y'"); break;
        case DICO_KEYS["space"]: kilominx = new MinxScrambler().scrambleKilominx(kilominx); break;
        default: break;
    }
    minxDrawer.draw(canvas, kilominx);
}
