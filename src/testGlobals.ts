// Ensure that tests always run in the same time zone regardless of the machine's time zone:
export const setup = () => {
  process.env.TZ = 'UTC';
};
