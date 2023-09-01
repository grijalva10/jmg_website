var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../../../sites/common_site_config.json
var require_common_site_config = __commonJS({
  "../../../sites/common_site_config.json"(exports, module) {
    module.exports = {
      auto_email_id: "notifications@jmgind.com",
      background_workers: 1,
      developer_mode: true,
      dns_multitenant: true,
      file_watcher_port: 6790,
      frappe_types_pause_generation: 1,
      frappe_user: "ubuntu",
      gunicorn_workers: 9,
      mail_login: "AKIAR4TALARCDHJFX3OJ",
      mail_password: "BGO1vl2giHYLHKyNxeitUGnhOdpLAPP+r9EZj53nzR9Q",
      mail_port: 587,
      mail_server: "email-smtp.us-west-2.amazonaws.com",
      maintenance_mode: 0,
      max_file_size: 16e7,
      pause_scheduler: 0,
      rebase_on_pull: false,
      redis_cache: "redis://localhost:13003",
      redis_queue: "redis://localhost:11003",
      redis_socketio: "redis://localhost:12003",
      restart_supervisor_on_update: true,
      restart_systemd_on_update: false,
      serve_default_site: true,
      shallow_clone: true,
      socketio_port: 9003,
      use_redis_auth: false,
      use_ssl: 1,
      webserver_port: 8003
    };
  }
});

// vite.config.ts
import path from "path";
import { defineConfig } from "file:///home/ubuntu/environment/bench3/apps/jmg_website/builder/node_modules/vite/dist/node/index.js";
import react from "file:///home/ubuntu/environment/bench3/apps/jmg_website/builder/node_modules/@vitejs/plugin-react/dist/index.mjs";

