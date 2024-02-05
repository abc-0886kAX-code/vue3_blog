const ScrollbarSymbolName = Symbol('Scrollbar');

export function useScrollbarSetup() {
    const ScrollbarRefs = ref(null);
    const top = ref(0);
    function setScrollbarTopValue(value) {
        top.value = value;
    }

    provide(ScrollbarSymbolName, {
        ref: ScrollbarRefs,
        top: top,
    });

    return {
        ScrollbarRefs,
        setScrollbarTopValue
    }
};
export function useScrollbar() {
    const scrollbar = inject(ScrollbarSymbolName, shallowRef(null));

    return scrollbar;
}
