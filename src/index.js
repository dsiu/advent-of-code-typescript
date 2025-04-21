'use strict';
import { Logger } from 'sitka';
export class Example {
    /* Private Instance Fields */
    _logger;
    /* Constructor */
    constructor() {
        this._logger = Logger.getLogger({ name: this.constructor.name });
    }
    /* Public Instance Methods */
    exampleMethod(param) {
        this._logger.debug('Received: ' + param);
        return param;
    }
}
//# sourceMappingURL=index.js.map