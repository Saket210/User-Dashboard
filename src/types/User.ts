export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
  address: UserAddress;
  website: string;
  company: UserCompany;
};

type UserAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type UserCompany = {
    name: string;
    catchPhrase: string;
    bs: string;
}
