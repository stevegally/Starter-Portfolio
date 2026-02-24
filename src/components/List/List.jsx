const people = [
    {
      company: 'Amdaris',
      role: 'Senior Product Designer',
      date: 'Jan 2024 - Present',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    company: 'PlaySports',
    role: 'Product Designer',
    date: 'Jan 2024 - Present',
    imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    company: 'Blispa',
    role: 'UI/UX Designer',
    date: 'Jan 2024 - Present',
    imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    company: 'Freelance',
    role: 'UI/UX Designer',
    date: 'Jan 2024 - Present',
    imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    company: 'Future',
    role: 'Digital Designer - FutureFolio',   
    date: 'Jan 2024 - Present',
    imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },    
    {
    company: 'Future',
    role: 'Art Editor - Magazines',
    date: 'Jan 2024 - Present',
    imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  
  export default function Example() {
    return (
      <div className="flex w-full flex-col justify-center p-12 bg-card">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">Work Experience</h1>
        <ul role="list" className="w-full divide-y divide-gray-100 dark:divide-white/5">
            {people.map((person) => (
            <li key={person.company + person.role} className="flex w-full items-center justify-between gap-x-12 py-5 border-b border-gray-200">
                <div className="flex min-w-0 items-center gap-x-12">
                    <img
                        alt=""
                        src={person.imageUrl}
                        className="size-12 flex-none rounded-full bg-gray-50 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
                    />
                    <div className="min-w-0 flex-auto">
                        <p className="text-lg font-extrabold text-gray-900 dark:text-white">{person.company}</p>
                        <p className="text-base text-gray-900 dark:text-white">{person.role}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end sm:justify-center">
                    <p className="text-base text-gray-600 dark:text-white">{person.date}</p>
                </div>
            </li>
            ))}
        </ul>
      </div>
    )
  }
  