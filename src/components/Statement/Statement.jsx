// Statement.jsx — Statement section component.
// Props: statement (optional)

function Statement({ statement = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }) {
    return (
        <div className="flex flex-col items-center justify-center p-12 bg-card rounded-lg min-h-200">
            <h1 className="text-[44px] font-bold tracking-[-0.08em]">{statement}</h1>
        </div>
    );
}

export default Statement;



