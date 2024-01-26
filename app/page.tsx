// import Image from 'next/image'
// import { BumpChart } from './components/BumpChart'

async function TestComponent() {
  console.log(process.env.TESTKV);
  process.env.TESTKV.put('test', 'test from kv local')
  return <div>
    <p>Hi</p>
  </div>
}

export default function Home() {
  return (
    <main>
      <h2>Test</h2>
      <TestComponent />
      <div className="h-[600px]">
        {/* <BumpChart /> */}
      </div>
    </main>
  )
}
