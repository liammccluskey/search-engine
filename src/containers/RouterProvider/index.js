import React, {useEffect, useState} from 'react'
import { RouterProvider as __RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Home } from '../../views/pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
      },
])

export const RouterProvider = props => {
  return (
      <__RouterProvider
          router={router}
      />
  )
}