const app = require("./index")

const connect  = require("./configs/db")

app.listen(5500, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5500");
  });
  
