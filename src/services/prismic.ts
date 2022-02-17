import *  as prismic from '@prismicio/client'

const repoName = 'TIgNews'

const endpoint = prismic.getRepositoryEndpoint(repoName)

export const prismicClient = prismic.createClient(
    endpoint,
    {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
)
