from PyQRNative import *
import time, os
qr = QRCode(18, QRErrorCorrectLevel.L)

qr.mode = QRMode.MODE_ALPHA_NUM


data= "c=document.createElement(\"canvas\");document.body.appendChild(c);ctx=c.getContext(\"2d\");ctx.beginPath();ctx.arc(75,75,10,0,Math.PI*2,true);ctx.closePath();ctx.fill();"

data = "javascript:" + data

data.replace(" ", "") #this should clearly be a regex. feh...
data.replace("\n", "")

qr.addData(data)
qr.make()

print len(data)
print "link is " + data

im = qr.makeImage()

with open("/home/v21/qr" + str(time.time()) + ".png", "wb") as f:

    im.save(f)

    os.system("feh -F " + f.name + " &")
