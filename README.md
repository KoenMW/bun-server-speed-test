# bun server speed test

To install dependencies:
for macOs and Linux:

```bash
npm install -g bun
```

for windows:

```bash
# WARNING: No stability is guaranteed on the experimental Windows builds
powershell -c "irm bun.sh/install.ps1|iex"
```

```bash
bun install
```

To run:
Make sure the ports 3000, 3001 and 8000 are available

```bash
bun run start
```

```bash
bun run test
```

To use another server use the `--url` option. By default tries to test the bun, express and php server from the `bun run start` command

```bash
bun run test --url <your_url_here>
```

To alter the number of requests made during the test, use the `--num` option. By default, the number of requests is set to 10000:

```bash
bun run test --num <number>
```
