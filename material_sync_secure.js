const fs = require('fs');
const path = require('path');
const Rsync = require('rsync');

/**
 * 
 * @param {Rsync} rsync 
 * @param {string} srcPath
 */
const ensureSync = async (rsync, srcPath) => {
    let success = false;
    while (!success) {
        rs = new Promise((resolve, reject) => {
            rsync.execute((err, code, cmd) => {
                if (!err) {
                    console.log('✅', cmd)
                    resolve(true)
                } else {
                    console.log('❌', srcPath)
                    console.log('   ', cmd)
                    console.log('   ', err)
                    console.log('   ', code)
                    console.log('')
                    resolve(false);
                }
            });
        })
        success = await rs;
    }
    return success;
}

const main = async () => {
        /** copy secure pages */
        const securePages = path.join(__dirname, 'secure/sync/pages/');
        if (fs.existsSync(securePages)) {
            const rsync = new Rsync()
                            .source(securePages)
                            .destination('src/pages/secure')
                            .archive()
                            .delete();
            await ensureSync(rsync, securePages);
        }
        /** secure static */
        const secureStatic = path.join(__dirname, 'secure/sync/static');
        if (fs.existsSync(secureStatic)) {
            const rsync = new Rsync()
                            .source(secureStatic)
                            .destination('static/secure')
                            .archive()
                            .delete();
            await ensureSync(rsync, secureStatic);
        }
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});