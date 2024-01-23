import { ValidationErrorsIBAN } from 'ibantools';

export { getFriendlyErrors };

const ibanErrorToMessage = {
  [ValidationErrorsIBAN.NoIBANProvided]: 'Không cung cấp IBAN',
  [ValidationErrorsIBAN.NoIBANCountry]: 'Không có quốc gia IBAN',
  [ValidationErrorsIBAN.WrongBBANLength]: 'Độ dài BBAN sai',
  [ValidationErrorsIBAN.WrongBBANFormat]: 'Định dạng BBAN sai',
  [ValidationErrorsIBAN.ChecksumNotNumber]: 'Checksum is not a number',
  [ValidationErrorsIBAN.WrongIBANChecksum]: 'Tổng kiểm tra IBAN sai',
  [ValidationErrorsIBAN.WrongAccountBankBranchChecksum]: 'Tổng kiểm tra chi nhánh ngân hàng sai tài khoản',
  [ValidationErrorsIBAN.QRIBANNotAllowed]: 'QR-IBAN không được phép',
};

function getFriendlyErrors(errorCodes: ValidationErrorsIBAN[]) {
  return errorCodes.map(errorCode => ibanErrorToMessage[errorCode]).filter(Boolean);
}
