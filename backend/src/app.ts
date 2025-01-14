import createServer from "./server";
import { syncDBs } from "./tools/syncDBs";

const port = 8080;
const app = createServer();

// 26.73.84.222
app.listen({ host: "192.168.0.161", port }, async (err: Error | null, address: string) => {
  await syncDBs()
  console.log("Server Running!")

  if (err) {
    console.log(err);
  }
})