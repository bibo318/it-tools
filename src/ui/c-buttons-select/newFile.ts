import _ from 'lodash';
import type { CLabelProps } from '../c-label/c-label.types';
import type { CButtonSelectOption } from './c-buttons-select.types';
import { __VLS_Prettify, __VLS_WithDefaults, __VLS_TypePropsToRuntimeProps } from './c-buttons-select.vue';

export default (<T extends unknown>(
__VLS_props: Awaited<typeof __VLS_setup>['props'],
__VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, 'attrs' | 'emit' | 'slots'>>,
__VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>['expose'],
__VLS_setup = (async () => {
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = withDefaults(
defineProps<{
options?: CButtonSelectOption<T>[] | string[] | Record<string, T>;
value?: T;
size?: 'small' | 'medium' | 'large';
} & CLabelProps>(),
{
options: () => [],
value: undefined,
labelPosition: 'left',
size: 'medium',
}
);

const emits = defineEmits(['update:value']);

const { options: rawOptions, size } = toRefs(props);

const options = computed<CButtonSelectOption<T>[]>(() => {
if (_.isArray(rawOptions.value)) {
return rawOptions.value.map((option: string | CButtonSelectOption<T>) => {
if (typeof option === 'string') {
return { label: option, value: option };
}

return option;
}) as CButtonSelectOption<T>[];
}

return _.map(rawOptions.value, (value, label) => ({ label, value })) as CButtonSelectOption<T>[];
});

const value = useVModel(props, 'value', emits);

function selectOption(option: CButtonSelectOption<T>) {
// @ts-expect-error vue template generic is a bit flacky thanks to withDefaults
value.value = option.value;
}
const __VLS_withDefaultsArg = (function <T>(t: T) { return t; })({
options: () => [],
value: undefined,
labelPosition: 'left',
size: 'medium',
});

const __VLS_componentsOption = {};

let __VLS_name!: 'c-buttons-select';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'CLabel', typeof __VLS_localComponents, "CLabel", "cLabel", "c-label"> &
__VLS_WithComponent<'CTooltip', typeof __VLS_localComponents, "CTooltip", "cTooltip", "c-tooltip"> &
__VLS_WithComponent<'CButton', typeof __VLS_localComponents, "CButton", "cButton", "c-button">;
__VLS_components.CLabel; __VLS_components.CLabel; __VLS_components.cLabel; __VLS_components.cLabel; __VLS_components["c-label"]; __VLS_components["c-label"];
// @ts-ignore
[CLabel, CLabel,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_components.CTooltip; __VLS_components.CTooltip; __VLS_components.cTooltip; __VLS_components.cTooltip; __VLS_components["c-tooltip"]; __VLS_components["c-tooltip"];
// @ts-ignore
[CTooltip, CTooltip,];
__VLS_components.CButton; __VLS_components.CButton; __VLS_components.cButton; __VLS_components.cButton; __VLS_components["c-button"]; __VLS_components["c-button"];
// @ts-ignore
[CButton, CButton,];
{
const __VLS_0 = ({} as 'CLabel' extends keyof typeof __VLS_ctx ? { 'CLabel': typeof __VLS_ctx.CLabel; } : 'cLabel' extends keyof typeof __VLS_ctx ? { 'CLabel': typeof __VLS_ctx.cLabel; } : 'c-label' extends keyof typeof __VLS_ctx ? { 'CLabel': (typeof __VLS_ctx)["c-label"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).CLabel;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, ...(props), }));
({} as { CLabel: typeof __VLS_0; }).CLabel;
({} as { CLabel: typeof __VLS_0; }).CLabel;
const __VLS_2 = __VLS_1({ ...{}, ...(props), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, ...(props), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("flex gap-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("flex gap-2"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
for (const [option] of __VLS_getVForSourceType((__VLS_ctx.options)!)) {
{
const __VLS_10 = ({} as 'CTooltip' extends keyof typeof __VLS_ctx ? { 'CTooltip': typeof __VLS_ctx.CTooltip; } : 'cTooltip' extends keyof typeof __VLS_ctx ? { 'CTooltip': typeof __VLS_ctx.cTooltip; } : 'c-tooltip' extends keyof typeof __VLS_ctx ? { 'CTooltip': (typeof __VLS_ctx)["c-tooltip"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).CTooltip;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({ ...{}, key: ((option.value)), tooltip: ((option.tooltip)), }));
({} as { CTooltip: typeof __VLS_10; }).CTooltip;
({} as { CTooltip: typeof __VLS_10; }).CTooltip;
const __VLS_12 = __VLS_11({ ...{}, key: ((option.value)), tooltip: ((option.tooltip)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, key: ((option.value)), tooltip: ((option.tooltip)), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = ({} as 'CButton' extends keyof typeof __VLS_ctx ? { 'CButton': typeof __VLS_ctx.CButton; } : 'cButton' extends keyof typeof __VLS_ctx ? { 'CButton': typeof __VLS_ctx.cButton; } : 'c-button' extends keyof typeof __VLS_ctx ? { 'CButton': (typeof __VLS_ctx)["c-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).CButton;
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{ onClick: {} as any, }, testId: ((option.value)), size: ((__VLS_ctx.size)), type: ((option.value === __VLS_ctx.value ? 'primary' : 'default')), }));
({} as { CButton: typeof __VLS_15; }).CButton;
({} as { CButton: typeof __VLS_15; }).CButton;
const __VLS_17 = __VLS_16({ ...{ onClick: {} as any, }, testId: ((option.value)), size: ((__VLS_ctx.size)), type: ((option.value === __VLS_ctx.value ? 'primary' : 'default')), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, testId: ((option.value)), size: ((__VLS_ctx.size)), type: ((option.value === __VLS_ctx.value ? 'primary' : 'default')), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
let __VLS_20 = { 'click': __VLS_pickEvent(__VLS_19['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_16, typeof __VLS_17>).onClick) };
__VLS_20 = {
click: $event => {
__VLS_ctx.selectOption(option);
// @ts-ignore
[options, size, value, size, value, size, value, selectOption,];
}
};
(option.label);
(__VLS_18.slots!).default;
}
(__VLS_13.slots!).default;
}
}
(__VLS_8.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
size: size as typeof size,
options: options as typeof options,
value: value as typeof value,
selectOption: selectOption as typeof selectOption,
};
},
props: {} as __VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<typeof __VLS_fnPropsTypeOnly>, typeof __VLS_withDefaultsArg>,
emits: ({} as __VLS_NormalizeEmits<typeof emits>),
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
emits: ({} as __VLS_NormalizeEmits<typeof emits>),
});
let __VLS_fnPropsTypeOnly!: {} & {
options?: CButtonSelectOption<T>[] | string[] | Record<string, T>;
value?: T;
size?: 'small' | 'medium' | 'large';
} & CLabelProps;
let __VLS_fnPropsDefineComponent!: InstanceType<typeof __VLS_fnComponent>['$props'];
let __VLS_fnPropsSlots!: {};
let __VLS_defaultProps!: import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps;
return {} as {
props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<typeof __VLS_fnPropsDefineComponent & typeof __VLS_fnPropsTypeOnly, keyof typeof __VLS_defaultProps>> & typeof __VLS_fnPropsSlots & typeof __VLS_defaultProps;
expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
attrs: any;
slots: ReturnType<typeof __VLS_template>;
emit: typeof emits;
};
})()
) => ({} as import('vue').VNode & { __ctx?: Awaited<typeof __VLS_setup>; }));
