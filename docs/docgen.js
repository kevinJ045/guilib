const fs = require('fs');

// Function to parse the content and create separate files
function parseContent(content) {
    const regex = /## ([A-Za-z0-9]+)\n([\s\S]+)\n## end \1;/gm;//`//`//``
    const widgetList = [];

    let match;
    while ((match = regex.exec(content)) !== null) {
        const widgetName = match[1].trim();
        const widgetDescription = match[2].trim();

        const markdownContent = `# ${widgetName}\n\n${widgetDescription}`;
        const fileName = `${widgetName.toLowerCase()}.md`;

        fs.writeFileSync('./static/views/'+fileName, markdownContent.replace(/## end ([A-Za-z0-9]+)/, ''), { encoding: 'utf8' });
        console.log(`Created ${fileName}`);

        const entry = `${fileName}|/${widgetName.toLowerCase()}|${widgetName}`;
        widgetList.push(entry);
    }

    return widgetList;
}

// Read the source file
fs.readFile('main.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        const widgetArray = parseContent(data);
        console.log(widgetArray);
    }
});

