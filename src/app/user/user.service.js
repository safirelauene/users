function UserService() {

  const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "phone": "12 3705-7036"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "phone": "12 6593-9125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "phone": "12 3463-1235"
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "phone": "12 3170-9623"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "phone": "12 3954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "phone": "12 3935-8478"
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "phone": "12 3910-0672"
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "phone": "12 3953-6943",
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "phone": "12 3976-6796"
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "phone": "12 3648-3804"
    }
  ];

  // function Init(){
  //   this.users = users.map((user)=>{
  //     return new User(user)
  //   });
  // }
  //
  // Init();

  const getUsers = () => {
    this.users = users.map((user)=>{
      return new User(user)
    });
    return this.users;
  };

  const getUserById = (id) => {
    return users.find(user => user.id === id)
  }

  const saveUser = (user) => {
    if(user.id){
      var _user = getUserById(user.id)
      _user = new User(user)
      _user.addLog('editado');
    } else {
      users.push(new User(user));
    }
  };

  const deleteUser = (id) => {
    this.users.forEach((user, index)=>{
      if(user.id === id ) {
        this.users.splice(index, 1);
      }
    })
  }

  const getLog = (id) => {
    return getUserById(user.id).log
  };

  const UserService = {
    saveUser         : saveUser,
    deleteUser       : deleteUser,
    getUsers         : getUsers,
    getLog           : getLog
  };

  return UserService;
}
angular.module('app').factory('UserService', UserService);
