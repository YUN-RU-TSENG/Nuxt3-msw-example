import { worker } from '~/mocks/browser'

export default defineNuxtPlugin(async () => {
    await worker.start({ onUnhandledRequest: 'bypass' })
    console.log('client msw open......')
})
