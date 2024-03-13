// fetch 10000 requests to the server and check the seeds directory for the files created:

const test = (port: number, serverType: string) => {
  const timer = Date.now();
  const promises: Promise<Response>[] = [];

  console.log(`Sending 10.000 requests to ${serverType} server...`);

  for (let i = 0; i < 10000; i++) {
    promises.push(
      fetch(`http://localhost:${port}`, {
        method: "POST",
      })
    );
  }

  Promise.all(promises).then((responses) => {
    console.log(
      `Time taken to send 10.000 requests to ${serverType} server: ${
        Date.now() - timer
      }ms`
    );
    fetch(`http://localhost:${port}`, {
      method: "GET",
    });
  });
};

test(3000, "bun");
test(3001, "express");
test(8000, "php");
