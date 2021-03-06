import { createPlugin } from "@mapstore/utils/PluginsUtils";
import { augmentStore } from '../MapStore2/web/client/utils/StateUtils';
let loaded = false;
/*
    dynamic import using plugin loader doesn't add reducers and epics (extension loading does it, so in production it will work)
    Waiting for an improvement/generalization of plugin loader, to workaround this problem this function adds to the store the reducers and epics on plugin load.
*/
const updatePlugins = (impl) => {
    // loader is called a lot of time at the beginning but augmentStore have to be called only once
    // or a lot of copies of the same epic will be added
    if (!loaded) {
        loaded = true;
        augmentStore({ reducers: impl.reducers || {}, epics: impl.epics || {} });
    }
};

export default {
    Cadastrapp: createPlugin('Helloworld', {
        lazy: true,
        loader: () => import(/* webpackChunkName: "extensions/helloworld" */`./extensions/helloworld/plugins/Helloworld`).then((impl) => {
            updatePlugins(impl.default);
            return impl;
        })
    })
};
