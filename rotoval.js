let mp = [0,0]
let rot = 0;
let dir = 2;
const enemies = [0];
cnv.addEventListener('mousemove', function(e) {
    let box = cnv.getBoundingClientRect();
    mp[0] = e.clientX - box.left;
    mp[1] = e.clientY - box.top;
});
cnv.addEventListener('mousedown', function(e) {
    console.log(mp);
});
function draw() {
    ctx.beginPath();
    ctx.ellipse(mp[0], mp[1], d[0] / 15, d[1] / 15, rot, 0, 360);
    ctx.strokeStyle = '#0';
    ctx.stroke();
    rot += dir;
    window.requestAnimationFrame(draw);
}
draw();