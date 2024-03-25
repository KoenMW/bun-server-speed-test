const input = process.argv[2];
console.log(`Input: ${input}`);

const test = async (url: string, serverType: string) => {
  const timer = Date.now();
  const promises: Promise<Response>[] = [];

  console.log(`Sending 10.000 requests to ${serverType} server...`);

  for (let i = 0; i < 10000; i++) {
    promises.push(
      fetch(url, {
        method: "POST",
      })
    );
  }

  return Promise.all(promises).then((_responses) => {
    console.log(
      `Time taken to send 10.000 requests to ${serverType} server: ${
        Date.now() - timer
      }ms`
    );
    fetch(url, {
      method: "GET",
    }).then((response) => {
      response.text().then((text) => {
        console.log(
          `Number of files created in seeds directory by ${serverType} server: \n${text}`
        );
      });
    });
  });
};

const runTests = () => {
  test("http://localhost:3000", "bun").then(() => {
    test("http://localhost:3001", "express").then(() => {
      test("http://localhost:8000", "php");
    });
  });
};

input ? test(input, "server") : runTests();
