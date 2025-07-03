
// #######################
// #####  SAVE / SEED  ###
// #######################

function load_save_functions(content){ 
    let cubeGen = JSON.parse(content);
    cube = cubeGen;
    cubeDrawer.draw(canvas, cube);
}

function save_seed_function(cubeToSave){
    document.getElementById("seed_save").value = JSON.stringify(cubeToSave, space=4);
}


function load_save_kilominx_function(content){
    let minxGen = JSON.parse(content);
    kilominx = minxGen;
    minxDrawer.draw(canvas, kilominx);
}

function save_seed_kilominx_function(minxToSave){
    document.getElementById("seed_save").value = JSON.stringify(minxToSave, space=4);
}


function load_save_megaminx_function(content){
    let minxGen = JSON.parse(content);
    megaminx = minxGen;
    minxDrawer.draw(canvas, megaminx);
}

function save_seed_megaminx_function(minxToSave){
    document.getElementById("seed_save").value = JSON.stringify(minxToSave, space=4);
}


function load_save_masterk_function(content){
    let minxGen = JSON.parse(content);
    masterKilominx = minxGen;
    minxDrawer.draw(canvas, masterKilominx);
}

function save_seed_masterk_function(minxToSave){
    document.getElementById("seed_save").value = JSON.stringify(minxToSave, space=4);
}

function load_save_skewb_function(content){
    let skewbGen = JSON.parse(content);
    skewb = skewbGen;
    skewbDrawer.draw(canvas, skewb);
}

function save_seed_skewb_function(skewbToSave){
    document.getElementById("seed_save").value = JSON.stringify(skewbToSave, space=4);
}
