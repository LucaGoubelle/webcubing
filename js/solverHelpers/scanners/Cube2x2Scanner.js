
class Cube2x2Scanner {

    scanCorner(cube, orient){
        let lastIndex = cube.front.length-1;
        let hmap = {
            'up_front_right': cube.up[lastIndex][lastIndex]+"_"+cube.front[0][lastIndex]+"_"+cube.right[0][0],
            'up_front_left': cube.up[lastIndex][0]+"_"+cube.front[0][0]+"_"+cube.left[0][lastIndex],
            'up_back_left': cube.up[0][0]+"_"+cube.back[0][lastIndex]+"_"+cube.left[0][0],
            'up_back_right': cube.up[0][lastIndex]+"_"+cube.back[0][0]+"_"+cube.right[0][lastIndex],

            'down_front_left': cube.down[0][0]+"_"+cube.front[lastIndex][0]+"_"+cube.left[lastIndex][lastIndex],
            'down_front_right': cube.down[0][lastIndex]+"_"+cube.front[lastIndex][lastIndex]+"_"+cube.left[lastIndex][0],
            'down_back_left': cube.down[lastIndex][0]+"_"+cube.back[lastIndex][lastIndex]+"_"+cube.left[lastIndex][0],
            'down_back_right': cube.down[lastIndex][lastIndex]+"_"+cube.back[lastIndex][0]+"_"+cube.right[lastIndex][lastIndex]
        };
        return (orient in hmap) ? hmap[orient] : "";
    }

    scanCorners(cube){
        let hmap = {
            'up_front_right': this.scanCorner(cube, 'up_front_right'),
            'up_front_left': this.scanCorner(cube, 'up_front_left'),
            'up_back_left': this.scanCorner(cube, 'up_back_left'),
            'up_back_right': this.scanCorner(cube, 'up_back_right'),

            'down_front_left': this.scanCorner(cube, 'down_front_left'),
            'down_front_right': this.scanCorner(cube, 'down_front_right'),
            'down_back_left': this.scanCorner(cube, 'down_back_left'),
            'down_back_right': this.scanCorner(cube, 'down_back_right')
        };
        return hmap;
    }

}
