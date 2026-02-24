const projects = [
    {
    sector: 'Music',
    description: 'Making sure artists get paid for their work',
    client: 'PPl',
    date: 'Jan 2024 - Present',
    imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    sector: 'Construction',
    description: 'Software for a competitive advantage',
    client: 'Molson',
    date: 'Jan 2024 - Present',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    sector: 'Sports',
    description: 'The missed opportunity',
    client: 'Global Cycling Network',
    date: 'Jan 2024 - Present',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
    sector: 'Education',
    description: 'Using AI to remix and create new lesson plans',
    client: 'Pearson',
    date: 'Jan 2024 - Present',
    imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      
]
  
  export default function Projects() {
    return (
      <div className="flex w-full flex-col justify-center p-12 bg-card">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">Projects</h1>
        <ul role="list" className="w-full divide-y divide-gray-100 dark:divide-white/5">
            {projects.map((project) => (
            <li key={project.company + project.role} className="flex w-full items-center justify-between gap-x-12 py-5 border-b border-gray-200">
                <div className="flex min-w-0 items-center gap-x-12">
                    <img
                        alt=""
                        src={project.imageUrl}
                        className="size-16 flex-none rounded-full bg-gray-50 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
                    />
                    <div className="mb-4 min-w-0 flex-auto">
                        <p className="mb-2 text-xs font-bold tracking-wider uppercase text-gray-600 dark:text-white">{project.sector}</p>
                        <p className="mb-3 text-3xl font-semibold text-gray-900 dark:text-white">{project.description}</p>
                        <p className="text-base font-medium text-gray-600 dark:text-white">{project.client}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end sm:justify-center">
                    <p className="text-base text-gray-900 dark:text-white">{project.date}</p>
                </div>
            </li>
            ))}
        </ul>
      </div>
    )
  }
  