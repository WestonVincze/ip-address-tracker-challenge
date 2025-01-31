// Validation
export const isValidDomain = (c: string) => /^(https?:\/\/)?(www\.)?((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(c);

export const isValidPartialIpAddress = (c: string) => /^(\d{1,3}\.?){0,3}\d{0,3}$/.test(c);

export const isValidIPAddress = (c: string) => /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/.test(c);

// Formatting
export const buildLocationString = (city?: string | null, region?: string | null, postal?: string | null) => {
  const parts = [];
  if (city) parts.push(city);
  if (region) parts.push(`, ${region}`);
  if (postal) parts.push(` ${postal}`);

  return parts.join('');
}

export const buildTimezoneString = (timezone?: string) => {
  return timezone ? `UTC ${timezone}` : '';
}
 