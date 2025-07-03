
class SkewbMoves {
    static moveU(skewb){
        let newUp = ["", skewb.front[0], skewb.front[1], skewb.front[2], skewb.front[4]];
        let newFront = [skewb.right[3], skewb.right[0], skewb.right[1], "", skewb.right[4]];
        let newRight = [skewb.up[2], skewb.up[3], "", skewb.up[1], skewb.up[4]];

        let newLeft = ["", skewb.down[0], "", "", ""];
        let newBack = [skewb.left[1], "", "", "", ""];
        let newDown = [skewb.back[0], "", "", "", ""];

        skewb.up = SkewbRotateUtils.transfert(skewb.up, newUp);
        skewb.front = SkewbRotateUtils.transfert(skewb.front, newFront);
        skewb.right = SkewbRotateUtils.transfert(skewb.right, newRight);
        skewb.left = SkewbRotateUtils.transfert(skewb.left, newLeft);
        skewb.back = SkewbRotateUtils.transfert(skewb.back, newBack);
        skewb.down = SkewbRotateUtils.transfert(skewb.down, newDown);

        return skewb;
    }

    static moveUPrime(skewb){
        for(let i=0;i<2;i++)
            skewb = this.moveU(skewb);
        return skewb;
    }

    static moveF(skewb){
        let newFront = ["", skewb.down[3], skewb.down[0], skewb.down[1], skewb.down[4]];
        let newRight = [skewb.front[3], "", skewb.front[1], skewb.front[2], skewb.front[4]];
        let newDown = [skewb.right[3], skewb.right[0], "", skewb.right[2], skewb.right[4]];

        let newUp = ["", "", skewb.left[2], "", ""];
        let newBack = ["", "", "", skewb.up[2], ""];
        let newLeft = ["", "", skewb.back[3], "", ""];

        skewb.front = SkewbRotateUtils.transfert(skewb.front, newFront);
        skewb.right = SkewbRotateUtils.transfert(skewb.right, newRight);
        skewb.down = SkewbRotateUtils.transfert(skewb.down, newDown);
        skewb.up = SkewbRotateUtils.transfert(skewb.up, newUp);
        skewb.back = SkewbRotateUtils.transfert(skewb.back, newBack);
        skewb.left = SkewbRotateUtils.transfert(skewb.left, newLeft);

        return skewb;
    }

    static moveFPrime(skewb){
        for(let i=0;i<2;i++)
            skewb = this.moveF(skewb);
        return skewb;
    }

    static moveR(skewb){
        let newRight = ["", skewb.down[0], skewb.down[1], skewb.down[2], skewb.down[4]];
        let newDown = [skewb.back[2], skewb.back[3], skewb.back[0], "", skewb.back[4]];
        let newBack = [skewb.right[3], "", skewb.right[1], skewb.right[2], skewb.right[4]];

        let newUp = ["", skewb.front[2], "", "", ""];
        let newFront = ["", "", skewb.left[3], "", ""];
        let newLeft = ["", "", "", skewb.up[1], ""];

        skewb.right = SkewbRotateUtils.transfert(skewb.right, newRight);
        skewb.down = SkewbRotateUtils.transfert(skewb.down, newDown);
        skewb.back = SkewbRotateUtils.transfert(skewb.back, newBack);
        skewb.up = SkewbRotateUtils.transfert(skewb.up, newUp);
        skewb.front = SkewbRotateUtils.transfert(skewb.front, newFront);
        skewb.left = SkewbRotateUtils.transfert(skewb.left, newLeft);

        return skewb;
    }

    static moveRPrime(skewb){
        for(let i=0;i<2;i++)
            skewb = this.moveR(skewb);
        return skewb;
    }

    static moveL(skewb){
        let newFront = [skewb.left[3], "", skewb.left[1], skewb.left[2], skewb.left[4]];
        let newLeft = ["", skewb.down[2], skewb.down[3], skewb.down[0], skewb.down[4]];
        let newDown = [skewb.front[0], "", skewb.front[2], skewb.front[3], skewb.front[4]];

        let newUp = ["", "", "", skewb.back[2], ""];
        let newRight = ["", "", "", skewb.up[3], ""];
        let newBack = ["", "", skewb.right[3], "", ""];

        skewb.front = SkewbRotateUtils.transfert(skewb.front, newFront);
        skewb.left = SkewbRotateUtils.transfert(skewb.left, newLeft);
        skewb.down = SkewbRotateUtils.transfert(skewb.down, newDown);
        skewb.up = SkewbRotateUtils.transfert(skewb.up, newUp);
        skewb.right = SkewbRotateUtils.transfert(skewb.right, newRight);
        skewb.back = SkewbRotateUtils.transfert(skewb.back, newBack);

        return skewb;
    }

    static moveLPrime(skewb){
        for(let i=0;i<2;i++)
            skewb = this.moveL(skewb);
        return skewb;
    }
}
