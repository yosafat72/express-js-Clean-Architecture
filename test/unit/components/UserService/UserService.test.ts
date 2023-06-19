// Import module yang diperlukan untuk pengujian
// const {UserService} = require('../../../../src/application/usecases/UserService');
import { UserService } from '../../../../src/application/usecases/UserService';

// Unit test untuk UserService
describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    // Inisialisasi instance UserService sebelum setiap pengujian
    userService = new UserService();
  });

  // Unit test untuk metode getUsers()
  describe('getUsers', () => {
    it('should return the correct user when a valid id is provided', () => {
      // Arrange
      
      const expectedUser = { name: 'John Doe' };

      // Act
      const user = userService.getUsers();

      // Assert
      expect(user).toBeDefined();
      expect(user).toEqual(expectedUser);
    });

    it('should return null when an invalid id is provided', () => {
      // Arrange
      const invalidId = 100;

      // Act
      const user = userService.getUsers();

      // Assert
      expect(user).toBeNull();
    });
  });

  // // Unit test untuk metode createUser()
  // describe('createUser', () => {
  //   it('should create a new user', () => {
  //     // Arrange
  //     const newUser = { name: 'Jane Doe' };

  //     // Act
  //     const createdUser = userService.createUser(newUser);

  //     // Assert
  //     expect(createdUser).toBeDefined();
  //     expect(createdUser.id).toBeDefined();
  //     expect(createdUser.name).toEqual(newUser.name);
  //   });
  // });

  // // Unit test lainnya untuk metode UserService

  // afterEach(() => {
  //   // Bersihkan atau hapus state yang mungkin terpengaruh setelah setiap pengujian
  //   // Misalnya, jika menggunakan database, hapus data yang dibuat selama pengujian
  // });
});
