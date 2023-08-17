# HRnet React Modal

This repository contains a simple React component that can be used to render a modal.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [Npm]()
- IDE (VSCode, IntelliJ, ...)

## Getting Started

**Install package**

```shell
npm install hrnet-react-modal-101
or
yarn add hrnet-react-modal-101
```

**Import the Modal component**

```js
import { Modal } from "hrnet-react-modal-101"
```

You can then render the `Modal` component like any other React component in JSX.

**Using the Modal component**

```js
import React, { useState } from 'react';
import { Modal } from 'hrnet-react-modal-101';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
```

**Props**
| Prop | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `isOpen` | `boolean` | Determines if the modal is open or closed |
| `onClose` | `function` | Function used to close the modal |
| `modalCustomStyle` | `Object` | Custom styles for the modal |
| `children` | `React.ReactNode` | Content to be displayed within the modal |

**Customizing Modal Styles**

The `modalCustomStyle` prop allows you to apply custom styles to the modal. You can pass an object with CSS properties to this prop to achieve the desired look and feel. Here's an example:

```jsx
import React, { useState } from 'react';
import { Modal } from 'hrnet-react-modal-101';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customModalStyle = {
    backgroundColor: 'lightblue',
    border: '2px solid blue',
    borderRadius: '10px',
    padding: '20px'
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} modalCustomStyle={customModalStyle}>
        <h2>Custom Styled Modal</h2>
        <p>This modal has a custom style applied.</p>
      </Modal>
    </div>
  );
}

export default App;
```

In this example, we're passing a customModalStyle object to the `modalCustomStyle` prop. This prop allows you to provide custom styles for the modal according to your needs.

**License**

This project is licensed under the ISC License.

