import { n as onDestroy } from "./index-server.js";
import { F as get, L as writable, M as escape_html, P as derived, _t as fallback, f as slot, g as unsubscribe_stores, h as stringify, i as bind_props, m as store_get, n as attr_style, p as spread_props, r as attributes, s as ensure_array_like, t as attr_class } from "./server.js";
import "./index-server2.js";
//#region node_modules/svelte-writable-derived/index.mjs
/**
* @external Store
* @see [Svelte stores](https://svelte.dev/docs#component-format-script-4-prefix-stores-with-$-to-access-their-values-store-contract)
*/
/**
* Create a store similar to [Svelte's `derived`](https://svelte.dev/docs#run-time-svelte-store-writable),
* but which has its own `set` and `update` methods and can send values back to the origin stores.
* [Read more...](https://github.com/PixievoltNo1/svelte-writable-derived#default-export-writablederived)
* 
* @param {Store|Store[]} origins One or more stores to derive from. Same as
* [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 1st parameter.
* @param {!Function} derive The callback to determine the derived value. Same as
* [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 2nd parameter.
* @param {!Function} reflect Called when the derived store gets a new value via its `set` or
* `update` methods, and determines new values for the origin stores.
* [Read more...](https://github.com/PixievoltNo1/svelte-writable-derived#new-parameter-reflect)
* @param [initial] The new store's initial value. Same as
* [`derived`](https://svelte.dev/docs#run-time-svelte-store-writable)'s 3rd parameter.
* 
* @returns {Store} A writable store.
*/
function writableDerived(origins, derive, reflect, initial) {
	var childDerivedSetter, originValues, blockNextDerive = false;
	var reflectOldValues = reflect.length >= 2;
	var wrappedDerive = (got, set, update) => {
		childDerivedSetter = set;
		if (reflectOldValues) originValues = got;
		if (!blockNextDerive) {
			let returned = derive(got, set, update);
			if (derive.length < 2) set(returned);
			else return returned;
		}
		blockNextDerive = false;
	};
	var childDerived = derived(origins, wrappedDerive, initial);
	var singleOrigin = !Array.isArray(origins);
	function doReflect(reflecting) {
		var setWith = reflect(reflecting, originValues);
		if (singleOrigin) {
			blockNextDerive = true;
			origins.set(setWith);
		} else setWith.forEach((value, i) => {
			blockNextDerive = true;
			origins[i].set(value);
		});
		blockNextDerive = false;
	}
	var tryingSet = false;
	function update(fn) {
		var isUpdated, mutatedBySubscriptions, oldValue, newValue;
		if (tryingSet) {
			newValue = fn(get(childDerived));
			childDerivedSetter(newValue);
			return;
		}
		var unsubscribe = childDerived.subscribe((value) => {
			if (!tryingSet) oldValue = value;
			else if (!isUpdated) isUpdated = true;
			else mutatedBySubscriptions = true;
		});
		newValue = fn(oldValue);
		tryingSet = true;
		childDerivedSetter(newValue);
		unsubscribe();
		tryingSet = false;
		if (mutatedBySubscriptions) newValue = get(childDerived);
		if (isUpdated) doReflect(newValue);
	}
	return {
		subscribe: childDerived.subscribe,
		set(value) {
			update(() => value);
		},
		update
	};
}
//#endregion
//#region node_modules/svelte-french-toast/dist/core/store.js
var TOAST_LIMIT = 20;
var toasts = writable([]);
var pausedAt = writable(null);
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
	if (toastTimeouts.has(toastId)) return;
	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		remove(toastId);
	}, 1e3);
	toastTimeouts.set(toastId, timeout);
};
var clearFromRemoveQueue = (toastId) => {
	const timeout = toastTimeouts.get(toastId);
	if (timeout) clearTimeout(timeout);
};
function update(toast) {
	if (toast.id) clearFromRemoveQueue(toast.id);
	toasts.update(($toasts) => $toasts.map((t) => t.id === toast.id ? {
		...t,
		...toast
	} : t));
}
function add(toast) {
	toasts.update(($toasts) => [toast, ...$toasts].slice(0, TOAST_LIMIT));
}
function upsert(toast) {
	if (get(toasts).find((t) => t.id === toast.id)) update(toast);
	else add(toast);
}
function dismiss(toastId) {
	toasts.update(($toasts) => {
		if (toastId) addToRemoveQueue(toastId);
		else $toasts.forEach((toast) => {
			addToRemoveQueue(toast.id);
		});
		return $toasts.map((t) => t.id === toastId || toastId === void 0 ? {
			...t,
			visible: false
		} : t);
	});
}
function remove(toastId) {
	toasts.update(($toasts) => {
		if (toastId === void 0) return [];
		return $toasts.filter((t) => t.id !== toastId);
	});
}
function startPause(time) {
	pausedAt.set(time);
}
function endPause(time) {
	let diff;
	pausedAt.update(($pausedAt) => {
		diff = time - ($pausedAt || 0);
		return null;
	});
	toasts.update(($toasts) => $toasts.map((t) => ({
		...t,
		pauseDuration: t.pauseDuration + diff
	})));
}
var defaultTimeouts = {
	blank: 4e3,
	error: 4e3,
	success: 2e3,
	loading: Infinity,
	custom: 4e3
};
function useToasterStore(toastOptions = {}) {
	return {
		toasts: writableDerived(toasts, ($toasts) => $toasts.map((t) => ({
			...toastOptions,
			...toastOptions[t.type],
			...t,
			duration: t.duration || toastOptions[t.type]?.duration || toastOptions?.duration || defaultTimeouts[t.type],
			style: [
				toastOptions.style,
				toastOptions[t.type]?.style,
				t.style
			].join(";")
		})), ($toasts) => $toasts),
		pausedAt
	};
}
//#endregion
//#region node_modules/svelte-french-toast/dist/core/types.js
var isFunction = (valOrFunction) => typeof valOrFunction === "function";
var resolveValue = (valOrFunction, arg) => isFunction(valOrFunction) ? valOrFunction(arg) : valOrFunction;
//#endregion
//#region node_modules/svelte-french-toast/dist/core/utils.js
var genId = (() => {
	let count = 0;
	return () => {
		count += 1;
		return count.toString();
	};
})();
var prefersReducedMotion = (() => {
	let shouldReduceMotion;
	return () => {
		if (shouldReduceMotion === void 0 && typeof window !== "undefined") {
			const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
			shouldReduceMotion = !mediaQuery || mediaQuery.matches;
		}
		return shouldReduceMotion;
	};
})();
//#endregion
//#region node_modules/svelte-french-toast/dist/core/toast.js
var createToast = (message, type = "blank", opts) => ({
	createdAt: Date.now(),
	visible: true,
	type,
	ariaProps: {
		role: "status",
		"aria-live": "polite"
	},
	message,
	pauseDuration: 0,
	...opts,
	id: opts?.id || genId()
});
var createHandler = (type) => (message, options) => {
	const toast = createToast(message, type, options);
	upsert(toast);
	return toast.id;
};
var toast = (message, opts) => createHandler("blank")(message, opts);
toast.error = createHandler("error");
toast.success = createHandler("success");
toast.loading = createHandler("loading");
toast.custom = createHandler("custom");
toast.dismiss = (toastId) => {
	dismiss(toastId);
};
toast.remove = (toastId) => remove(toastId);
toast.promise = (promise, msgs, opts) => {
	const id = toast.loading(msgs.loading, {
		...opts,
		...opts?.loading
	});
	promise.then((p) => {
		toast.success(resolveValue(msgs.success, p), {
			id,
			...opts,
			...opts?.success
		});
		return p;
	}).catch((e) => {
		toast.error(resolveValue(msgs.error, e), {
			id,
			...opts,
			...opts?.error
		});
	});
	return promise;
};
//#endregion
//#region node_modules/svelte-french-toast/dist/core/use-toaster.js
function calculateOffset(toast, $toasts, opts) {
	const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
	const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height);
	const toastIndex = relevantToasts.findIndex((t) => t.id === toast.id);
	const toastsBefore = relevantToasts.filter((toast, i) => i < toastIndex && toast.visible).length;
	return relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
}
var handlers = {
	startPause() {
		startPause(Date.now());
	},
	endPause() {
		endPause(Date.now());
	},
	updateHeight: (toastId, height) => {
		update({
			id: toastId,
			height
		});
	},
	calculateOffset
};
function useToaster(toastOptions) {
	const { toasts, pausedAt } = useToasterStore(toastOptions);
	const timeouts = /* @__PURE__ */ new Map();
	let _pausedAt;
	const unsubscribes = [pausedAt.subscribe(($pausedAt) => {
		if ($pausedAt) {
			for (const [, timeoutId] of timeouts) clearTimeout(timeoutId);
			timeouts.clear();
		}
		_pausedAt = $pausedAt;
	}), toasts.subscribe(($toasts) => {
		if (_pausedAt) return;
		const now = Date.now();
		for (const t of $toasts) {
			if (timeouts.has(t.id)) continue;
			if (t.duration === Infinity) continue;
			const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
			if (durationLeft < 0) {
				if (t.visible) toast.dismiss(t.id);
				return null;
			}
			timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
		}
	})];
	onDestroy(() => {
		for (const unsubscribe of unsubscribes) unsubscribe();
	});
	return {
		toasts,
		handlers
	};
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/CheckmarkIcon.svelte
function CheckmarkIcon($$renderer, $$props) {
	let primary = fallback($$props["primary"], "#61d345");
	let secondary = fallback($$props["secondary"], "#fff");
	$$renderer.push(`<div class="svelte-1did3zw"${attr_style("", {
		"--primary": primary,
		"--secondary": secondary
	})}></div>`);
	bind_props($$props, {
		primary,
		secondary
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/ErrorIcon.svelte
function ErrorIcon($$renderer, $$props) {
	let primary = fallback($$props["primary"], "#ff4b4b");
	let secondary = fallback($$props["secondary"], "#fff");
	$$renderer.push(`<div class="svelte-1ro2ggf"${attr_style("", {
		"--primary": primary,
		"--secondary": secondary
	})}></div>`);
	bind_props($$props, {
		primary,
		secondary
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/LoaderIcon.svelte
function LoaderIcon($$renderer, $$props) {
	let primary = fallback($$props["primary"], "#616161");
	let secondary = fallback($$props["secondary"], "#e0e0e0");
	$$renderer.push(`<div class="svelte-tyythq"${attr_style("", {
		"--primary": primary,
		"--secondary": secondary
	})}></div>`);
	bind_props($$props, {
		primary,
		secondary
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/ToastIcon.svelte
function ToastIcon($$renderer, $$props) {
	let type, icon, iconTheme;
	let toast = $$props["toast"];
	$: ({type, icon, iconTheme} = toast);
	if (typeof icon === "string") {
		$$renderer.push("<!--[0-->");
		$$renderer.push(`<div class="animated svelte-t33qv2">${escape_html(icon)}</div>`);
	} else if (typeof icon !== "undefined") {
		$$renderer.push("<!--[1-->");
		if (icon) {
			$$renderer.push("<!--[-->");
			icon($$renderer, {});
			$$renderer.push("<!--]-->");
		} else {
			$$renderer.push("<!--[!-->");
			$$renderer.push("<!--]-->");
		}
	} else if (type !== "blank") {
		$$renderer.push("<!--[2-->");
		$$renderer.push(`<div class="indicator svelte-t33qv2">`);
		LoaderIcon($$renderer, spread_props([iconTheme]));
		$$renderer.push(`<!----> `);
		if (type !== "loading") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<div class="status svelte-t33qv2">`);
			if (type === "error") {
				$$renderer.push("<!--[0-->");
				ErrorIcon($$renderer, spread_props([iconTheme]));
			} else {
				$$renderer.push("<!--[-1-->");
				CheckmarkIcon($$renderer, spread_props([iconTheme]));
			}
			$$renderer.push(`<!--]--></div>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div>`);
	} else $$renderer.push("<!--[-1-->");
	$$renderer.push(`<!--]-->`);
	bind_props($$props, { toast });
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/ToastMessage.svelte
function ToastMessage($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let toast = $$props["toast"];
		$$renderer.push(`<div${attributes({
			class: "message",
			...toast.ariaProps
		}, "svelte-1gudbf6")}>`);
		if (typeof toast.message === "string") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`${escape_html(toast.message)}`);
		} else {
			$$renderer.push("<!--[-1-->");
			if (toast.message) {
				$$renderer.push("<!--[-->");
				toast.message($$renderer, { toast });
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { toast });
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/ToastBar.svelte
function ToastBar($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let toast = $$props["toast"];
		let position = fallback($$props["position"], () => void 0, true);
		let style = fallback($$props["style"], "");
		let Component = fallback($$props["Component"], () => void 0, true);
		let factor;
		let animation;
		$: {
			factor = (toast.position || position || "top-center").includes("top") ? 1 : -1;
			const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
			animation = toast.visible ? enter : exit;
		}
		$$renderer.push(`<div${attr_class(`base ${stringify(toast.height ? animation : "transparent")} ${stringify(toast.className || "")}`, "svelte-yae3e8")}${attr_style(`${stringify(style)}; ${stringify(toast.style)}`, { "--factor": factor })}>`);
		if (Component) {
			$$renderer.push("<!--[0-->");
			if (Component) {
				$$renderer.push("<!--[-->");
				Component($$renderer, { $$slots: {
					icon: ($$renderer) => {
						ToastIcon($$renderer, {
							toast,
							slot: "icon"
						});
					},
					message: ($$renderer) => {
						ToastMessage($$renderer, {
							toast,
							slot: "message"
						});
					}
				} });
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", {
				ToastIcon,
				ToastMessage,
				toast
			}, () => {
				ToastIcon($$renderer, { toast });
				$$renderer.push(`<!----> `);
				ToastMessage($$renderer, { toast });
				$$renderer.push(`<!---->`);
			});
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			toast,
			position,
			style,
			Component
		});
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/ToastWrapper.svelte
function ToastWrapper($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let top, bottom, factor, justifyContent;
		let toast = $$props["toast"];
		let setHeight = $$props["setHeight"];
		$: top = toast.position?.includes("top") ? 0 : null;
		$: bottom = toast.position?.includes("bottom") ? 0 : null;
		$: factor = toast.position?.includes("top") ? 1 : -1;
		$: justifyContent = toast.position?.includes("center") && "center" || (toast.position?.includes("right") || toast.position?.includes("end")) && "flex-end" || null;
		$$renderer.push(`<div${attr_class("wrapper svelte-1pz3gqy", void 0, {
			"active": toast.visible,
			"transition": !prefersReducedMotion()
		})}${attr_style("", {
			"--factor": factor,
			"--offset": toast.offset,
			top,
			bottom,
			"justify-content": justifyContent
		})}>`);
		if (toast.type === "custom") {
			$$renderer.push("<!--[0-->");
			ToastMessage($$renderer, { toast });
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--[-->`);
			slot($$renderer, $$props, "default", { toast }, () => {
				ToastBar($$renderer, {
					toast,
					position: toast.position
				});
			});
			$$renderer.push(`<!--]-->`);
		}
		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, {
			toast,
			setHeight
		});
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/components/Toaster.svelte
function Toaster($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let reverseOrder = fallback($$props["reverseOrder"], false);
		let position = fallback($$props["position"], "top-center");
		let toastOptions = fallback($$props["toastOptions"], () => void 0, true);
		let gutter = fallback($$props["gutter"], 8);
		let containerStyle = fallback($$props["containerStyle"], () => void 0, true);
		let containerClassName = fallback($$props["containerClassName"], () => void 0, true);
		const { toasts, handlers } = useToaster(toastOptions);
		let _toasts;
		$: _toasts = store_get($$store_subs ??= {}, "$toasts", toasts).map((toast) => ({
			...toast,
			position: toast.position || position,
			offset: handlers.calculateOffset(toast, store_get($$store_subs ??= {}, "$toasts", toasts), {
				reverseOrder,
				gutter,
				defaultPosition: position
			})
		}));
		$$renderer.push(`<div${attr_class(`toaster ${stringify(containerClassName || "")}`, "svelte-haq5xk")}${attr_style(containerStyle)} role="alert"><!--[-->`);
		const each_array = ensure_array_like(_toasts);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let toast = each_array[$$index];
			ToastWrapper($$renderer, {
				toast,
				setHeight: (height) => handlers.updateHeight(toast.id, height)
			});
		}
		$$renderer.push(`<!--]--></div>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, {
			reverseOrder,
			position,
			toastOptions,
			gutter,
			containerStyle,
			containerClassName
		});
	});
}
//#endregion
//#region node_modules/svelte-french-toast/dist/index.js
var dist_default = toast;
//#endregion
export { Toaster as n, dist_default as t };
