// Header.jsx — Header section component.
// Props: roles (optional)

function Header({ page= ['About', 'Project 1', 'Project 2', 'Project 3'] }) {
    return (
        <div className="flex flex-row items-end justify-between align-middle py-4 px-12 bg-card rounded-lg m-0 min-h-20">
            
            <img
                alt=""
                src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
                className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
            />           
            
            <ul className="flex flex-row gap-8">
                {page.map((role) => (
                    
                    <li key={role} className="text-base text-gray-900 dark:text-white">{role}</li>
                ))}
            </ul>
        </div>
    );
}

export default Header;
