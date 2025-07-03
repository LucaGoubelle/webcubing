
function doKey3x3(k, moves){
    switch(k){
        case DICO_KEYS.k: cube = moves.simpleMove(cube, "U"); break;
        case DICO_KEYS.m: cube = moves.simpleMove(cube, "U'"); break;
        case DICO_KEYS.o: cube = moves.simpleMove(cube, "R"); break;
        case DICO_KEYS.l: cube = moves.simpleMove(cube, "R'"); break;
        case DICO_KEYS.s: cube = moves.simpleMove(cube, "L"); break;
        case DICO_KEYS.z: cube = moves.simpleMove(cube, "L'"); break;
        case DICO_KEYS.q: cube = moves.simpleMove(cube, "D'"); break;
        case DICO_KEYS.d: cube = moves.simpleMove(cube, "D"); break;
        case DICO_KEYS.j: cube = moves.simpleMove(cube, "F"); break;
        case DICO_KEYS.f: cube = moves.simpleMove(cube, "F'"); break;
        case DICO_KEYS.arrowLeft: cube = moves.simpleMove(cube, "y"); break;
        case DICO_KEYS.arrowRight: cube = moves.simpleMove(cube, "y'"); break;
        case DICO_KEYS.space: cube = new CubeScrambler().scrambleCube(cube); break;
        default: break;
    }
    cubeDrawer.draw(canvas, cube);
}
