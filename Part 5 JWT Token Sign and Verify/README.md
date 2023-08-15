JWT Athentication First you have to install all the dependencies of JWT
npm i @nestjs/jwt
Sign and Verify


Usage Flow:

A user sends a POST request to /auth/login with their username and password.
The AuthController calls the validateUser method of the AuthService to authenticate the user.
If the user is authenticated, the AuthService generates a JWT token using the generateToken method.
The token is returned to the user as a response.
The user can then use the token for authentication in future requests.
To verify a token, the user can send a POST request to /auth/verify with the token.
The AuthController calls the verifyToken method of the AuthService to verify the token.
If the token is valid, the decoded payload is returned as a response.


Note: Don't Forget to export registerService in Register Module when you are using registerService this method Globally in your Project
