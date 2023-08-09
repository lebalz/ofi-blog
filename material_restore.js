const fs = require('fs');

if (process.env.WITHOUT_DOCS) {
    console.log('RENAMING docs/ to _docs/')
    if (fs.existsSync('_docs')) {
        if (fs.existsSync('docs')) {
            fs.rmSync('docs', { recursive: true })
        }
        fs.renameSync('_docs', 'docs')
    }
}