import express from 'express'
import BillingCycleService from '../api/billingCycle/billingCycleService'

export default (server) => {
    //Definir url base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de ciclo de pagamento
    return(
        BillingCycleService.register(router,'/billingCycles')
    )
}