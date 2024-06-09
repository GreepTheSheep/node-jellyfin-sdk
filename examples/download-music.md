## Download a random audio file in MP3 from the Jellyfin server

```js
const fs = require('fs'),
    Jellyfin = require('../'),
    jf = new Jellyfin.Client({
        baseUrl: "https://jellyfin.example.com/",
        username: "username",
        password: "mypassword",
        clientInfo: {
            name: "node-jellyfin",
            version: "1.0.0"
        }
    });

jf.login();

jf.on("ready", async ()=>{
    console.log("connected as", jf.user.name);
    let views = await jf.getItems({
        mediaTypes: "Audio",
        sortBy: "Random",
        limit: 1
    });
    console.log(views[0].artists.join(", ") + " - " + views[0].name);
    console.log("Direct stream: ", jf.options.baseUrl + "Audio/" + views[0].id + "/stream");
    const AB = await jf.universalAudio.stream(views[0].id, "mp3");
    const buffer = Buffer.from(AB);
    fs.writeFileSync('./res.mp3', buffer);
    jf.logout();
});

jf.on("disconnected", ()=>{
    console.log("disconnected");
});
```