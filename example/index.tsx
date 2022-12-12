import React, { lazy, Suspense } from 'react'
import { render } from 'react-dom'

const App = lazy(() => import('./app'));



render(<Suspense fallback={<div>loading</div>}><App /></Suspense>, document.getElementById('root'))
