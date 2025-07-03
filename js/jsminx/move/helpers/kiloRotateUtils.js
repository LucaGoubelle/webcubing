// TODO: implement each rotate utils for each minx puzzle type

// ----------------------------------------------------------------
// ------------------------ KILOMINX ------------------------------
// ----------------------------------------------------------------

class KilominxRotateUtils {
    static genEmptyFace(size){
        let face = [];
        for(let i = 0; i < size; i++) face.push("");
        return face;
    }
    
    static rotate(face){ return rotateArr(face, 1);}
    static rotateAsync(face){ return rotateArr(face, 4);}
    
    static transfert(face, newFace){
        for(let i=0;i<face.length;i++) 
            face[i] = (newFace[i]!="") ? newFace[i] : face[i];
        return face;
    }
}



