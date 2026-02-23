// Header.jsx — Header section component.
// Props: roles (optional)

function Header({ page= ['About', 'Project 1', 'Project 2', 'Project 3'] }) {
    return (
        <div className="flex flex-col items-end justify-center py-4 px-12 bg-card rounded-lg m-0 min-h-20">
            <ul className="flex flex-row gap-8">
                {page.map((role) => (
                    <li key={role} className="text-base text-gray-900 dark:text-white">{role}</li>
                ))}
            </ul>
        </div>
    );
}

export default Header;
