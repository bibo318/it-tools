import _ from 'lodash';

export { getPasswordCrackTimeEstimation, getCharsetLength };

function prettifyExponentialNotation(exponentialNotation: number) {
  const [base, exponent] = exponentialNotation.toString().split('e');
  const baseAsNumber = Number.parseFloat(base);
  const prettyBase = baseAsNumber % 1 === 0 ? baseAsNumber.toLocaleString() : baseAsNumber.toFixed(2);
  return exponent ? `${prettyBase}e${exponent}` : prettyBase;
}

function getHumanFriendlyDuration({ seconds }: { seconds: number }) {
  if (seconds <= 0.001) {
    return 'Ngay lập tức';
  }

  if (seconds <= 1) {
    return 'Chưa đầy một giây';
  }

  const timeUnits = [
    { unit: 'Thiên niên kỷ', secondsInUnit: 31536000000, format: prettifyExponentialNotation, plural: 'thiên niên kỷ' },
    { unit: 'Thế kỷ', secondsInUnit: 3153600000, plural: 'Thế kỉ' },
    { unit: 'Thập kỷ', secondsInUnit: 315360000, plural: 'thập kỷ' },
    { unit: 'Năm', secondsInUnit: 31536000, plural: 'Năm' },
    { unit: 'Tháng', secondsInUnit: 2592000, plural: 'Tháng' },
    { unit: 'Tuần', secondsInUnit: 604800, plural: 'Tuần' },
    { unit: 'Ngày', secondsInUnit: 86400, plural: 'Ngày' },
    { unit: 'Giờ', secondsInUnit: 3600, plural: 'Giờ' },
    { unit: 'Phút', secondsInUnit: 60, plural: 'Phút' },
    { unit: 'Giây', secondsInUnit: 1, plural: 'Giây' },
  ];

  return _.chain(timeUnits)
    .map(({ unit, secondsInUnit, plural, format = _.identity }) => {
      const quantity = Math.floor(seconds / secondsInUnit);
      seconds %= secondsInUnit;

      if (quantity <= 0) {
        return undefined;
      }

      const formattedQuantity = format(quantity);
      return `${formattedQuantity} ${quantity > 1 ? plural : unit}`;
    })
    .compact()
    .take(2)
    .join(', ')
    .value();
}

function getPasswordCrackTimeEstimation({ password, guessesPerSecond = 1e9 }: { password: string; guessesPerSecond?: number }) {
  const charsetLength = getCharsetLength({ password });
  const passwordLength = password.length;

  const entropy = password === '' ? 0 : Math.log2(charsetLength) * passwordLength;

  const secondsToCrack = 2 ** entropy / guessesPerSecond;

  const crackDurationFormatted = getHumanFriendlyDuration({ seconds: secondsToCrack });

  const score = Math.min(entropy / 128, 1);

  return {
    entropy,
    charsetLength,
    passwordLength,
    crackDurationFormatted,
    secondsToCrack,
    score,
  };
}

function getCharsetLength({ password }: { password: string }) {
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecialChars = /\W|_/.test(password);

  let charsetLength = 0;

  if (hasLowercase) {
    charsetLength += 26;
  }
  if (hasUppercase) {
    charsetLength += 26;
  }
  if (hasDigits) {
    charsetLength += 10;
  }
  if (hasSpecialChars) {
    charsetLength += 32;
  }

  return charsetLength;
}
