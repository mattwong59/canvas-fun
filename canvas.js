const canvas = document.getElementById('hero');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
console.log(ctx);

ctx.fillStyle = 'rgba(89, 89, 89, 0.7)';
ctx.fillRect(400,100,200,200);
ctx.fillStyle = 'rgb(252, 153, 111, 0.7)';
ctx.fillRect(1200,100,200,200);
ctx.fillStyle = 'rgb(128, 174, 247, 0.7)';
ctx.fillRect(600,400,200,200);

//Line
ctx.beginPath();        
ctx.strokeStyle = '#8a70ff';      
ctx.moveTo(600,100);
ctx.lineTo(1200,300);
ctx.stroke();

ctx.beginPath();        
ctx.strokeStyle = '#8a70ff';      
ctx.moveTo(1200,300);
ctx.lineTo(800,600);
ctx.stroke();


//Random sized circles in random locations
// for (let i = 0; i < 200; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let r = Math.random() * 100;

//     ctx.beginPath();
//     ctx.strokeStyle = '#7f2414';      
//     ctx.arc(x, y, r, 0, Math.PI * 2, false);       //Creates a circle
//     ctx.stroke();    
// }

let x = 200;
let y = 200;
let r = 50;

function animate() {
    requestAnimationFrame(animate);

    // let x = Math.random() * window.innerWidth;
    // let y = Math.random() * window.innerHeight;
    // let r = Math.random() * 100;


    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.strokeStyle = '#7f2414';      
    ctx.arc(x, y, r, 0, Math.PI * 2, false);       //Creates a circle
    ctx.stroke();
    
    x += 1;
    y += 1;
}

animate();


