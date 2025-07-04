// ------------------ ---- ---------------------
// ------------------ data ---------------------
// ------------------ ---- ---------------------

class CubeBuilder {
    constructor(){
        this.DICT_COLORS = {
            white: '#ffffff',
            yellow: '#ffff00',
            blue: '#0000ff',
            red: '#ff0000',
            green: '#00ff00',
            orange: '#ff9600'
        };
    }


    /**
     * Generate a cube's face from size param and elem to fill
     * 
     * @author: LucaGoubelle
     */
    _createFace(size, elem){
        let face = [];
        for(let i=0; i<size; i++){
            let row = [];
            for(let j=0;j<size;j++) 
                row.push(elem);
            face.push(row);
        }
        return face;
    }


    /**
     * Create a cube object based on a size param
     * 
     * @author: LucaGoubelle
     */
    createCube(size){
        try{
            return new Cube(
                this._createFace(size, this.DICT_COLORS.green),
                this._createFace(size, this.DICT_COLORS.yellow),
                this._createFace(size, this.DICT_COLORS.blue),
                this._createFace(size, this.DICT_COLORS.orange),
                this._createFace(size, this.DICT_COLORS.red),
                this._createFace(size, this.DICT_COLORS.white)
            );
        } catch(error){
            console.error(error, "size of puzzle must be integer");
            throw new CubeBuilderException();
        }
    }
}
