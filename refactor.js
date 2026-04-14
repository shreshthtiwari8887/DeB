const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Replace standard strings like: "http://localhost:8080/api/..." -> `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/...`
      content = content.replace(/(["'])http:\/\/localhost:8080(.*?)(\1)/g, (match, quote, pathPart) => {
        changed = true;
        return `\`\${import.meta.env.VITE_API_URL || "http://localhost:8080"}${pathPart}\``;
      });

      // Replace template literals: `http://localhost:8080/api/...` -> `${import.meta.env.VITE_API_URL || "http://localhost:8080"}/api/...`
      content = content.replace(/`http:\/\/localhost:8080(.*?)`/g, (match, pathPart) => {
        changed = true;
        return `\`\${import.meta.env.VITE_API_URL || "http://localhost:8080"}${pathPart}\``;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'frontend', 'src'));
