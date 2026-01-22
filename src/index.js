/**
 * Copyright IBM Corp. 2019, 2025
 * SPDX-License-Identifier: MIT
 */

const auth = require('./auth');
const secrets = require('./secrets');
const pki = require('./pki');

module.exports = {
    auth,
    secrets,
    pki
};