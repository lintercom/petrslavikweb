// Optional standalone API behind a same-origin reverse proxy; never included in browser bundles.
import { createServer } from 'node:http';
import { createConsultantApi, configuration } from './consultant/api.mjs';
const handler = createConsultantApi(configuration());
createServer((req,res)=>handler(req,res,()=>{res.statusCode=404;res.end();})).listen(Number(process.env.CONSULTANT_PORT || 3001),'127.0.0.1');
