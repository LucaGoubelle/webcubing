
class SkewbRotateUtils {
    static genEmptyFace(){
        return ["","","","",""];
    }
    
    static rotate(face){
        let newFace = this.genEmptyFace();
        newFace[0] = face[3];
        newFace[1] = face[0];
        newFace[2] = face[1];
        newFace[3] = face[2];
        newFace[4] = face[4];
        return newFace;
    }

    static rotateAsync(face){
        for (let i = 0; i < 3; i++)
            face = this.rotate(face);
        return face;
    }

    static transfert(face, newFace){
        for(let i=0;i<face.length; i++)
            face[i] = (newFace[i]!="") ? newFace[i] : face[i];
        return face;
    }
}
