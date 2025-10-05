
// ----------------------------------------------------------------
// ------------------------ KILOMINX ------------------------------
// ----------------------------------------------------------------

class KilominxRotateUtils extends MinxRotateUtils {

    static genEmptyFace(size){
        let face = [];
        for(let i = 0; i < size; i++) 
            face.push("");
        return face;
    }
    
    static rotate(face){ 
        return this.rotateArr(face, 1);
    }

    static rotateAsync(face){ 
        return this.rotateArr(face, 4);
    }
    
    static transfert(face, newFace){
        for(let i=0;i<face.length;i++) 
            face[i] = (newFace[i]!="") ? newFace[i] : face[i];
        return face;
    }
}



