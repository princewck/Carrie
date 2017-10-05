import dva from 'dva';
import 'antd/dist/antd.css';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products'));
app.model(require('./models/tags'));
app.model(require('./models/subjects'));
app.model(require('./models/chapters'));
app.model(require('./models/questions'));
app.model(require('./models/chapterFilter'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
