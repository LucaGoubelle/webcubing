
function doKeyHugeCube(k, shiftmod, moves){
    switch(k){
        case DICO_KEYS.k: cube = (shiftmod) ? moves.simpleMove(cube, "Uw") : moves.simpleMove(cube, "U"); break;
        case DICO_KEYS.m: cube = (shiftmod) ? moves.simpleMove(cube, "Uw'") : moves.simpleMove(cube, "U'"); break;
        case DICO_KEYS.o: cube = (shiftmod) ? moves.simpleMove(cube, "Rw") : moves.simpleMove(cube, "R"); break;
        case DICO_KEYS.l: cube = (shiftmod) ? moves.simpleMove(cube, "Rw'") : moves.simpleMove(cube, "R'"); break;
        case DICO_KEYS.s: cube = (shiftmod) ? moves.simpleMove(cube, "Lw") : moves.simpleMove(cube, "L"); break;
        case DICO_KEYS.z: cube = (shiftmod) ? moves.simpleMove(cube, "Lw'") : moves.simpleMove(cube, "L'"); break;
        case DICO_KEYS.q: cube = (shiftmod) ? moves.simpleMove(cube, "Dw'") : moves.simpleMove(cube, "D'"); break;
        case DICO_KEYS.d: cube = (shiftmod) ? moves.simpleMove(cube, "Dw") : moves.simpleMove(cube, "D"); break;
        case DICO_KEYS.j: cube = (shiftmod) ? moves.simpleMove(cube, "Fw") : moves.simpleMove(cube, "F"); break;
        case DICO_KEYS.f: cube = (shiftmod) ? moves.simpleMove(cube, "Fw'") : moves.simpleMove(cube, "F'"); break;
        case DICO_KEYS.i: cube = moves.simpleMove(cube, "Uww"); break;
        case DICO_KEYS.p: cube = moves.simpleMove(cube, "Uww'"); break;
        case DICO_KEYS.g: cube = moves.simpleMove(cube, "Lww"); break;
        case DICO_KEYS.t: cube = moves.simpleMove(cube, "Lww'"); break;
        case DICO_KEYS.y: cube = moves.simpleMove(cube, "Rww"); break;
        case DICO_KEYS.h: cube = moves.simpleMove(cube, "Rww'"); break;
        case DICO_KEYS.c: cube = moves.simpleMove(cube, "Dww"); break;
        case DICO_KEYS.w: cube = moves.simpleMove(cube, "Dww'"); break;
        case DICO_KEYS.arrowLeft: cube = moves.simpleMove(cube, "y"); break;
        case DICO_KEYS.arrowRight: cube = moves.simpleMove(cube, "y'"); break;
        case DICO_KEYS.space: cube = new CubeScrambler().scrambleHugeCube(cube); break;
        default: break;
    }
    cubeDrawer.draw(canvas, cube);
}
