import BillingCycle, { methods, updateOptions } from './billingCycle';

methods(['GET','POST', 'PUT', 'DELETE'])
updateOptions({new: true, runValidators: true})


export default BillingCycle