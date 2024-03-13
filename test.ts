// fetch 10000 requests to the server and check the seeds directory for the files created:

const test = async (port: number, serverType: string) => {
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

  return Promise.all(promises).then((responses) => {
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

// test each server one by one:

const runTests = async () => {
  test(3000, "bun").then(() => {
    test(3001, "express").then(() => {
      test(8000, "php");
    });
  });
};

runTests();
