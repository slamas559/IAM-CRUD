import { createUserSchema } from "../../../src/validators/userValidator";

describe('User Validation Schema', () => {
  it('should pass with valid data', () => {
    const result = createUserSchema.validate({
      username: 'john',
      email: 'john@example.com',
      passwordHash: 'pass1234',
    });

    expect(result.error).toBeUndefined();
  });

  it('should fail if email is missing', () => {
    const result = createUserSchema.validate({
      username: 'john',
      passwordHash: 'pass1234',
    });

    expect(result.error).toBeDefined();
  });
});
