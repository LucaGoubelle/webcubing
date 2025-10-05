
class GigaminxRotateUtils {

    static genEmptyFace(){
        let ring1 = 20;
        let ring2 = 10;
        let ring3 = 1;
        let row1 = [];
        let row2 = [];
        let row3 = [];
        for(let i = 0; i < ring1; i++)
            row1.push("");
        for(let i = 0; i < ring2; i++)
            row2.push("");
        for(let i = 0; i<ring3; i++)
            row3.push("");
        let face = [row1, row2, row3];
        return face;
    }

    
    static rotate(face){
        let newFace = this.genEmptyFace();

        newFace[0][0] = face[0][16];
        newFace[0][1] = face[0][17];
        newFace[0][2] = face[0][18];
        newFace[0][3] = face[0][19];
        newFace[0][4] = face[0][0];
        newFace[0][5] = face[0][1];
        newFace[0][6] = face[0][2];
        newFace[0][7] = face[0][3];
        newFace[0][8] = face[0][4];
        newFace[0][9] = face[0][5];
        newFace[0][10] = face[0][6];
        newFace[0][11] = face[0][7];
        newFace[0][12] = face[0][8];
        newFace[0][13] = face[0][9];
        newFace[0][14] = face[0][10];
        newFace[0][15] = face[0][11];
        newFace[0][16] = face[0][12];
        newFace[0][17] = face[0][13];
        newFace[0][18] = face[0][14];
        newFace[0][19] = face[0][15];

        newFace[1][0] = face[1][8];
        newFace[1][1] = face[1][9];
        newFace[1][2] = face[1][0];
        newFace[1][3] = face[1][1];
        newFace[1][4] = face[1][2];
        newFace[1][5] = face[1][3];
        newFace[1][6] = face[1][4];
        newFace[1][7] = face[1][5];
        newFace[1][8] = face[1][6];
        newFace[1][9] = face[1][7];

        newFace[2][0] = face[2][0];

        return newFace;
    }
    
    static rotateAsync(face){
        let newFace = this.genEmptyFace();

        newFace[0][0] = face[0][4];
        newFace[0][1] = face[0][5];
        newFace[0][2] = face[0][6];
        newFace[0][3] = face[0][7];
        newFace[0][4] = face[0][8];
        newFace[0][5] = face[0][9];
        newFace[0][6] = face[0][10];
        newFace[0][7] = face[0][11];
        newFace[0][8] = face[0][12];
        newFace[0][9] = face[0][13];
        newFace[0][10] = face[0][14];
        newFace[0][11] = face[0][15];
        newFace[0][12] = face[0][16];
        newFace[0][13] = face[0][17];
        newFace[0][14] = face[0][18];
        newFace[0][15] = face[0][19];
        newFace[0][16] = face[0][0];
        newFace[0][17] = face[0][1];
        newFace[0][18] = face[0][2];
        newFace[0][19] = face[0][3];

        newFace[1][0] = face[1][2];
        newFace[1][1] = face[1][3];
        newFace[1][2] = face[1][4];
        newFace[1][3] = face[1][5];
        newFace[1][4] = face[1][6];
        newFace[1][5] = face[1][7];
        newFace[1][6] = face[1][8];
        newFace[1][7] = face[1][9];
        newFace[1][8] = face[1][0];
        newFace[1][9] = face[1][1];

        newFace[2][0] = face[2][0];

        return newFace;
    }
    
    static transfert(face, newFace){
        for(let i=0; i<face[0].length;i++)
            face[0][i] = (newFace[0][i]!="") ? newFace[0][i] : face[0][i];
        for(let i=0; i<face[1].length;i++)
            face[1][i] = (newFace[1][i]!="") ? newFace[1][i] : face[1][i];
        face[2][0] = (newFace[2][0]!="") ? newFace[2][0] : face[2][0];
        return face;
    }

}
