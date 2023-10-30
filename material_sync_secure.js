const { syncSecure } = require('./material_helpers');


const main = async () => {
        /** copy secure pages */
        await syncSecure();
};

main().catch((e) => {
    console.error(e);
    process.exit(1);
});