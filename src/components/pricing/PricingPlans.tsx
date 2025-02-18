'use client';

// import { appHandler } from "@/utils/appHandler";
// import { Button } from "../ui/Button";
import { GetStartedButton } from "../common/GetStartedButton";

export function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: `Perfect for trying out Xefro Mirror \n Valid for 1 device \n 14 days free trial`,
      features: [
        "Basic screen mirroring",
        "Single device connection",
        "Standard quality",
        "Basic monitoring tools"
      ]
    },
    {
      name: "Pro",
      price: "$1.99",
      description: "For power users who need more",
      features: [
        "HD screen mirroring",
        "Multiple device connections",
        "Wireless screen mirroring",
        "Advanced monitoring tools",
        "Priority support",
        "No ads"
      ]
    },
    // {
    //   name: "Enterprise",
    //   price: "Custom",
    //   description: "For organizations with specific needs",
    //   features: [
    //     "Everything in Pro",
    //     "Custom integration",
    //     "Dedicated support",
    //     "SLA guarantee",
    //     "Team management"
    //   ]
    // }
  ];
  // const handleGetStarted = async () => {
  //   console.log('Checking app installation...');
  //   await appHandler.handleGetStarted();
  // };

  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className="w-full max-w-md group relative bg-[var(--card-purple)]/10 backdrop-blur-sm 
                         rounded-xl p-8 
                         transition-all duration-500 ease-out
                         hover:transform hover:scale-105
                         before:absolute before:inset-0 before:rounded-xl
                         before:border before:border-transparent before:transition-all
                         before:duration-500 hover:before:border-[var(--gradient-start)]"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 gradient-text">{plan.price}</div>
                <p className="text-[var(--text-secondary)] mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <GetStartedButton />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
} 