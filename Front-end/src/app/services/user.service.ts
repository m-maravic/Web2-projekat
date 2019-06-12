import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  registerUser(user:User)
  {
    const body: User = {
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword,      
    }

    return this._http.post(this._baseUrl + '/api/Account/Register', body);
  }

  
}
