// pages/index.js

import { useState } from 'react'
import ipfsClient from './ipfs'
import { saveHash, getHashes } from './lib/db'

export default function Home() {

  const [file, setFile] = useState()
  const [ipfsHash, setIpfsHash] = useState()

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await ipfsClient.add(file)
      setIpfsHash(added.path)
      await onUpload(added.path) 
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function onUpload(hash) {
    await saveHash(hash)
  }

  async function loadHashes() {
    const hashes = await getHashes()
    console.log(hashes)
  }

  return (
    <>
      <input 
        type="file"
        onChange={onChange} 
      />
      
      <button onClick={loadHashes}>
        Carregar hashes
      </button>
    </>
  )

}