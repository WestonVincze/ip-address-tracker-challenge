export interface IpData {
  ip: string;
  city: string;
  region_code: string;
  postal: string;
  time_zone: {
    offset: string;
  };
  asn: {
    name: string;
  };
  latitude: string;
  longitude: string;
}
