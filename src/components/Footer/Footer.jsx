// Footer.jsx — Footer section component.
// Props: title (optional)

function Footer({ bio = 'Copyright © 2026 Galli. All rights reserved.' }) {
    return (
        <div className="flex flex-col items-center justify-center py-4 px-12 bg-card-dark rounded-lg min-h-40">
            <p className="text-base font-medium text-gray-900 dark:text-white">{bio}</p>
        </div>
    );
}

export default Footer;