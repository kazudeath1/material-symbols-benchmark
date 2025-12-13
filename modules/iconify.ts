import { addComponentsDir, defineNuxtModule } from '@nuxt/kit';
import path from 'path';
import process from 'process';

export default defineNuxtModule({
  setup() {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'
    addComponentsDir({
      path: path.resolve(process.cwd(), 'node_modules/@iconify-vue/material-symbols'),
      preload: false,
      pattern: '*.vue',
    });
  },
});
