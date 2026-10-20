import tailwindcss from "/node_modules/.vite/deps/@tailwindcss_vite.js?v=cf4c8fa6";
import react from "/node_modules/.vite/deps/@vitejs_plugin-react.js?v=98970e1f";
import path from "/@id/__vite-browser-external:path";
import { defineConfig } from "/node_modules/.vite/deps/vite.js?v=4dd87cca";
export default defineConfig(() => {
	return {
		plugins: [react(), tailwindcss()],
		resolve: { alias: { "@": path.resolve(".") } },
		optimizeDeps: {
			include: [
				"react",
				"react-dom",
				"react-dom/client",
				"react/jsx-runtime",
				"react/jsx-dev-runtime",
				"lucide-react",
				"motion"
			],
			exclude: [
				"express",
				"dotenv",
				"@google/genai"
			]
		},
		server: {
			// HMR is disabled in AI Studio via DISABLE_HMR env var.
			// Do not modify—file watching is disabled to prevent flickering during agent edits.
			hmr: process.env.DISABLE_HMR !== "true",
			// Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
			watch: process.env.DISABLE_HMR === "true" ? null : {}
		}
	};
});

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFRLG9CQUFtQjtBQUUzQixlQUFlLG1CQUFtQjtDQUNoQyxPQUFPO0VBQ0wsU0FBUyxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7RUFDaEMsU0FBUyxFQUNQLE9BQU8sRUFDTCxLQUFLLEtBQUssUUFBUSxHQUFHLEVBQ3ZCLEVBQ0Y7RUFDQSxjQUFjO0dBQ1osU0FBUztJQUNQO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0dBQ0Y7R0FDQSxTQUFTO0lBQUM7SUFBVztJQUFVO0dBQWU7RUFDaEQ7RUFDQSxRQUFROzs7R0FHTixLQUFLLFFBQVEsSUFBSSxnQkFBZ0I7O0dBRWpDLE9BQU8sUUFBUSxJQUFJLGdCQUFnQixTQUFTLE9BQU8sQ0FBQztFQUN0RDtDQUNGO0FBQ0YsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJ2aXRlLmNvbmZpZy50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtyZWFjdCgpLCB0YWlsd2luZGNzcygpXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZSgnLicpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAncmVhY3QnLFxuICAgICAgICAncmVhY3QtZG9tJyxcbiAgICAgICAgJ3JlYWN0LWRvbS9jbGllbnQnLFxuICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnLFxuICAgICAgICAncmVhY3QvanN4LWRldi1ydW50aW1lJyxcbiAgICAgICAgJ2x1Y2lkZS1yZWFjdCcsXG4gICAgICAgICdtb3Rpb24nXG4gICAgICBdLFxuICAgICAgZXhjbHVkZTogWydleHByZXNzJywgJ2RvdGVudicsICdAZ29vZ2xlL2dlbmFpJ10sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIC8vIEhNUiBpcyBkaXNhYmxlZCBpbiBBSSBTdHVkaW8gdmlhIERJU0FCTEVfSE1SIGVudiB2YXIuXG4gICAgICAvLyBEbyBub3QgbW9kaWZ54oCUZmlsZSB3YXRjaGluZyBpcyBkaXNhYmxlZCB0byBwcmV2ZW50IGZsaWNrZXJpbmcgZHVyaW5nIGFnZW50IGVkaXRzLlxuICAgICAgaG1yOiBwcm9jZXNzLmVudi5ESVNBQkxFX0hNUiAhPT0gJ3RydWUnLFxuICAgICAgLy8gRGlzYWJsZSBmaWxlIHdhdGNoaW5nIHdoZW4gRElTQUJMRV9ITVIgaXMgdHJ1ZSB0byBzYXZlIENQVSBkdXJpbmcgYWdlbnQgZWRpdHMuXG4gICAgICB3YXRjaDogcHJvY2Vzcy5lbnYuRElTQUJMRV9ITVIgPT09ICd0cnVlJyA/IG51bGwgOiB7fSxcbiAgICB9LFxuICB9O1xufSk7XG4iXX0=