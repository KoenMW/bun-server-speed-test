function getCommandLineArg(flag: string): string | null {
  const index = process.argv.indexOf(flag);
  return index === -1 ? null : process.argv[index + 1];
}

const url = getCommandLineArg("--url");

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
        console.log(`Response from ${serverType} server: ${text}`);
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

url ? test(url, "server") : runTests();
