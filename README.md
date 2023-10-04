# Squid ABI Indexer for Base ID

This is a squid project that shows and interpretes the power of subsquid. It indexes EVM logs and transactions to csv file.

## Usage

1. Install the [Squid CLI](https://docs.subsquid.io/squid-cli/):

```sh
npm i -g @subsquid/cli
```

2. Init the template and install the dependencies

```bash
sqd init my-abi-squid --template https://github.com/subsquid/squid-abi-template
cd my-abi-squid
npm i
```

3. Build and run the squid

```bash
sqd build
sqd up
sqd migration:generate
sqd process
```

The indexing will start, wait until it syncs with the current block.
