const bcrypt = require('bcrypt')

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports = () => {
  strapi.app.use(async (ctx, next) => {
    let salt = await bcrypt.genSalt(saltRounds)
    let hash = await bcrypt.hash(myPlaintextPassword, salt)
    console.log('pre cole')
    await next();
    console.log('pos cole')
  });
}