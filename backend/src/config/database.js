import { Promise, connect } from 'mongoose';
Promise = global.Promise

export default connect('mongodb://localhost/mymoney',{useNewUrlParser: true})