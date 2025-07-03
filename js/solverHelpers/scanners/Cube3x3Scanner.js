
class Cube3x3Scanner extends Cube2x2Scanner {

    scanCenter(cube, orient){
        let hmap = {
            'back': cube.back[1][1],
            'up': cube.back[1][1],
            'front': cube.back[1][1],
            'left': cube.back[1][1],
            'right': cube.back[1][1],
            'down': cube.back[1][1]
        };
        return (orient in hmap) ? hmap[orient] : "" ;
    }

    scanEdge(cube, orient){
        let lastIndex = cube.front.length-1;
        let hmap = {
            'up_front': cube.up[lastIndex][1]+"_"+cube.front[0][1],
            'up_left': cube.up[1][0]+"_"+cube.left[0][1],
            'up_right': cube.up[1][lastIndex]+"_"+cube.right[0][1],
            'up_back': cube.up[0][1]+"_"+cube.back[0][1],
        };
        return (orient in hmap) ? hmap[orient] : "" ; 
    }

    scanEdges(cube){
        return {
            'up_front': this.scanEdge(cube, 'up_front'),
            'up_left': this.scanEdge(cube, 'up_left'),
            'up_right':this.scanEdge(cube, 'up_right'),
            'up_back': this.scanEdge(cube, 'up_back')
        }
    }
    
}
