import en from '../src/messages/en.json';
import es from '../src/messages/es.json';

function getKeys(obj: any, prefix = ''): string[] {
  return Object.keys(obj).reduce((res: string[], el) => {
    if (Array.isArray(obj[el])) {
      return res.concat(`${prefix}${el}`);
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return res.concat(getKeys(obj[el], `${prefix}${el}.`));
    }
    return res.concat(`${prefix}${el}`);
  }, []);
}

const enKeys = getKeys(en);
const esKeys = getKeys(es);

const missingInEs = enKeys.filter((k) => !esKeys.includes(k));
const missingInEn = esKeys.filter((k) => !enKeys.includes(k));

let hasErrors = false;

if (missingInEs.length > 0) {
  console.error('\x1b[31m%s\x1b[0m', 'Missing keys in es.json:');
  missingInEs.forEach((k) => console.error(`- ${k}`));
  hasErrors = true;
}

if (missingInEn.length > 0) {
  console.error('\x1b[31m%s\x1b[0m', 'Missing keys in en.json:');
  missingInEn.forEach((k) => console.error(`- ${k}`));
  hasErrors = true;
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log('\x1b[32m%s\x1b[0m', 'i18n validation passed! All keys are synced.');
}
