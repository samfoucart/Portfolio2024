import './App.css';

function App() {
  return (
    <>
      <div className='h-dvh flex flex-col'>
        <div className='bg-amber-300 border-b-4 border-black'>
          <div className='p-28 w-6xl mx-auto my-0'>
            <a className='flex flex-row mb-4'>
              <div className='border-4 border-black bg-white'>
                <div className='p-2'>
                  <h2 className='text-xl font-bold'>Section 1</h2>
                </div>
              </div>
              <div className='border-t-4 border-r-4 border-b-4 border-black bg-amber-400'>
                <div className='p-2'>
                  <h2 className='text-xl font-bold'>Introduction</h2>
                </div>
              </div>
            </a>
            <div className='flex flex-row flex-wrap justify-center gap-x-8'>
              <div className='flex flex-col flex-grow flex-shrink-0 basis-1/3'>
                <h2 className='font-semibold text-6xl'>This is an aside.</h2>
                <p className='text-xl leading-8 text-left'>
                  This is my text. I am explainining something longer here.
                  On Friday, I went to Steak and Shake with Claire, and it reminded me of one of the first dates we wend on.
                  In the February, when we first started dating, I wasn't able to go to the homecoming dance because I was too old.
                  Instead, I went to see Wyclef Jean with the Columbus Symphony Orchestra with my mom at the Ohio Theater.
                  On the way back, I wanted to get Steak and Shake since she had mentioned it, and they were all inside, and I joined them.
                </p>
              </div>
              <div className='card-shadow flex-1 basis-1/3 max-w-max bg-white border-black border-4 p-24'>

              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="border-black border-4 rounded-3xl bg-violet-200 p-6 mx-auto mb-6">
              <h2 className='text-xl font-medium'>This is my header</h2>
              <p>This is my text. I am explainining something longer here.</p>
              <p>This is another paragraph.</p>
            </div>
          </div>
        </div>
        <div className='bg-cyan-200 border-b-4 border-black'>
          <div className='py-6 px-28 mx-auto w-6xl my-0'>
            
          </div>
        </div>
        <div className='bg-pink-400 flex flex-col flex-grow items-center'>
          <div className='p-28 w-6xl my-0'>
            <a className='flex flex-row'>
              <div className='border-4 border-black bg-white'>
                <div className='p-2'>
                  <h2 className='text-xl font-bold'>Section 2</h2>
                </div>
              </div>
              <div className='border-t-4 border-r-4 border-b-4 border-black bg-pink-500'>
                <div className='p-2'>
                  <h2 className='text-xl font-bold'>More</h2>
                </div>
              </div>
            </a>
            <h2 className='text-lg font-medium'>This is my header</h2>
            <p className='text-justify'>
              This is my text. I am explainining something longer here.
              On Friday, I went to Steak and Shake with Claire, and it reminded me of one of the first dates we wend on.
              In the February, when we first started dating, I wasn't able to go to the homecoming dance because I was too old.
              Instead, I went to see Wyclef Jean with the Columbus Symphony Orchestra with my mom at the Ohio Theater.
              On the way back, I wanted to get Steak and Shake since she had mentioned it, and they were all inside, and I joined them.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
