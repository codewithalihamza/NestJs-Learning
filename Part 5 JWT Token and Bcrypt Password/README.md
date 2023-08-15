JWT and Bcrypt password

npm i @nestjs/jwt
npm i -D @types/bcrypt
npm i bcrypt

Usage Flow:

A user sends a POST request to /auth/login with their username and password.
The AuthController calls the validateUser method of the AuthService to authenticate the user.
If the user is authenticated, the AuthService generates a JWT token using the generateToken method.
The token is returned to the user as a response.
The user can then use the token for authentication in future requests.
To verify a token, the user can send a POST request to /auth/verify with the token.
The AuthController calls the verifyToken method of the AuthService to verify the token.
If the token is valid, the decoded payload is returned as a response.

Note: Don't forget to export the RegisterService method in register module when you are using RegisterService method globally in the project


#Bcrypt 

when you register a new user

async create(createRegisterDto: CreateRegisterDto) {
    const {username,email,password}=createRegisterDto
    // Hash the password
  const hashedPassword = await bcrypt.hash(password, 30); // 10 is the number of salt rounds
    const user=await this.RegisterRepository.create({username,email,password:hashedPassword})
    return this.RegisterRepository.save(user)
  }

  note: don't forget to use import * as bcrypt from 'bcrypt';


when you want to login then compare password 


 async validateUser(email: string, password: string): Promise<Register | null> {
    const user = await this.RegisterService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
    
  }
