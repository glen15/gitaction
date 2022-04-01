'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'project-02-gitaction : version 2.0'
  })
}
