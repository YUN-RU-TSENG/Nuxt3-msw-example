import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('https://fakestoreapi.com/products', () => {
        return HttpResponse.json({
            todo: [
                { id: 1, name: 'one' },
                { id: 2, name: 'two' },
            ],
        })
    }),
]
