const fs = require('fs');

function fixFile(filePath, funcName, deps) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract the function body
  const funcRegex = new RegExp(`const ${funcName} = async \\(\\) => \\{([\\s\\S]*?)^  \\};\\n`, 'm');
  const match = content.match(funcRegex);

  if (match) {
    // 1. Convert it to useCallback
    const original = match[0];
    const wrapped = `const ${funcName} = useCallback(async () => {\n${match[1]}  }, []);\n`;
    content = content.replace(original, wrapped);

    // 2. add import useCallback if missing
    if (!content.includes('useCallback')) {
      content = content.replace(/import React, {/, 'import React, { useCallback,');
      if (!content.includes('useCallback')) {
          content = content.replace(/import {([^}]+)} from ['"]react['"];/, (m, p1) => {
              if (p1.includes('useCallback')) return m;
              return `import {${p1}, useCallback } from "react";`;
          });
      }
    }

    // 3. Move the useEffect below the useCallback
    const useEffectRegex = new RegExp(`\\s*useEffect\\(\\(\\) => \\{\\s*${funcName}\\(\\)\\.catch\\(console\\.error\\);\\s*|\\s*${funcName}\\(\\);\\s*\\}, \\[.*?\\]\\);`, 'g');
    const matchUE = content.match(useEffectRegex);
    if(matchUE) {
        content = content.replace(matchUE[0], ''); // remove it from above

        // insert after the newly wrapped function
        const wrappedRegex = new RegExp(`const ${funcName} = useCallback\\(async \\(\\) => \\{[\\s\\S]*?\\}, \\[\\]\\);\\n`, 'm');
        const wrappedMatch = content.match(wrappedRegex);
        if(wrappedMatch) {
            content = content.replace(wrappedMatch[0], `${wrappedMatch[0]}\n  useEffect(() => {\n    ${funcName}();\n  }, [${deps}]);\n`);
        }
    }

    fs.writeFileSync(filePath, content);
    console.log(`Rewrote ${filePath}`);
  } else {
    console.log(`Could not find ${funcName} in ${filePath}`);
  }
}

fixFile('apps/frontend/src/pages/CourseDetail.jsx', 'loadCourseData', 'loadCourseData, courseId');
fixFile('apps/frontend/src/pages/admin/AdminApprovedCourses.jsx', 'fetchApproved', 'fetchApproved');
fixFile('apps/frontend/src/pages/admin/AdminPendingCourses.jsx', 'fetchPending', 'fetchPending');
fixFile('apps/frontend/src/pages/admin/AdminRejectedCourses.jsx', 'fetchRejected', 'fetchRejected');
fixFile('apps/frontend/src/pages/admin/components/UserTable.jsx', 'fetchUsers', 'fetchUsers');
