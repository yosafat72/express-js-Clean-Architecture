import { UserService } from '../../../../src/application/usecases/UserService';

// Unit test integrasi untuk UserService
describe('UserService Integration Tests', () => {
  let userService: UserService;

  beforeAll(() => {
    // Inisialisasi instance UserService sebelum semua pengujian dimulai
    userService = new UserService();
  });

  // Unit test untuk getUsers()
  describe('getUsers', () => {
    it('should return an array of users from the database', async () => {
      // Act
      const response = await userService.getUsers();
      const users = response.data; // Ambil data dari respons

      // Assert
      expect(users).toBeDefined();
      expect(Array.isArray(users)).toBe(true);
    });
  });

  // Unit test lainnya untuk metode UserService

  afterAll(() => {
    // Bersihkan atau tutup koneksi ke database setelah semua pengujian selesai
    // Misalnya, jika menggunakan database, tutup koneksi ke database di sini
  });
});
