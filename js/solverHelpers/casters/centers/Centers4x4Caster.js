
class Centers4x4Caster extends CentersCaster {

    constructor(){
        this.size = 4;
    }

    _extractCenters(actualFace){
        return [
            [actualFace[1][1], actualFace[1][2]],
            [actualFace[2][1], actualFace[2][2]]
        ];
    }
}