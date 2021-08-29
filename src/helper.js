const getFullDate = () => {
  const padZero = (number) =>
    number >= 0 && number < 10 ? "0" + number : number;

  const date = new Date();
  const numberMonth = date.getMonth() + 1;
  const numberHours = date.getHours();
  const numberMinutes = date.getMinutes();
  const numberSeconds = date.getSeconds();
  const numberday = date.getDate();

  const year = date.getFullYear();
  const day = padZero(numberday);
  const month = padZero(numberMonth);
  const hours = padZero(numberHours);
  const minutes = padZero(numberMinutes);
  const seconds = padZero(numberSeconds);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = { getFullDate };
