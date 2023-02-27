const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

const posts = [];
//let nextId = 1;

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.body = posts;
});

router.post('/posts', async(ctx, next) => {
    posts.push({...ctx.request.body});
    ctx.response.status = 204;
});

router.delete('/posts/:id', async(ctx, next) => {
    const noteId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === noteId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});

router.get('/posts/:id', async (ctx, next) => {
    const id = Number(ctx.params.id);
    console.log(id, ' id')
    const idx = posts.findIndex(el => el.id === id);

    if (idx !== -1) {
        ctx.response.body = posts[idx];
    } else {
        ctx.response.status = 404;
    }
})

router.put('/posts/:id', (ctx, next) => {

    const {content, created} =  ctx.request.body;
    const id = Number(ctx.params.id);
    const idx = posts.findIndex(el => el.id === id);

    if (idx !== -1) {

        posts[idx] = {
            ...posts[idx],
            id,
            content,
            created
        };
        ctx.response.body = posts[idx];
    } else {
        ctx.response.status = 404;
        ctx.response.text = "books | not found";
    }
});


app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log('server started'));
