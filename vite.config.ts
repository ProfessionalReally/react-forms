import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@features': resolve(__dirname, './src/features'),
            '@pages': resolve(__dirname, './src/pages'),
            '@shared': resolve(__dirname, './src/shared'),
            '@app': resolve(__dirname, './src/app'),
        },
    },
})
