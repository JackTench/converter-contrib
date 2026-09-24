# converter

A library for converting [LiveSplit](https://livesplit.org) `.lss` files into the [LibreSplit](https://libresplit.org) `.json` format.

An online converter using this library is available at [libresplit.org/converter](https://libresplit.org/converter).

## Install
```bash
npm i @libresplit/converter
```

## Build
### Prerequisites
- Rust toolchain: `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`
- WASM compiler target: `rustup target add wasm32-unknown-unknown`
- wasm-pack: <br>
`cargo install wasm-pack` <br>
 or <br>
`curl https://drager.github.io/wasm-pack/installer/init.sh -sSf | sh`

### Building
```sh
git clone https://github.com/LibreSplit/converter
cd converter
wasm-pack build --scope libresplit --target web --release --features wasm
```

This outputs a compiled WASM package under `pkg/`.

### Building (for C ABI)
```sh
git clone https://github.com/LibreSplit/converter
cd converter
cargo build --release
```

---

### Running Tests
To run the converter and C converter integration tests:

```sh
cargo test
```

To run the WASM smoke test in an installed Firefox browser:
```sh
wasm-pack test --firefox --headless --features wasm
```

Or, if you have Chrome instead of Firefox:
```sh
wasm-pack test --chrome --headless --features wasm
```

These browser tests run the Rust converter compiled to WASM. To also smoke-test
the generated JavaScript package, install Node.js 22 or newer, build the package,
and run:

```sh
wasm-pack build --scope libresplit --target web --release --features wasm
node --test tests/package.mjs
```

Published as an npm package under [`@libresplit/converter`](https://npmjs.com/package/@libresplit/converter).
