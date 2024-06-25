"use client"
import React, { useEffect } from 'react'

const ClientComponent = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope)
          }, (err) => {
            console.log('ServiceWorker registration failed: ', err)
          })
      })
    }
  }, [])

  return null
}

export default ClientComponent
