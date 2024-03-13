import fs from "node:fs";
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    switch (request.method) {
      case "GET":
        const length = fs.readdirSync("bun").length;
        fs.readdirSync("bun").forEach((file) => {
          fs.unlinkSync(`bun/${file}`);
        });
        return new Response(`Deleted ${length} files`);
      case "POST":
        const filename = `bun/${Math.random()}`;
        Bun.write(filename, "");
        return new Response("Seed created");
      default: {
        return new Response("Method not allowed", { status: 405 });
      }
    }
  },
});

console.log(`Listening on localhost:${server.port}`);
