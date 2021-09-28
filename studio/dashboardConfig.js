export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615365f879311326ff9c5797',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-41a8bsx7',
                  apiId: '3964a063-83bd-4c00-833e-5acd89ff53a0'
                },
                {
                  buildHookId: '615365f80b5c612192ba8ec9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-baq6gduo',
                  apiId: '92fd1097-66c1-4e24-bf7f-c8fc0713e6e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ronaldo888kgs/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-baq6gduo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
