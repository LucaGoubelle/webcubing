// ------------------ ---- ---------------------
// ------------------ data ---------------------
// ------------------ ---- ---------------------

class CubeBuilder {
    
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
                this._createFace(size, "green"),
                this._createFace(size, "yellow"),
                this._createFace(size, "blue"),
                this._createFace(size, "orange"),
                this._createFace(size, "red"),
                this._createFace(size, "white")
            );
        } catch(error){
            console.error(error, "size of puzzle must be integer");
            throw new CubeBuilderException();
        }
    }
}
