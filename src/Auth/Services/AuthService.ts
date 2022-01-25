import { Platform } from "react-native";

export type AuthData = {
  token: string;
  email: string;
  name: string;
};

export type UserInfo = {
  username: string,
  firstname: string | null,
  lastname: string | null,
  email: string,
  password: string
}

const register = async (username: string, firstname: string | null, lastname: string | null, email: string, password: string): Promise<UserInfo> => {
  const fullUrl: string = (Platform.OS === 'ios' ?
    'http://localhost:6001/api' : 'http://10.0.2.2:6001/api').concat('/user/register');

  const response: Response = await fetch(fullUrl, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username,
      firstname,
      lastname,
      email,
      password
    }),
  })

  //const { data, errors } = await response.json()
  const data = await response.text()
    .catch(errors => console.log(errors))
  
  //console.log(errors);
  console.log(response);
  if (response.ok) {
    if (data) {
      return {
        username, firstname, lastname, email, password
      }  //JSON.parse(dataString)
    } else {
      console.log(response.toString())
      return Promise.reject(new Error(`Error registering for "${username}"`))
    }
  } else {
    //const error = new Error(errors?.map((e: { message: string; }) => e.message).join('\n') ?? 'unknown')
    return Promise.reject(new Error(`Response is not ok, as so: ${!response.ok}`))
  }
}


const signIn = (email: string, _password: string): void => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  //the API will resolve with some token and another datas as the below
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       token: JWTTokenMock,
  //       email: email,
  //       name: 'Lucas Garcez',
  //     });
  //   }, 1000);
  // });
};

export const authService = {
  signIn,
  register,
};
