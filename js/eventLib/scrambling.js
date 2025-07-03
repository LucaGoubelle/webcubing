// #############################
// ### scrambling puzzles ######
// #############################

function scramble_cube_function(){
    cube = new CubeScrambler().scrambleCube(cube);
    cubeDrawer.draw(canvas, cube);
}

function scramble_big_cube_function(){
    cube = new CubeScrambler().scrambleBigCube(cube);
    cubeDrawer.draw(canvas, cube);
}

function scramble_huge_cube_function(){
    cube = new CubeScrambler().scrambleHugeCube(cube);
    cubeDrawer.draw(canvas, cube);
}

function scramble_kilominx_function(){
    kilominx = new MinxScrambler().scrambleKilominx(kilominx);
    minxDrawer.draw(canvas, kilominx);
}

function scramble_megaminx_function(){
    // we use this for the moment
    megaminx = new MinxScrambler().scrambleMegaminx(megaminx);
    minxDrawer.draw(canvas, megaminx);
}

function scramble_skewb_function(){
    // todo: implement this function
    skewb = new SkewbScrambler().scrambleSkewb(skewb);
    skewbDrawer.draw(canvas, skewb);
}
