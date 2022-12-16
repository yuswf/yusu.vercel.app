import {configureStore} from '@reduxjs/toolkit';

import meReducer from './Me';

export default configureStore({
    reducer: {
        me: meReducer,
    },
});
