import {rest } from "msw"
export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users',(req,res,ctx) => {
        return res(ctx.status(200),ctx.json([
            {
                name:'Asif',
                email:'asik12@gmail.com'
            },
            {
                name:'Adil',
                email:'adil12@gmail.com'
            },
            {
                name:'Arif',
                email:'arif12@gmail.com'
            }
        ]))
    })
]