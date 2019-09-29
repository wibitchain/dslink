## [DsLink自主身份](http://www.dslink.net/)
# DsLink Node.js implementation
The Node.js implementation of a blockchain-agnostic DsLink Node using TypeScript.

[![Build Status](https://travis-ci.org/decentralized-identity/DsLink.svg?branch=master)](https://travis-ci.org/decentralized-identity/DsLink)

See the [protocol document](docs/protocol.md) for the full DsLink protocol specification.

See the [implementation document](docs/implementation.md) for the detailed description of this implementation.


## Contribution Guidelines:

1. Must pass `npm run test`.
1. Must pass `npm run lint`.
1. Prefix an interface that require implementation with `I`. e.g. `ITransactionProcessor`.
1. Suffix a data-holder interface (without definition of methods) with `Model`. e.g. `TransactionModel`.
1. Use default export if class/interface name matches the file name.
1. Sort imports.

## Docker
> NOTE: 2019-08-13: docker-compose out-of-date, needs to be udpated.

The DsLink components are available via docker containers . Please see the docker document to find out details on building and running.
