
class MinxRotateUtils {
    constructor(){}

    _gen_ring(size){
        let ring = [];
        for(let i = 0; i < size; i++)
            ring.push("");
        return ring;
    }

    genEmptyFace(...args){
        let rings = args;
        let face = [];
        for(let ring in rings)
            face.push(this._gen_ring(ring));
        return face;
    }
}