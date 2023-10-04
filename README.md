[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/subsquid/squid-abi-template)

# Squid ABI template

This is a squid project that shows and interpretes the power of subsquid. It indexes EVM logs and transactions to csv file.

## Usage

0. Install the [Squid CLI](https://docs.subsquid.io/squid-cli/):

```sh
npm i -g @subsquid/cli
```

1. Init the template and install the dependencies

```bash
sqd init my-abi-squid --template https://github.com/subsquid/squid-abi-template
cd my-abi-squid
npm i
```

2. Run `sqd generate` with the appropriate flags.

```bash
Usage: sqd generate [options]

Options:
  --address <contract>      contract address
  --archive <url>           archive endpoint
  --abi <path>              (Optional) path or URL to the abi file. If omitted, the Etherscan API is used.
  -e, --event <name...>     one or multiple events to be indexed. '*' will index all events
  -f, --function <name...>. one or multiple contract functions to be indexed. '*' will index all functions
  --from <block>            start indexing from the given block.
  --etherscan-api <url>     (Optional) an Etherscan-compatible API to fetch contract ABI by a known address. Default: https://api.etherscan.io/
```

3. Build and run the squid

```bash
sqd build
sqd up
sqd migration:generate
sqd process
```

The indexing will start, wait until it syncs with the current block.
