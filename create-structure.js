import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем путь до текущего файла
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectStructure = {
  src: {
    api: ['authApi.ts', 'cityApi.ts', 'masterApi.ts', 'salonApi.ts', 'httpClient.ts'],
    components: ['Header.tsx', 'Footer.tsx', 'CommonButton.tsx'],
    entities: {
      auth: ['models.ts', 'authSlice.ts'],
      city: ['models.ts', 'citySlice.ts'],
      masters: ['models.ts', 'mastersSlice.ts'],
      salons: ['models.ts', 'salonsSlice.ts'],
    },
    hooks: ['useFetchData.ts'],
    pages: ['HomePage.tsx', 'CityPage.tsx', 'SalonDetailsPage.tsx', 'MasterDetailsPage.tsx'],
    routes: ['AppRoutes.tsx'],
    services: ['authService.ts', 'salonService.ts'],
    store: ['index.ts', 'rootReducer.ts'],
    utils: ['apiHelpers.ts']
  }
};

// Функция создания структуры
function createStructure(basePath, structure) {
  for (const key in structure) {
    const targetPath = path.join(basePath, key);
    if (Array.isArray(structure[key])) {
      // Создаем папку и файлы внутри нее
      fs.mkdirSync(targetPath, { recursive: true });
      structure[key].forEach(file => {
        const filePath = path.join(targetPath, file);
        fs.writeFileSync(filePath, '', 'utf-8'); // Создаем пустой файл
      });
    } else {
      // Рекурсивно создаем папки и их содержимое
      fs.mkdirSync(targetPath, { recursive: true });
      createStructure(targetPath, structure[key]);
    }
  }
}

const projectRoot = path.join(__dirname, 'src');
createStructure(projectRoot, projectStructure);
console.log('✅ Структура проекта успешно создана!');
