const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const h = canvas.height;
const w = canvas.width;
const string = "手田水口廿卜山戈人心中大十竹土火木屍日Ｚ難金女月弓一";
const arr = string.split("");
const font_size = 10;
const colums = w / font_size;
const droup = [];
for (let i = 0; i < colums; i++) {
  droup[i] = 1;
}
function draw() {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.font = '10pt monospace';
  ctx.font = font_size+"px";
  for (var i = 0; i < droup.length; i++) {
      let text = arr[Math.floor(Math.random() * Math.floor(arr.length))];
        ctx.fillText(text,i*font_size,droup[i]*font_size);
        if(droup[i] * font_size > h && Math.random() > 0.975){
          droup[i] = 0;
        }
        droup[i]++;
  }
}
  setInterval(draw, 100);
