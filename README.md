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

To test other servers:

```bash
bun run test --url <your_url_here>
```
