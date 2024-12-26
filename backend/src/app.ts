import createServer from "./server";
import { syncDBs } from "./tools/syncDBs";

const port = 8080;
const app = createServer();

app.listen({ host: "127.0.0.1", port }, async (err: Error | null, address: string) => {
  // await syncDBs()
  console.log("Server Running!")

  if (err) {
    console.log(err);
  }
})