import { ApiUrlResolver } from "../../Services/UrlResolver";

export type AuthData = {
  token: string;
  email: string;
  name: string;
};

/**
 * 
 * @param param0 
 * @returns 
 */
const register = async ({ firstname, lastname, email, password }: { firstname: string, lastname:string, email: string, password: string }): Promise<string> => {
  const response = await fetch(ApiUrlResolver.append('/user/register'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'firstName': firstname,
      'lastName': lastname,
      'username': email,
      'email': email,
      'password': password
    })
  })

  const data = await response.text()

  if (response.ok) {
    if (data) {
      console.log(`register response data: ${data}`)
      return Promise.resolve(data);
    } else {
      return Promise.reject('error in data')
    }
  } else {
    return Promise.reject(response.status.toString())
  }
}

/**
 * 
 * @param param0 
 */
const signIn = async ({ email, password }: { email: string, password: string }): Promise<string> => {
  const response = await fetch(ApiUrlResolver.append('/user/login'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email,
      'password': password
    })
  });

  const data = await response.text();

  if (response.ok) {
    if (data) {
      console.log(`signin response data: ${data}`)
      return Promise.resolve(data);
    } else {
      return Promise.reject('error in data')
    }
  } else {
    return Promise.reject(response.status.toString())
  }
};

/**
 * 
 */
export const authService = {
  signIn,
  register,
};
