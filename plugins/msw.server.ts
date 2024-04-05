import { server } from '~/mocks/server'

export default defineNuxtPlugin(() => {
    server.listen({ onUnhandledRequest: 'bypass' })
    console.log('server msw open......')
})
