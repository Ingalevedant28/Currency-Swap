import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App