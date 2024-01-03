# mazadat-file-size

calculate file size

## Installation

```sh
npm install mazadat-file-size
```

## Usage

```js
import { getFileSize } from 'mazadat-file-size';

// ...
let outputType = 'gb'  // 'mb','kb',''->return bytes
const result = await getFileSize(/path/to/the/image, outputType);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
