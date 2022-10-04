import * as React from 'react'
import { createRoot } from 'react-dom/client';

import Example from './Example'

const App: React.FC = () => <Example />

const container = document.getElementById('main') as HTMLElement
const root = createRoot(container);
root.render(<App />)
