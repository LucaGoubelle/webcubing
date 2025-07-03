
function doKeysMasterKilominx(k, shiftmod){
    let moverMK = new MasterKilominxMover();
    switch(k){
        case DICO_KEYS["k"]: masterKilominx = (shiftmod) ? moverMK.simpleMove(masterKilominx, "Uw") : moverMK.simpleMove(masterKilominx, "U"); break;
        case DICO_KEYS["m"]: masterKilominx = (shiftmod) ? moverMK.simpleMove(masterKilominx, "Uw'") : moverMK.simpleMove(masterKilominx, "U'"); break;

        case DICO_KEYS["arrowLeft"]: masterKilominx = moverMK.simpleMove(masterKilominx, "y"); break;
        case DICO_KEYS["arrowRight"]: masterKilominx = moverMK.simpleMove(masterKilominx, "y'"); break;
        default: break;
    }
    minxDrawer.draw(canvas, masterKilominx);
}
