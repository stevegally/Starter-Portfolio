// Hero.jsx — Hero section component.
// Props: title (optional)

function Hero({ title = 'galli' }) {
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg min-h-200">
            <h1 className="text-[300px] font-bold tracking-[-0.08em]">{title}</h1>
        </div>
    );
}

export default Hero;



