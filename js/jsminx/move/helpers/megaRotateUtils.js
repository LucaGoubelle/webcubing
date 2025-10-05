
class MegaminxRotateUtils extends MinxRotateUtils {

    genEmptyFace(){
        let ring1 = 10;
        let row1 = [];
        for (let i = 0; i < ring1; i++) 
            row1.push("");
        let face = [row1, [""]];
        return face;
    }

    rotate(face){
        let newFace = this.genEmptyFace();

        newFace[0][0] = face[0][8];
        newFace[0][1] = face[0][9];
        newFace[0][2] = face[0][0];
        newFace[0][3] = face[0][1];
        newFace[0][4] = face[0][2];
        newFace[0][5] = face[0][3];
        newFace[0][6] = face[0][4];
        newFace[0][7] = face[0][5];
        newFace[0][8] = face[0][6];
        newFace[0][9] = face[0][7];

        newFace[1][0] = face[1][0];

        return newFace;
    }

    rotateAsync(face){
        for (let i = 0; i <4; i++)
            face = this.rotate(face);
        return face;
    }

    transfert(face, newFace){
        for(let i = 0; i <face[0].length; i++)
            face[0][i] = (newFace[0][i]!="") ? newFace[0][i] : face[0][i];
        face[1][0] = (newFace[1][0]!="") ? newFace[1][0] : face[1][0];
        return face;
    }
}
