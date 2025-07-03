
class MasterKilominxRotateUtils {
    static genEmptyFace(){
        let ring1 = 15;
        let ring2 = 5;
        let row1 = [];
        let row2 = [];
        for(let i = 0; i < ring1; i++)
            row1.push("");
        for(let i = 0; i < ring2; i++)
            row2.push("");
        let face = [row1, row2];
        return face;
    }

    static rotate(face){
        let newFace = this.genEmptyFace();

        newFace[0][0] = face[0][12];
        newFace[0][1] = face[0][13];
        newFace[0][2] = face[0][14];
        newFace[0][3] = face[0][0];
        newFace[0][4] = face[0][1];
        newFace[0][5] = face[0][2];
        newFace[0][6] = face[0][3];
        newFace[0][7] = face[0][4];
        newFace[0][8] = face[0][5];
        newFace[0][9] = face[0][6];
        newFace[0][10] = face[0][7];
        newFace[0][11] = face[0][8];
        newFace[0][12] = face[0][9];
        newFace[0][13] = face[0][10];
        newFace[0][14] = face[0][11];

        newFace[1][0] = face[1][4];
        newFace[1][1] = face[1][0];
        newFace[1][2] = face[1][1];
        newFace[1][3] = face[1][2];
        newFace[1][4] = face[1][3];

        return newFace;
    }

    //todo: don't use loop for complexity purpose
    static rotateAsync(face){
        for (let i = 0; i <4; i++)
            face = this.rotate(face);
        return face;
    }

    static transfert(face, newFace){
        for(let i=0; i<face[0].length;i++)
            face[0][i] = (newFace[0][i]!="") ? newFace[0][i] : face[0][i];
        for(let i=0; i<face[1].length;i++)
            face[1][i] = (newFace[1][i]!="") ? newFace[1][i] : face[1][i];
        return face;
    }
}
