
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const npm_package_devDependencies_ttf2woff2: string;
	export const npm_config_bin_links: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_config_init_version: string;
	export const SHLVL: string;
	export const LESS: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_devDependencies__sveltejs_adapter_netlify: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const NVM_BIN: string;
	export const LSCOLORS: string;
	export const NVM_INC: string;
	export const ZSH: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_config_init_license: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const PAGER: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_vinyl: string;
	export const npm_config_version_tag_prefix: string;
	export const LC_MONETARY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOMEBREW_NO_ANALYTICS: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const npm_config_resolution_mode: string;
	export const COLORTERM: string;
	export const INSIDE_NEMO_PYTHON: string;
	export const NVM_DIR: string;
	export const npm_package_readmeFilename: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const _: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_private: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const XDG_SESSION_ID: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const DOTNET_ROOT: string;
	export const npm_config_ignore_scripts: string;
	export const PATH: string;
	export const NODE: string;
	export const SESSION_MANAGER: string;
	export const GDM_LANG: string;
	export const PAPERSIZE: string;
	export const GTK3_MODULES: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const LC_ADDRESS: string;
	export const GNOME_TERMINAL_SCREEN: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const GNOME_TERMINAL_SERVICE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies_dotenv: string;
	export const SSH_AUTH_SOCK: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const LESSCLOSE: string;
	export const LC_MEASUREMENT: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const npm_config_strict_ssl: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XDG_VTNR: string;
	export const PWD: string;
	export const LC_ALL: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_devDependencies_svg_sprite: string;
	export const LC_NUMERIC: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const LC_PAPER: string;
	export const npm_package_scripts_preview: string;
	export const VTE_VERSION: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		LANGUAGE: string;
		USER: string;
		LC_TIME: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		npm_package_devDependencies_ttf2woff2: string;
		npm_config_bin_links: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_config_init_version: string;
		SHLVL: string;
		LESS: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		npm_package_devDependencies_sass: string;
		npm_package_devDependencies__sveltejs_adapter_netlify: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		NVM_BIN: string;
		LSCOLORS: string;
		NVM_INC: string;
		ZSH: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_config_init_license: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		PAGER: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_vinyl: string;
		npm_config_version_tag_prefix: string;
		LC_MONETARY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOMEBREW_NO_ANALYTICS: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		npm_config_resolution_mode: string;
		COLORTERM: string;
		INSIDE_NEMO_PYTHON: string;
		NVM_DIR: string;
		npm_package_readmeFilename: string;
		QT_QPA_PLATFORMTHEME: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		_: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_private: string;
		XDG_SESSION_CLASS: string;
		npm_config_registry: string;
		TERM: string;
		GTK_OVERLAY_SCROLLING: string;
		XDG_SESSION_ID: string;
		GNOME_DESKTOP_SESSION_ID: string;
		DOTNET_ROOT: string;
		npm_config_ignore_scripts: string;
		PATH: string;
		NODE: string;
		SESSION_MANAGER: string;
		GDM_LANG: string;
		PAPERSIZE: string;
		GTK3_MODULES: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		LC_ADDRESS: string;
		GNOME_TERMINAL_SCREEN: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		GNOME_TERMINAL_SERVICE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies_dotenv: string;
		SSH_AUTH_SOCK: string;
		XDG_GREETER_DATA_DIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		LC_NAME: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_config_argv: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		LESSCLOSE: string;
		LC_MEASUREMENT: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		npm_config_strict_ssl: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XDG_VTNR: string;
		PWD: string;
		LC_ALL: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_package_devDependencies_svg_sprite: string;
		LC_NUMERIC: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		LC_PAPER: string;
		npm_package_scripts_preview: string;
		VTE_VERSION: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
