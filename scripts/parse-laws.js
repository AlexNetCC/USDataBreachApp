import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

// Converts snake_case to camelCase
const toCamelCase = (str) => {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

async function parseLaws() {
  const rawLawsDir = path.resolve(process.cwd(), 'raw-laws');
  const publicDir = path.resolve(process.cwd(), 'public');
  const outputFile = path.join(publicDir, 'laws.json');

  try {
    const files = await fs.readdir(rawLawsDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const laws = [];

    for (const file of mdFiles) {
      const filePath = path.join(rawLawsDir, file);
      const fileContent = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      const lawObject = {};
      const legislativeHistoryParts = {};

      for (const key in data) {
        // Handle legislative history aggregation
        if (key.startsWith('legislation_bill_')) {
          const match = key.match(/^legislation_bill_(\d+)_(.+)$/);
          if (match) {
            const [, index, prop] = match;
            const billIndex = parseInt(index, 10) - 1;
            const propName = toCamelCase(prop);
            
            if (!legislativeHistoryParts[billIndex]) {
              legislativeHistoryParts[billIndex] = {};
            }
            legislativeHistoryParts[billIndex][propName] = data[key];
          }
        } else {
          // Convert all other keys to camelCase
          lawObject[toCamelCase(key)] = data[key];
        }
      }
      
      // Convert legislative history object to a sorted array and assign it
      lawObject.legislativeHistory = Object.values(legislativeHistoryParts);
      
      // Assign the markdown body content
      lawObject.markdownContent = content;
      laws.push(lawObject);
    }

    await fs.mkdir(publicDir, { recursive: true });
    await fs.writeFile(outputFile, JSON.stringify(laws, null, 2), 'utf8');

    console.log(`Successfully parsed ${laws.length} law files and created ${outputFile}`);
  } catch (error) {
    console.error('Error parsing law files:', error);
    process.exit(1);
  }
}

parseLaws();
