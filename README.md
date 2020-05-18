# chatchat
Online chat application in real time.
Responsive : can be used on any device.

Any persons who selected the same room can chat together.

## Backend

Backend hosted on a static VM instance.

***How to deploy ?***
1) Set up your VM instance.
2) Create firewall rules to open your PORT
3) Using pm2 cli : `pm2 start server.js --name backend_chat`

**Stack :**
- ExpressJS
- Socket.io

## Frontend

Frontend deploy with netifly

***How to deploy ?***
1) npm run build : `next build`
2) npm run export : `next export`
3) using Netifly-cli and following instructions : `netifly deploy --prod`

**Stack :**
- Nextjs
- Reactjs
- Socket.io
- Moment
- Materialui

## Test
/!\ Maintenance on my api

Link : [Chatchat](https://chatchat.salimaouas.dev)

Enjoy 😊
