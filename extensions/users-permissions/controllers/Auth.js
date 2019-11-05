'use strict';

/**
 * Auth.js controller
 *
 * @description: A set of functions called "actions" for managing `Auth`.
 */

/* eslint-disable no-useless-escape */
const crypto = require('crypto');
const _ = require('lodash');
const grant = require('grant-koa');
const { sanitizeEntity } = require('strapi-utils');

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const formatError = error => [
  { messages: [{ id: error.id, message: error.message, field: error.field }] },
];

module.exports = {

  async connect(ctx, next) {
    return ctx.badRequest(null, 'firme');
    // const grantConfig = await strapi
    //   .store({
    //     environment: '',
    //     type: 'plugin',
    //     name: 'users-permissions',
    //     key: 'grant',
    //   })
    //   .get();

    // const [protocol, host] = strapi.config.url.split('://');
    // _.defaultsDeep(grantConfig, { server: { protocol, host } });

    // const provider =
    //   process.platform === 'win32'
    //     ? ctx.request.url.split('\\')[2]
    //     : ctx.request.url.split('/')[2];
    // const config = grantConfig[provider];

    // if (!_.get(config, 'enabled')) {
    //   return ctx.badRequest(null, 'This provider is disabled.');
    // }
    // // Ability to pass OAuth callback dynamically
    // grantConfig[provider].callback =
    //   ctx.query && ctx.query.callback
    //     ? ctx.query.callback
    //     : grantConfig[provider].callback;
    // return grant(grantConfig)(ctx, next);
  },
};
