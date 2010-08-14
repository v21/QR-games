from PyQRNative import *
import time, os, hashlib, sys

with open(sys.argv[1]) as data_file:
    data = data_file.read()


data = "javascript:" + data


data = data.replace(" ", "") #this should clearly be a regex. feh...
data = data.replace("\r", "")
data = data.replace("\n", "")


size_lookup_L = {1352 : 21, 1460 : 22, 1588 : 23, 1704 : 24, 1853:25, 1990:26, 2132:27, 2223:28, 2369:29, 2520:30}
for size in sorted(size_lookup_L.keys()):
    if size > len(data):
        module_version = size_lookup_L[size]
        break

print str(len(data)) + ":" + str(module_version)
print "link is " + data

qr = QRCode(23, QRErrorCorrectLevel.L)

qr.mode = QRMode.MODE_ALPHA_NUM

qr.addData(data)
qr.make()


im = qr.makeImage()

data_hash = hashlib.md5(data)


with open("qr" + data_hash.hexdigest() + ".png", "wb") as f:

    im.save(f)

    print f.name

    os.system("feh -F " + f.name + " &")
