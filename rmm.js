const fs = require('fs');
const path = require('path');

function deleteJsFiles(folderPath) {
  // Read the contents of the folder
  const files = fs.readdirSync(folderPath);

  // Loop through each file
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Check if it's a directory
    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory, recursively call deleteJsFiles
      deleteJsFiles(filePath);
    } else {
      // If it's a file and has a .js extension, delete it
      if (filePath.endsWith('.d.ts')) {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      }
    }
  });
}

// Specify the root folder path
const rootFolderPath = './client';

// Call the function to delete JS files
deleteJsFiles(rootFolderPath);
