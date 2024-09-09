"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[62642],{66410:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var r=s(74848),a=s(28453);const i={sidebar_custom_props:{id:"5daf3b90-6b51-4224-9073-e090d6b3d309",source:{name:"Micro Devices",ref:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/"}}},d="\u2b50 Building Micro Python",o={id:"IoT-Workshop/micropython/modules/README",title:"\u2b50 Building Micro Python",description:"Dieser Schritt wurde bereits gemacht und muss nicht wiederholt werden. Sollte Ihr ESP8266 einmal aus unerkl\xe4rlichen Gr\xfcnden nicht mehr funktionieren, so k\xf6nnte das neue Aufspielen (flashen) der Firmware allenfalls helfen.",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/05-micropython/modules/README.md",sourceDirName:"10-IoT-Workshop/05-micropython/modules",slug:"/IoT-Workshop/micropython/modules/",permalink:"/24ef/IoT-Workshop/micropython/modules/",draft:!1,unlisted:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"5daf3b90-6b51-4224-9073-e090d6b3d309",source:{name:"Micro Devices",ref:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/"}}},sidebar:"sidebar",previous:{title:"4. Sensorbox",permalink:"/24ef/IoT-Workshop/micropython/sensorbox/"}},l={},t=[{value:"Add modules",id:"add-modules",level:2},{value:"Flash the firmware",id:"flash-the-firmware",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Comment:s,Details:i}=n;return s||p("Comment",!0),i||p("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h1,{id:"-building-micro-python",children:"\u2b50 Building Micro Python"}),(0,r.jsx)(s,{nr:0,type:"heading",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.admonition,{title:"IoT Workshop",type:"info",children:(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Dieser Schritt wurde bereits gemacht und muss nicht wiederholt werden. Sollte Ihr ESP8266 einmal aus unerkl\xe4rlichen Gr\xfcnden nicht mehr funktionieren, so k\xf6nnte das neue Aufspielen (flashen) der Firmware allenfalls helfen."}),(0,r.jsx)(s,{nr:0,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"This article describes how to generate and flash the MicroPython firmware for the ESP8266 board. The steps are similar for other boards, but the firmware must be generated for the specific board."}),(0,r.jsx)(s,{nr:1,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["This manual is based on the ",(0,r.jsx)(n.a,{href:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/",children:"\ud83d\udc49 Compiling MicroPython for esp8266"})," article."]}),(0,r.jsx)(s,{nr:2,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"The operating system used for this task is Ubuntu 22 on WSL."}),(0,r.jsx)(s,{nr:3,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Create the Micropython folder and inside this folder the esp8266 folder"}),(0,r.jsx)(s,{nr:4,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir Micropython\ncd Micropython\nmkdir esp8266\ncd esp8266\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["The MicroPython source code is available at ",(0,r.jsx)(n.a,{href:"https://github.com/micropython/micropython",children:"\ud83d\udc49 Github Micropython"}),". Instructions to build the firmware for the ESP8266 are available at ",(0,r.jsx)(n.a,{href:"https://github.com/micropython/micropython/tree/master/ports/esp8266",children:"\ud83d\udc49 MicroPython esp8266"}),"."]}),(0,r.jsx)(s,{nr:5,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Clone the repository"}),(0,r.jsx)(s,{nr:6,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/micropython/micropython\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Download the cross compiler, as described in ",(0,r.jsx)(n.a,{href:"https://github.com/pfalcon/esp-open-sdk",children:"\ud83d\udc49 Cross compiler"})]}),(0,r.jsx)(s,{nr:7,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"As indicated in the link above, download the source of the cross compiler always from the folder esp8266"}),(0,r.jsx)(s,{nr:8,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone --recursive  https://github.com/pfalcon/esp-open-sdk\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Install the prerequisites for building"}),(0,r.jsx)(s,{nr:9,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install make unrar-free autoconf automake libtool gcc g++ gperf flex bison texinfo gawk ncurses-dev libexpat-dev python-dev python python3-serial sed git unzip bash help2man wget bzip2 libtool-bin\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Now we must download some tarballs which are not available anymore through the mirrors used by the compiler"}),(0,r.jsx)(s,{nr:10,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# some tarballs (binaries) are not available anymore on the preconfigured mirror - download them manually\ncd crosstool-NG/.build/tarballs/\nwget https://libisl.sourceforge.io/isl-0.14.tar.gz\nwget https://github.com/libexpat/libexpat/releases/download/R_2_1_0/expat-2.1.0.tar.gz\n\n# compiler needs Python v2.7 - new ubuntu versions have Python v3 as default\nmkdir /tmp/tmpbin && ln -s /usr/bin/python2.7 /tmp/tmpbin/python && export PATH=/tmp/tmpbin:${PATH}\n\n# ensure serial module is found - get current version from https://pypi.org/project/pyserial/#files\ncd /tmp/tmpbin\nwget https://files.pythonhosted.org/packages/1e/7d/ae3f0a63f41e4d2f6cb66a5b57197850f919f59e558159a4dd3a818f5082/pyserial-3.5.tar.gz\ntar -xzf pyserial-3.5.tar.gz\ncd pyserial-3.5\nsudo /usr/bin/python2.7 setup.py install\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Proceed to the build of the cross compiler with the following commands"}),(0,r.jsx)(s,{nr:11,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd esp-open-sdk\nmake STANDALONE=y |& tee make0.log\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"At the end of the build add the binary folder of the cross compiler to the PATH envinronment variable"}),(0,r.jsx)(s,{nr:12,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export PATH=~/Micropython/esp8266/esp-open-sdk/xtensa-lx106-elf/bin:$PATH\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Go into the micropython folder available under ~/Micropython/esp8266"}),(0,r.jsx)(s,{nr:13,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/Micropython/esp8266/micropython\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Run"}),(0,r.jsx)(s,{nr:14,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git submodule update --init\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"to add external dependencies."}),(0,r.jsx)(s,{nr:15,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Next step is the MicroPython cross compiler build"}),(0,r.jsx)(s,{nr:16,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make -C mpy-cross\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Finally we can build the ESP8266 firmware with the following commands"}),(0,r.jsx)(s,{nr:17,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ports/esp8266\nmake axtls\nmake\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"add-modules",children:"Add modules"}),(0,r.jsx)(s,{nr:1,type:"heading",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["Now you can place all the modules you want to add to the firmware in the ",(0,r.jsx)("strong",{className:"boxed",children:"Micropython\\esp8266\\micropython\\ports\\esp8266"})," folder."]}),(0,r.jsx)(s,{nr:18,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"AHT21 Sensor Module"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'reference title="aht.py"',children:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/aht.py\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"ENS160 Sensor Module"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'reference title="ENS.py"',children:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/ens.py\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"PiicoDev_Unified Module"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:'reference title="PiicoDev_Unified.py"',children:"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/PiicoDev_Unified.py\n"})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["then recompile the firmware from the folder ",(0,r.jsx)("strong",{className:"boxed",children:"Micropython\\esp8266\\micropython\\ports\\esp8266"})," with the command"]}),(0,r.jsx)(s,{nr:19,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make clean\nmake\n"})}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.h2,{id:"flash-the-firmware",children:"Flash the firmware"}),(0,r.jsx)(s,{nr:2,type:"heading",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsxs)(n.p,{children:["The firmware is generated under ",(0,r.jsx)("strong",{className:"boxed",children:"ports/esp8266/build-GENERIC"})," folder with the name ",(0,r.jsx)("strong",{className:"boxed",children:"firmware-combined.bin"}),"."]}),(0,r.jsx)(s,{nr:20,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(n.div,{className:"commentable",children:[(0,r.jsx)(n.p,{children:"Proceed to flash the firmware..."}),(0,r.jsx)(s,{nr:21,type:"paragraph",pageId:"5daf3b90-6b51-4224-9073-e090d6b3d309",children:(0,r.jsx)(n.p,{children:"."})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"WSL / Windows"})}),(0,r.jsx)(n.p,{children:"Sadly, WSL 2 does not support yet USB devices by default. Becaus of that we use PowerShell to flash the firmware."}),(0,r.jsxs)(n.p,{children:["Open the Folder containing ",(0,r.jsx)("strong",{className:"boxed",children:"\\Micropython\\esp8266\\micropython\\ports\\esp8266"})," in PowerShell (or only the firmware you downloaded above). Make sure you have python and esptools installed:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install esptool\n"})}),(0,r.jsxs)(n.p,{children:["When you encounter problems with flashing or connecting to esp8266, try using this usb serial firmware: ",(0,r.jsx)(n.a,{href:"https://sparks.gogo.co.nz/ch340.html",children:"https://sparks.gogo.co.nz/ch340.html"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"esptool --port COMXX erase_flash\n"})}),(0,r.jsx)(n.p,{children:"where  COMXX is repalced with the actual serial port to which we connect the ESP8266 board."}),(0,r.jsx)(n.p,{children:"In my case, the command looked like this"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"esptool --port COM3 erase_flash\n"})}),(0,r.jsx)(n.p,{children:"And then upload the firmware with the command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",children:"esptool --port COM3 --baud 460800 write_flash --flash_size=detect 0 .\\build-GENERIC\\firmware-combined.bin\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"UNIX"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"esptool.py --port /dev/ttyXXX erase_flash\n"})}),(0,r.jsx)(n.p,{children:"where  /dev/ttyXXX is repalced with the actual serial port to which we connect the ESP8266 board."}),(0,r.jsx)(n.p,{children:"In our case, the firmware upload was successful with the command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make PORT=/dev/ttyUSB0 deploy\n"})}),(0,r.jsx)(n.p,{children:"It is also possible to load the firmware_combined.bin image with the command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"esptool.py --port /dev/ttyUSBX --baud 460800 write_flash --flash_size=detect 0 firmware-combined.bin\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var r=s(96540);const a={},i=r.createContext(a);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);