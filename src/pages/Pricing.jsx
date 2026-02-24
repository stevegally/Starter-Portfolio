// Pricing.jsx — Page component that assembles pricing cards with plan data.

import Header from '../components/Header/Header';
import PricingCard from '../components/PricingCard/PricingCard';
import Hero from '../components/Hero/Hero';
import Statement from '../components/Statement/Statement';
import Projects from '../components/Projects/Projects';
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
            <Header />
            <Hero />
            <Statement />
            <Projects />
            <List />
        </>
    );
}

export default Pricing;

