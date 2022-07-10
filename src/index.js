import React from 'react';
import * as ReactDOM from 'react-dom/client';

import Todo from "./Todo/Todo";

ReactDOM
  .createRoot(document.querySelector('#app'))
  .render(<Todo defaultMessage={'XXX'} defaultList={[]} />);
