
function drawPolygon(canvas, poly, color, color2="#000000"){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.strokeStyle = color2;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(poly[0][0], poly[0][1]);
    for(let i=1 ; i< poly.length; i++ )
        ctx.lineTo( poly[i][0] , poly[i][1] );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
