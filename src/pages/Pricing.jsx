// Pricing.jsx — Page component that assembles pricing cards with plan data.

import PricingCard from '../components/PricingCard/PricingCard';
import Hero from '../components/Hero/Hero';
import Statement from '../components/Statement/Statement';
import List from '../components/List/List';


function Pricing() {
    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        <>
            <Hero />

            <div className="flex gap-6 justify-center items-start">
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
                <PricingCard {...proPlan} />
            </div>
        
            {/*<div className="flex flex-col items-center justify-center p-12 bg-card rounded-lg m-8">
                <p className="text-2xl text-text-secondary leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>*/}

            <Statement />
            <List />
        </>
    );
}

export default Pricing;

