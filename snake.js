const pos = [[0, 0], [0, 0]];
let dir = 2;
window.onkeydown = function(e) {
    prevDir = dir;
    switch(e.key) {
        case 'ArrowLeft':
            dir = 1;
            break;
        case 'ArrowRight':
            dir = 2;
            break;
        case 'ArrowUp':
            dir = 3;
            break;
        case 'ArrowDown':
            dir = 4;
            break;
        case ' ':
            pos.push(pos[pos.length - 1]);
            break;
    }
    if(dir != prevDir) {
        clearInterval(l);
    draw();
    l = setInterval(draw, 250);
    }
}
function draw() {
    for(let i = 0; i < pos.length; i++) {
        console.log(pos[i]);
    }
    console.log(' ');
    resize();
    for(let i = 0; i < d[0]; i += d[0] / 15) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, d[1]);
        ctx.strokeStyle = '#0';
        ctx.stroke();
    }
    for(let i = 0; i < d[1]; i += d[1] / 8) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(d[0], i);
        ctx.strokeStyle = '#0';
        ctx.stroke();
    }
    for(let i = 0; i < pos.length - 1; i++) {
        let add = [0, 0];
        switch(dir) {
            case 1:
                add = [-1, 0];
                break;
            case 2:
                add = [1, 0];
                break;
            case 3:
                add = [0, -1];
                break;
            case 4:
                add = [0, 1];
                break;
        }
        pos[pos.length - 1][0] = pos[i][0];
        pos[pos.length - 1][1] = pos[i][1];
        pos[i][0] += add[0] * d[0] / 15;
        pos[i][1] += add[1] * d[1] / 8;
        ctx.beginPath();
        ctx.rect(pos[i][0], pos[i][1], d[0] / 15, d[1] / 8);
        if(i === 0) ctx.fillStyle = 'yellow';
        else ctx.fillStyle = '#00FF00';
        ctx.strokeStyle = '#0';
        ctx.fill();
        ctx.stroke();
    }
}
let l = setInterval(draw, 250);
