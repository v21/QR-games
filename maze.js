D=document;
D.write("<body>");
C=D.createElement("canvas");
D.body.appendChild(C);
a=Math;
b=25;s=b*b;
c=D.body.children[0];
c.width=c.height=s+b;
x=c.getContext("2d");
x.fillRect(0,0,s,s);
x.fillStyle='#fff';
f=a.floor;
C=function(A){i=f(a.random()*A.length);
r=A[i];
A.splice(i,1);
return(r)};
D=function(c,j,J,k,K){x.strokeStyle='rgb(255,'+c+','+c+')';
x.beginPath();
x.moveTo(j,J);
x.lineTo(k,K);
x.stroke();
c<s&&window.setTimeout(function(){D(c+b,j,J,k,K)},b)};
m={'-1':0};
p=[0];
while(p.length){
if(!(m[v=C(p)]||v<0||v>=s)){
X=v%b;
Y=f(v/b);
n=X!=0?[v-1]:[v];
n[1]=X!=b-1?v+1:v;
n[2]=Y!=0?v-b:v;
n[3]=Y!=b-1?v+b:v;
m[v]=0;
x.fillRect(b*X+3,b*Y+3,V=b-6,V);
for(t=[0,1,2,3];
t.length;
){y=C(t);
if(m[n[y]]){t=[];
U=(y<2)?6:V;
x.fillRect(b*X+3+((y==1)?V:(y==0)?-6:0),b*Y+3+((y==3)?V:(y==2)?-6:0),U,b-U)}}m[v]=1;
p=p.concat(n)}}x.lineWidth=5;
x.lineCap='round';
d=u=v=f(b/2);
X=a.min;
Y=a.abs;
Z=a.max;
window.setInterval(function(){U=(d%2)?(d-2)*b:0;
V=(d%2)?0:(d-1)*b;
p=x.getImageData(Z(0,X(u,u+U)),Z(0,X(v,v+V)),Y(U)+1,Y(V)+1).data;
for(i=1,m=255;
i<p.length;
m=X(m,p[i]),i+=4){}d=(d+1+2*!m)%4;
m&&D(5,u,v,u+=U,v+=V)},b);

