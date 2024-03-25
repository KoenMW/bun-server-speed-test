let seeds = 0;
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    switch (request.method) {
      case "GET":
        return new Response(`Seeds planted: ${seeds}`);
      case "POST":
        seeds++;
        return new Response("Seed created");
      case "DELETE":
        seeds = 0;
        return new Response("Seeds deleted");
      default: {
        return new Response("Method not allowed", { status: 405 });
      }
    }
  },
});

console.log(`Listening on localhost:${server.port}`);
