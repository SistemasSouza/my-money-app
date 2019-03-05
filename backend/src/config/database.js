import { connect } from 'mongoose';

export default connect('mongodb://localhost/mymoney',{useNewUrlParser: true})