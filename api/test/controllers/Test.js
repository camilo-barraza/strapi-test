'use strict';
const { sanitizeEntity } = require('strapi-utils');
const bcrypt = require('bcrypt')

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  async find(ctx) {
    console.log('test mono')
    let salt = await bcrypt.genSalt(saltRounds)
    let hash = await bcrypt.hash(myPlaintextPassword, salt)
    console.log(hash)
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.test.search(ctx.query);
    } else {
      entities = await strapi.services.test.find(ctx.query);
    }
    
    return entities.map(entity => sanitizeEntity(entity,  {model:Test}));
  },
};
