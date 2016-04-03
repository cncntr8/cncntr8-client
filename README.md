# cncntr8-client
## Inspiration
We were inspired by the difficulty some students face in our current education system.
## What it does
cncntr8 uses the power of the Muse headset to enable teachers with tools to assist students with learning disabilities such as ADHD.
The cncntr8 server connects to the Muse through the proprietary MuseIO interface binary, which broadcasts data over OSC. This data is processed and rebroadcast over WebSockets to our static client, which formats the data into an easy-to-read dashboard. We are also developing a solution for data recording and after-the-fact analysis of long-term concentration metric data.
## How we built it
cncntr8-server is powered by Node.JS, with the WS and node-osc libraries for WebSocket and OSC (Open Sound Control) processing respectively.
cncntr8-client is a static web page that employs JavaScript and JQuery heavily to receive and display data from cncntr8-server.
cncntr8-muse-stub is a utility script that produces dummy data for testing cncntr8-server, cncntr8-client, and cncntr8-db-logger.
cncntr8-db-logger is an alternative to cncntr8-server that logs incoming data from multiple devices to a MongoDB database for later consumption by cncntr8-db-viewer.
cncntr8-db-viewer is a platform for after-the-fact analysis of data stored by cncntr8-db-logger. It supports plotting concentration data as a time series using the Plot.ly library.
## Challenges we ran into
We initially attempted to write cncntr8-client in vanilla JavaScript, but it soon became clear that was impractical compared to JQuery.
## Accomplishments that we're proud of
We are proud of learning more about JQuery and the DOM, as well as WebSockets.
## What we learned

## What's next for Cncntr8
We hope to develop a custom classification algorithm for concentration data, and improve the cncntr8-client and cncntr8-db-viewer dashboards.
