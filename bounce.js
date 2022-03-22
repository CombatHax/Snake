let force = 15;
const cnv = document.getElementById('cnv');
const ctx = cnv.getContext('2d');
const d = [];
let pos = 0;
function draw() {
    cnv.width = window.innerWidth - 20;
    cnv.height = window.innerHeight - 20;
    d[0] = cnv.clientWidth;
    d[1] = cnv.clientHeight;
    ctx.beginPath();
    ctx.rect(0, 0, d[0], d[1]);
    ctx.strokeStyle = '#0';
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
    var r = d[0] < d[1] ? d[0] / 15 : d[1] / 15;
    pos += force;
    if(pos + r >= d[1]) {
        force = -(force);
    }
    force += 1;
    ctx.beginPath();
    ctx.arc(d[0] / 2, pos, r, 0, 360);
    ctx.strokeStyle = '#0';
    ctx.fillStyle = '#FF';
    ctx.fill();
    ctx.stroke();
    window.requestAnimationFrame(draw);
}
draw();
