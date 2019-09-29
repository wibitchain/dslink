// NOTE: Aliases to classes and interfaces are used for external consumption.

// Core service exports.
import DsLinkCore from './core/Core';
import DsLinkConfig from './core/models/Config';
import {
ResponseModel as DsLinkResponseModel,
Response as DsLinkResponse
} from './common/Response';

export {
DsLinkConfig,
DsLinkCore,
DsLinkResponse,
DsLinkResponseModel
};

// Blockchain service exports.
import DsLinkBitcoinProcessor from './bitcoin/BitcoinProcessor';
import { IBitcoinConfig as IDsLinkBitcoinConfig } from './bitcoin/IBitcoinConfig';

export {
IDsLinkBitcoinConfig,
DsLinkBitcoinProcessor
};

// IPFS service exports.
import DsLinkIpfsService from './ipfs/RequestHandler';

export {
DsLinkIpfsService
};

