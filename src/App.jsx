import { useState } from 'react';
import Display from './components/Display';

const App = () => {
  const [ value, setValue ] = useState([])

  const handleBackspace = () => {
    try {
      if(value.length === 1 || value === 'Error!') {
        setValue([])
      } else {
        setValue(value.slice(0, -1))
      }

    } catch (error) {
      setValue('Error!')
    }
  }

  const handleCalculate = () => {
    try {
      setValue(eval(value))
    } catch (error) {
      setValue('Error!')
    }
  }


  return (
    <div className='flex justify-center self-center'>
      <div className='p-1 w-80 bg-neutral-800 rounded-md overflow-hidden shadow-lg shadow-cyan-600/50'>
        <h1 className='text-3xl text-white font-semibold text-center'>Calculator</h1>
        <div className='p-3 text-right bg-neutral-800 text-white font-semibold text-4xl'>
          <div className='my-1'>
            <Display value={value && value === '0' ? '0' : value } />
            <hr />
          </div>
        </div>
        <div className='flex gap-1 m-1'>
          <button 
            className='border border-slate-700 
            rounded text-white 
            bg-gray-800 w-20 h-12 
            text-xl hover:bg-gray-700'
            value='%' 
            onClick={event => setValue(value + event.target.value)}
          >
            %
          </button>
          <button 
            className='border border-slate-700 
            rounded text-white 
            bg-gray-800 w-20 h-12 
            text-xl hover:bg-gray-700'
            value='C' 
            onClick={() => setValue([])}
          >
            C
          </button>
          <button 
            className='border border-slate-700 
            rounded text-white 
            bg-gray-800 w-20 h-12 
            text-xl hover:bg-gray-700'
            value='←' 
            onClick={() => handleBackspace()}
            >
              ←
            </button>
          <button 
            className='border border-slate-700 
            rounded text-white 
            bg-gray-800 w-20 h-12 
            text-xl hover:bg-gray-700'
            value='/' 
            onClick={event => setValue(value + event.target.value)}
            >
              /
            </button>
        </div>

        <div className='flex gap-1 m-1'>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='7' 
              onClick={event => setValue(value + event.target.value)}
            >
              7
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='8' 
              onClick={event => setValue(value + event.target.value)}
            >
              8
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='9' 
              onClick={event => setValue(value + event.target.value)}
            >
              9
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-gray-800 w-20 h-12 
              text-xl hover:bg-gray-700'
              value='*' 
              onClick={event => setValue(value + event.target.value)}
            >
              x
            </button>
        </div>

        <div className='flex gap-1 m-1'>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='4' 
              onClick={event => setValue(value + event.target.value)}
            >
              4
            </button>
            <button
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='5' 
              onClick={event => setValue(value + event.target.value)}
            >
              5
            </button>
            <button
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='6' 
              onClick={event => setValue(value + event.target.value)}
            >
              6
            </button>
            <button
              className='border border-slate-700 
              rounded text-white 
              bg-gray-800 w-20 h-12 
              text-xl hover:bg-gray-700' 
              value='-' 
              onClick={event => setValue(value + event.target.value)}
            >
              -
            </button>
        </div>

        <div className='flex gap-1 m-1'>
            <button
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='1' 
              onClick={event => setValue(value + event.target.value)}
            >
              1
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='2' 
              onClick={event => setValue(value + event.target.value)}
            >
              2
            </button>
            <button
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600' 
              value='3' 
              onClick={event => setValue(value + event.target.value)}
            >
              3
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-gray-800 w-20 h-12 
              text-xl hover:bg-gray-700'
              value='+' 
              onClick={event => setValue(value + event.target.value)}
            >
              +
            </button>
        </div>

        <div className='flex gap-1 m-1'>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='0' 
              onClick={event => setValue(value + event.target.value)}
            >
              0
            </button>
            <button 
              className='border border-slate-700 
              rounded text-white 
              bg-zinc-700 w-20 h-12 
              text-xl hover:bg-zinc-600'
              value='.' 
              onClick={event => setValue(value + event.target.value)}
            >
              .
            </button>
            <button 
              className='border border-slate-700 
              rounded text-zinc-950 
              bg-cyan-500 w-36 h-12 
              text-xl hover:bg-cyan-600'
              value='=' 
              onClick={() => handleCalculate()}
            >
              =
            </button>
        </div>
      </div>

    </div>
  )
}

export default App