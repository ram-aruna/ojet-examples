define(["require", "exports", "ojs/ojmodule-element-utils"], function (require, exports, ModuleElementUtils) {
    "use strict";
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.resolveViewAndViewModel = function (name, moduleConfig, cleanUpMode, params) {
            var viewPath = 'views/' + name + '.html';
            var viewmodelPath = 'viewModels/' + name;
            var viewPromises = Promise.all([
                ModuleElementUtils.createView({ viewPath: viewPath }),
                ModuleElementUtils.createViewModel({ viewModelPath: viewmodelPath })
            ]);
            viewPromises.then(function (values) {
                var viewModel = new values[1](params);
                moduleConfig({ view: values[0], viewModel: viewModel, cleanupMode: cleanUpMode ? cleanUpMode : "onDisconnect" });
            }, function (rejectReason) {
                console.log(rejectReason);
            });
        };
        return Utils;
    }());
    return Utils;
});
//# sourceMappingURL=Utils.js.map