// proxyOptions.js
var common_site_config = require_common_site_config();
var { webserver_port } = common_site_config;
var proxyOptions_default = {
  "^/(app|api|assets|files)": {
    target: `http://localhost:${webserver_port}`,
    ws: true,
    router: function(req) {
      const site_name = req.headers.host.split(":")[0];
      return `http://${site_name}:${webserver_port}`;
    }
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "/home/ubuntu/environment/bench3/apps/jmg_website/builder";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    proxy: proxyOptions_default
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  build: {
    outDir: "../jmg_website/public/builder",
    emptyOutDir: true,
    target: "es2015"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc2l0ZXMvY29tbW9uX3NpdGVfY29uZmlnLmpzb24iLCAidml0ZS5jb25maWcudHMiLCAicHJveHlPcHRpb25zLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cbiBcImF1dG9fZW1haWxfaWRcIjogXCJub3RpZmljYXRpb25zQGptZ2luZC5jb21cIixcbiBcImJhY2tncm91bmRfd29ya2Vyc1wiOiAxLFxuIFwiZGV2ZWxvcGVyX21vZGVcIjogdHJ1ZSxcbiBcImRuc19tdWx0aXRlbmFudFwiOiB0cnVlLFxuIFwiZmlsZV93YXRjaGVyX3BvcnRcIjogNjc5MCxcbiBcImZyYXBwZV90eXBlc19wYXVzZV9nZW5lcmF0aW9uXCI6IDEsXG4gXCJmcmFwcGVfdXNlclwiOiBcInVidW50dVwiLFxuIFwiZ3VuaWNvcm5fd29ya2Vyc1wiOiA5LFxuIFwibWFpbF9sb2dpblwiOiBcIkFLSUFSNFRBTEFSQ0RISkZYM09KXCIsXG4gXCJtYWlsX3Bhc3N3b3JkXCI6IFwiQkdPMXZsMmdpSFlMSEt5TnhlaXRVR25oT2RwTEFQUCtyOUVaajUzbnpSOVFcIixcbiBcIm1haWxfcG9ydFwiOiA1ODcsXG4gXCJtYWlsX3NlcnZlclwiOiBcImVtYWlsLXNtdHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cIixcbiBcIm1haW50ZW5hbmNlX21vZGVcIjogMCxcbiBcIm1heF9maWxlX3NpemVcIjogMTYwMDAwMDAwLFxuIFwicGF1c2Vfc2NoZWR1bGVyXCI6IDAsXG4gXCJyZWJhc2Vfb25fcHVsbFwiOiBmYWxzZSxcbiBcInJlZGlzX2NhY2hlXCI6IFwicmVkaXM6Ly9sb2NhbGhvc3Q6MTMwMDNcIixcbiBcInJlZGlzX3F1ZXVlXCI6IFwicmVkaXM6Ly9sb2NhbGhvc3Q6MTEwMDNcIixcbiBcInJlZGlzX3NvY2tldGlvXCI6IFwicmVkaXM6Ly9sb2NhbGhvc3Q6MTIwMDNcIixcbiBcInJlc3RhcnRfc3VwZXJ2aXNvcl9vbl91cGRhdGVcIjogdHJ1ZSxcbiBcInJlc3RhcnRfc3lzdGVtZF9vbl91cGRhdGVcIjogZmFsc2UsXG4gXCJzZXJ2ZV9kZWZhdWx0X3NpdGVcIjogdHJ1ZSxcbiBcInNoYWxsb3dfY2xvbmVcIjogdHJ1ZSxcbiBcInNvY2tldGlvX3BvcnRcIjogOTAwMyxcbiBcInVzZV9yZWRpc19hdXRoXCI6IGZhbHNlLFxuIFwidXNlX3NzbFwiOiAxLFxuIFwid2Vic2VydmVyX3BvcnRcIjogODAwM1xufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdWJ1bnR1L2Vudmlyb25tZW50L2JlbmNoMy9hcHBzL2ptZ193ZWJzaXRlL2J1aWxkZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VidW50dS9lbnZpcm9ubWVudC9iZW5jaDMvYXBwcy9qbWdfd2Vic2l0ZS9idWlsZGVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VidW50dS9lbnZpcm9ubWVudC9iZW5jaDMvYXBwcy9qbWdfd2Vic2l0ZS9idWlsZGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbmltcG9ydCBwcm94eU9wdGlvbnMgZnJvbSAnLi9wcm94eU9wdGlvbnMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cGx1Z2luczogW3JlYWN0KCldLFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA4MDgwLFxuXHRcdHByb3h5OiBwcm94eU9wdGlvbnNcblx0fSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuXHRcdH1cblx0fSxcblx0YnVpbGQ6IHtcblx0XHRvdXREaXI6ICcuLi9qbWdfd2Vic2l0ZS9wdWJsaWMvYnVpbGRlcicsXG5cdFx0ZW1wdHlPdXREaXI6IHRydWUsXG5cdFx0dGFyZ2V0OiAnZXMyMDE1Jyxcblx0fSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91YnVudHUvZW52aXJvbm1lbnQvYmVuY2gzL2FwcHMvam1nX3dlYnNpdGUvYnVpbGRlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvdWJ1bnR1L2Vudmlyb25tZW50L2JlbmNoMy9hcHBzL2ptZ193ZWJzaXRlL2J1aWxkZXIvcHJveHlPcHRpb25zLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3VidW50dS9lbnZpcm9ubWVudC9iZW5jaDMvYXBwcy9qbWdfd2Vic2l0ZS9idWlsZGVyL3Byb3h5T3B0aW9ucy5qc1wiO2NvbnN0IGNvbW1vbl9zaXRlX2NvbmZpZyA9IHJlcXVpcmUoJy4uLy4uLy4uL3NpdGVzL2NvbW1vbl9zaXRlX2NvbmZpZy5qc29uJyk7XG5jb25zdCB7IHdlYnNlcnZlcl9wb3J0IH0gPSBjb21tb25fc2l0ZV9jb25maWc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0J14vKGFwcHxhcGl8YXNzZXRzfGZpbGVzKSc6IHtcblx0XHR0YXJnZXQ6IGBodHRwOi8vbG9jYWxob3N0OiR7d2Vic2VydmVyX3BvcnR9YCxcblx0XHR3czogdHJ1ZSxcblx0XHRyb3V0ZXI6IGZ1bmN0aW9uKHJlcSkge1xuXHRcdFx0Y29uc3Qgc2l0ZV9uYW1lID0gcmVxLmhlYWRlcnMuaG9zdC5zcGxpdCgnOicpWzBdO1xuXHRcdFx0cmV0dXJuIGBodHRwOi8vJHtzaXRlX25hbWV9OiR7d2Vic2VydmVyX3BvcnR9YDtcblx0XHR9XG5cdH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVDLGVBQWlCO0FBQUEsTUFDakIsb0JBQXNCO0FBQUEsTUFDdEIsZ0JBQWtCO0FBQUEsTUFDbEIsaUJBQW1CO0FBQUEsTUFDbkIsbUJBQXFCO0FBQUEsTUFDckIsK0JBQWlDO0FBQUEsTUFDakMsYUFBZTtBQUFBLE1BQ2Ysa0JBQW9CO0FBQUEsTUFDcEIsWUFBYztBQUFBLE1BQ2QsZUFBaUI7QUFBQSxNQUNqQixXQUFhO0FBQUEsTUFDYixhQUFlO0FBQUEsTUFDZixrQkFBb0I7QUFBQSxNQUNwQixlQUFpQjtBQUFBLE1BQ2pCLGlCQUFtQjtBQUFBLE1BQ25CLGdCQUFrQjtBQUFBLE1BQ2xCLGFBQWU7QUFBQSxNQUNmLGFBQWU7QUFBQSxNQUNmLGdCQUFrQjtBQUFBLE1BQ2xCLDhCQUFnQztBQUFBLE1BQ2hDLDJCQUE2QjtBQUFBLE1BQzdCLG9CQUFzQjtBQUFBLE1BQ3RCLGVBQWlCO0FBQUEsTUFDakIsZUFBaUI7QUFBQSxNQUNqQixnQkFBa0I7QUFBQSxNQUNsQixTQUFXO0FBQUEsTUFDWCxnQkFBa0I7QUFBQSxJQUNuQjtBQUFBO0FBQUE7OztBQzdCMFYsT0FBTyxVQUFVO0FBQzNXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVzs7O0FDRjBVLElBQU0scUJBQXFCO0FBQ3ZYLElBQU0sRUFBRSxlQUFlLElBQUk7QUFFM0IsSUFBTyx1QkFBUTtBQUFBLEVBQ2QsNEJBQTRCO0FBQUEsSUFDM0IsUUFBUSxvQkFBb0IsY0FBYztBQUFBLElBQzFDLElBQUk7QUFBQSxJQUNKLFFBQVEsU0FBUyxLQUFLO0FBQ3JCLFlBQU0sWUFBWSxJQUFJLFFBQVEsS0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQy9DLGFBQU8sVUFBVSxTQUFTLElBQUksY0FBYztBQUFBLElBQzdDO0FBQUEsRUFDRDtBQUNEOzs7QURaQSxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE9BQU87QUFBQSxNQUNOLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNuQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFFBQVE7QUFBQSxFQUNUO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
