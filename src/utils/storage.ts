const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _30_DAYS = 30 * _MS_PER_DAY;
const _1_YEAR = 365 * _MS_PER_DAY;
const _4_YEARS = 4 * _1_YEAR;

const checkExpiry = () => {
  try {
    const now = Date.now();
    const lastCleanup = JSON.parse(
      localStorage.getItem("last_cleanup") || `${now}`
    );
    if (now - lastCleanup > _MS_PER_DAY) {
      cleanUp();
    }
  } catch (e) {
    return;
  }
};

interface Base {
  expiry: number;
}

type GetItem = {
  <T extends Base>(key: string, context: string, default_val: T): T;
  <T extends Base>(key: string, context: string): T | undefined;
  <T extends Base>(key: string): T | undefined;
};

const getItem: GetItem = <T extends Base = Base>(
  key: string,
  context?: string,
  default_val?: T
) => {
  try {
    checkExpiry();
    if (context) {
      const contextItem = localStorage.getItem(context);
      if (contextItem) {
        const item = JSON.parse(contextItem);
        if (typeof item === "object") {
          const val = item[key];
          if (val === undefined) {
            return default_val as T;
          }
          return val;
        }
        return default_val as T;
      }
    }
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return default_val as T;
  } catch (e) {
    return default_val as T;
  }
};

/**
 *
 * @param {string} key
 * @param {object} value the value must be an object or an array of objects, s.t. it can be spreaded.
 * @param {number} ttl time to live, default is 30 days
 * @example ```js
 * setItem('foo', {bar: 'baz'})
 * ```
 */
const setItem = (
  key: string,
  value: object,
  context: string | undefined = undefined,
  ttl: number = _30_DAYS
) => {
  try {
    const now = Date.now();

    if (context) {
      let contextData = getItem(context, undefined, { expiry: now + ttl });
      if (typeof contextData !== "object") {
        contextData = { expiry: 0 };
      }
      const oldItem = contextData[key] || {};
      const item = {
        ...oldItem,
        ...value,
      };
      contextData.expiry = now + ttl;
      contextData[key] = item;
      localStorage.setItem(context, JSON.stringify(contextData));
      return;
    }
    const old = getItem(key, context, { expiry: now + ttl });
    const item = {
      ...old,
      ...value,
      expiry: now + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    return;
  }
};

const removeItem = (key: string, context?: string) => {
  try {
    if (context) {
      let contextData = getItem(context, undefined, {
        expiry: Date.now() + _30_DAYS,
      });
      if (typeof contextData !== "object") {
        contextData = { expiry: 0 };
      }
      if (key in contextData) {
        delete contextData[key];
      }
      localStorage.setItem(context, JSON.stringify(contextData));
      return;
    }
    localStorage.removeItem(key);
  } catch (e) {
    return;
  }
};

const cleanUp = () => {
  try {
    const now = Date.now();
    Object.keys(localStorage).forEach((key) => {
      const item = getItem(key, undefined, { expiry: now + _30_DAYS });
      if (item.expiry && item.expiry > now) {
        localStorage.removeItem(key);
      }
    });
    localStorage.setItem("last_cleanup", `${now}`);
  } catch (e) {
    return;
  }
};

export { setItem, getItem, removeItem, _1_YEAR, _4_YEARS };
