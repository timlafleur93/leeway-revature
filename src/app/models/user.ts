export class User {
  $key: null;
  firstName : string;
  lastName : string;
  email : string;
  city : string;
  state : string;

  constructor(
    $key: null,
    firstName : string,
    lastName : string,
    email : string,
    city : string,
    state: string,
  ){
    this.$key = $key;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.city = city;
    this.state = state;
  }
}
