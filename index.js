// index.js

import React from 'react'
import ipfsClient from './utils/ipfs'

export default function Home() {

  async function addToIPFS() {
    const result = await ipfsClient.add('Hello World!') 
    console.log(result)
  }

  return (
    <div>
      <h1>Freetube</h1>
      <button onClick={addToIPFS}>Add to IPFS</button>
    </div>
  )

}