import createServer from "./server";
import { syncDBs } from "./tools/syncDBs";

const port = 8080;
const app = createServer();

app.listen({ host: "192.168.0.161", port }, async (err: Error | null, address: string) => {
  // await syncDBs()
  console.log("Server Running!")

  if (err) {
    console.log(err);
  }
})