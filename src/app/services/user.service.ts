import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    {
      Rol: '1',
      Name: 'Conductor',
      Carnet: '2020',
      Password: '123'
    },
    {
      Rol: '2',
      Name: 'Luis Rodríguez',
      Carnet: '2010',
      Password: '123',
      Balance: -1500,
      CardNumber: null,
      CardBalance: 10000,
      Location: 'Terminal'
    },
    {
      Rol: '2',
      Name: 'Diego Mendez',
      Carnet: '2011',
      Password: '123',
      Balance: 600,
      CardNumber: null,
      CardBalance: 0,
      Location: 'Terminal'
    },
    {
      Rol: '2',
      Name: 'Andrea Perez',
      Carnet: '2012',
      Password: '123',
      Balance: 2000,
      CardNumber: null,
      CardBalance: 12000,
      Location: 'Centro'
    },
    {
      Rol: '2',
      Name: 'María Salas',
      Carnet: '2013',
      Password: '123',
      Balance: -1000,
      CardNumber: null,
      CardBalance: 1000,
      Location: 'Florencia'
    },
    {
      Rol: '2',
      Name: 'Andrés Rojas',
      Carnet: '2014',
      Password: '123',
      Balance: -2200,
      CardNumber: null,
      CardBalance: 200,
      Location: 'Centro'
    },
    {
      Rol: '2',
      Name: 'Mario Solano',
      Carnet: '2015',
      Password: '123',
      Balance: 1700,
      CardNumber: null,
      CardBalance: 0,
      Location: 'Florencia'
    },
    {
      Rol: '2',
      Name: 'Kervin Sibaja',
      Carnet: '2016',
      Password: '123',
      Balance: 1000,
      CardNumber: null,
      CardBalance: 0,
      Location: 'Florencia'
    },
    {
      Rol: '2',
      Name: 'Andres Hernandez',
      Carnet: '2017',
      Password: '123',
      Balance: 100,
      CardNumber: null,
      CardBalance: 12000,
      Location: 'Centro'
    },
    {
      Rol: '2',
      Name: 'Ana Suarez',
      Carnet: '2018',
      Password: '123',
      Balance: -700,
      CardNumber: null,
      CardBalance: 2000,
      Location: 'Terminal'
    },
  ];

  details = {
    color: '',
    state: '',
    detail: ''
  };

  edit = false;

  constructor() { }


  setPriceByCarnet(carnet: string, price: number) {
    return {
      ...this.users.find(user => {
        if (user.Carnet === carnet) {
          user.Balance = price;
        }
      })
    };
  }

  /*
  getUserById(id: string) {
    return {
      ...this.users.find(user => {
        if (user.Carnet === id) {
          return user;
        }
      })
    };
  }
  */

  searchUser(carnet: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].Carnet === carnet) {
        // console.log('Carnet: ' + this.users[i].Carnet + '  carnet: ' + carnet);
        return this.users[i];
      }
    }
    return null;
  }

  getUserByCarnet(carnet: string, pass: string) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].Carnet === carnet && this.users[i].Password === pass) {
        // console.log('Carnet: ' + this.users[i].Carnet + '  carnet: ' + carnet);
        return this.users[i];
      }
    }
    return null;
  }

  definePrice(ubica: string) {
    if (ubica === 'Florencia') {
      return 300;
    }
    else if (ubica === 'Terminal') {
      return 350;
    }
    else if (ubica === 'Centro') {
      return 600;
    }
    else {
      return 0;
    }
  }

  validate(user: any) {
    if (user.Balance >= 0) {
      this.details.color = 'success';
      this.details.state = 'Excelente';
      this.details.detail = 'Usted no posee ninguna morosidad.';
      return this.details;
    }
    else if (user.Balance > -2000 && user.Balance < 0) {
      this.details.color = 'warning';
      this.details.state = 'Aviso';
      this.details.detail = 'Usted tiene morosidad pero no ha pasado el límite.';
      return this.details;
    }
    else {
      this.details.color = 'danger';
      this.details.state = 'Moroso';
      this.details.detail = 'Usted tiene morosidad y ha pasado el límite, no puede subirse al bus';
      return this.details;
    }
  }

}
