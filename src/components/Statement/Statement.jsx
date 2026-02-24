// Statement.jsx — Statement section component.
// Props: statement (optional)

const defaultStatement = (
    <>
        Lorem ipsum dolor sit amet, <span className="underline">adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in <span className="underline">reprehenderi</span> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </>
);

function Statement({ statement = defaultStatement }) {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-card rounded-lg min-h-200">
            <h1 className="text-[44px] font-bold tracking-[-0.08em]">{statement}</h1>
        </div>
    );
}

export default Statement;



