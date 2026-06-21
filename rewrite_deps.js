const fs = require('fs');

function rewriteFile(filePath, funcName) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find "const [funcName] = async () => {" and everything until its closing bracket.
  // We'll wrap it in useCallback.
  const funcRegex = new RegExp(\`const \${funcName} = async \\(\\) => \\{([\\s\\S]*?)^  \\};\\n\`, 'm');
  const match = content.match(funcRegex);

  if (match) {
    const original = match[0];
    const wrapped = \`const \${funcName} = useCallback(async () => {\\n\${match[1]}  }, []);\\n\`;
    content = content.replace(original, wrapped);

    // add import useCallback if missing
    if (!content.includes('useCallback')) {
      content = content.replace(/import React, {/, 'import React, { useCallback,');
      if (!content.includes('useCallback')) {
          content = content.replace(/import {([^}]+)} from ['"]react['"];/, (m, p1) => {
              if (p1.includes('useCallback')) return m;
              return \`import {\${p1}, useCallback } from "react";\`;
          });
      }
    }
    fs.writeFileSync(filePath, content);
    console.log(\`Rewrote \${filePath}\`);
  } else {
    console.log(\`Could not find \${funcName} in \${filePath}\`);
  }
}

rewriteFile('apps/frontend/src/pages/CourseDetail.jsx', 'loadCourseData');
rewriteFile('apps/frontend/src/pages/admin/AdminApprovedCourses.jsx', 'fetchApproved');
rewriteFile('apps/frontend/src/pages/admin/AdminPendingCourses.jsx', 'fetchPending');
rewriteFile('apps/frontend/src/pages/admin/AdminRejectedCourses.jsx', 'fetchRejected');
rewriteFile('apps/frontend/src/pages/admin/components/UserTable.jsx', 'fetchUsers');
