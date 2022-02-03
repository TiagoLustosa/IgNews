import { query as q } from 'faunadb'
import NextAuth, { Account, CallbacksOptions, Profile, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { fauna } from '../../../services/fauna'
import { FaunaAdapter } from '@next-auth/fauna-adapter'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: 'https://github.com/login/oauth/authorize?scope=read:user+user:email'
        }),
    ],
    adapter: FaunaAdapter(fauna),
    callbacks: {
        async signIn(user) {
            const { email } = user
            await fauna.query(
                q.Create(
                    q.Collection('users'),
                    { data: { email } }
                ))
            return true
        }
    }
})
