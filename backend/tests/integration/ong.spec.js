const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('NGO', () => {
    beforeEach(async ()=>{
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async ()=>{
        await connection.destroy()
    })

    it('should create a new NGO', async () => {
        const response = await request(app).post('/ongs').send({
            name: "ong-2",
            email: "contato2@ong.com",
            whatsapp: "99213456783",
            city: "São Paulo",
            uf: "SP"
        })

        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)

    })



})