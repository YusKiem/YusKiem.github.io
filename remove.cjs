const fs = require("fs");
const path = require("path");

function removeReactImport(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      removeReactImport(filePath);
    } else if (filePath.endsWith(".jsx")) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace('import React from "react";\n', "");
      fs.writeFileSync(filePath, content, "utf8");
    }
  }
}

removeReactImport("/Users/Github/yuskiem.github.io/src/");
