const Koa = require('koa');
const koaBody = require('koa-body');
const session = require('koa-session');
const routes = require('./routers');

const app = new Koa();

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

routes(app);
app.listen(3001);
