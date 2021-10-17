const path = require('path');
const fs = require('fs-extra');

const UUID_REGEX = new RegExp(/live_py(.*)?id=(?<uuid>[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12})/, 'g')
const UUID_REGEX2 = new RegExp(/webKey="(?<uuid>[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12})/, 'g')

const used_uuids = []

function UUIDInUseException(message) {
  const error = new Error(message);
  return error;
}

UUIDInUseException.prototype = Object.create(Error.prototype);
fs.writeFile(path.join(process.cwd(), '.uuids'), '');
const plugin = (options) => {
  const transformer = async (root, file) => {
    const filePath = file.history[0];
    const relPath = path.relative(file.cwd, filePath)
    if (relPath.startsWith('versioned_docs/')) {
      return;
    }
    const match1 = file.contents.match(UUID_REGEX) || []
    const match2 = file.contents.match(UUID_REGEX2) || []
    const match = [...match1, ...match2]
    if (match.length > 0) {
      uuids = match.map((p) => p.slice(p.length - 36))
      uuids.forEach((uuid) => {
        if (used_uuids.includes(uuid)) {
          throw new UUIDInUseException(`The uuid ${filePath}#${uuid} was used before!`);
        } else {
          used_uuids.push(uuid);
        }
      })

      fs.appendFileSync(path.join(process.cwd(), '.uuids'), ['', ...uuids].join("\n"));
    }
  };
  return transformer;
};

module.exports = plugin;