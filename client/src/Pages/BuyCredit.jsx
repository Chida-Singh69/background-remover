import React from 'react'

const plans = [
  {
    name: "Starter",
    price: "Free",
    credits: 3,
    features: [
      "3 background removals",
      "Basic support",
      "No credit card required"
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹ 100",
    credits: 50,
    features: [
      "50 background removals",
      "Priority support",
      "High-res downloads"
    ],
    button: "Buy Now",
    highlight: true,
  },
  {
    name: "Business",
    price: "₹ 1000",
    credits: 1500,
    features: [
      "250 background removals",
      "Premium support",
      "High-res downloads"
    ],
    button: "Buy Now",
    highlight: false,
  },
];

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-900 py-12 px-4">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Buy Credits</h2>
      <p className="text-gray-300 mb-10 text-center max-w-xl">
        Choose the plan that fits your needs. Credits let you remove backgrounds from your images instantly.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`
              flex flex-col items-center bg-gray-800 rounded-2xl shadow-lg p-8
              ${plan.highlight ? "border-4 border-violet-600 scale-105 z-10" : "border border-gray-700"}
              transition-all duration-300 hover:scale-105
            `}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-violet-400 mb-1">
              {plan.price}
              {plan.price !== "Free" && <span className="text-base text-gray-400 font-normal">/one-time</span>}
            </div>
            <div className="text-gray-300 mb-4">{plan.credits} credits</div>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-200 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-violet-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`
                w-full py-2 rounded-full font-semibold
                ${plan.highlight
                  ? "bg-violet-600 hover:bg-violet-700 text-white shadow"
                  : "bg-gray-700 hover:bg-gray-600 text-white"}
                transition-all duration-200
              `}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
