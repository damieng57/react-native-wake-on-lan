# react-native-wake-on-lan

React Native Wake-on-LAN lib (iOS)

## Installation

```sh
npm install react-native-wake-on-lan --save
npx pod-install
```

## Usage

```js
import WOL from "react-native-wake-on-lan";

// ...

const result = await WOL.wake({ mac: 'AA:BB:CC:DD:EE:FF' });
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
