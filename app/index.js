const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const session = require('koa-session');
const path = require('path');
const staticCache = require('koa-static-cache');

const app = new Koa();
const router = new Router();

const SESSION_CONFIG = {
  key: 'carrie:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false,
};
app.use(session(SESSION_CONFIG, app));
app.use(koaBody({
  multipart: true,
  strict: false,
}));

app.use(staticCache(path.join(__dirname, '../dist'), {
  maxAge: 365 * 24 * 60 * 60,
}));

router
  .get('/', (ctx) => {
    ctx.body = JSON.stringify(ctx.request);
  })
  .post('/test/:id', (ctx) => {
    ctx.body = ctx.params;
  });

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
