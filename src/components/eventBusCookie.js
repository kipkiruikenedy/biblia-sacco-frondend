// eventBus.js
import { ref, provide, inject } from 'vue';

const eventBus = {
    leavePrivacyPolicy: ref(null),
};

const EventBusSymbol = Symbol('EventBus');

export const provideEventBus = () => {
    provide(EventBusSymbol, eventBus);
};

export const injectEventBus = () => {
    return inject(EventBusSymbol);
};
