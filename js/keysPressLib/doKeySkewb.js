function doKeySkewb(k, moves){
    switch(k){
        case DICO_KEYS.k: skewb = moves.simpleMove(skewb, "U"); break;
        case DICO_KEYS.m: skewb = moves.simpleMove(skewb, "U'"); break;
        case DICO_KEYS.j: skewb = moves.simpleMove(skewb, "F"); break;
        case DICO_KEYS.f: skewb = moves.simpleMove(skewb, "F'"); break;
        case DICO_KEYS.o: skewb = moves.simpleMove(skewb, "R"); break;
        case DICO_KEYS.l: skewb = moves.simpleMove(skewb, "R'"); break;
        case DICO_KEYS.s: skewb = moves.simpleMove(skewb, "L"); break;
        case DICO_KEYS.z: skewb = moves.simpleMove(skewb, "L'"); break;
        case DICO_KEYS.space: skewb = new SkewbScrambler().scrambleSkewb(skewb);
        default: break;
    }
    skewbDrawer.draw(canvas, skewb);
}