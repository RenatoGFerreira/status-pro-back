import swaggerAutogen from 'swagger-autogen';
import j2s from 'joi-to-swagger';
import UserSchema from './src/schemas/userSchema';
import SigninSchema from './src/schemas/signinSchema';

const { swagger: userSchema } = j2s(UserSchema);
const { swagger: signinSchema } = j2s(SigninSchema);


const doc = {
  info: {
    title: "Game StatusPro",
    description: "Essa API tem como objetivo integrar com o banco de dados do jogo",
    termOfService: "https://localhost:5000/terms",
    contact: {
      linkedIn: "https://www.linkedin.com/in/renato-ferreira-01/"
    },
    version: "1.0.0"
  },
  host: 'localhost:5000',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  // securityDefinitions: {
  //   JWT: {
  //     description: 'JWT token',
  //     type: 'apiKey',
  //     in: 'header',
  //     name: 'Authorization',
  //   },
  // },
  definitions: {
    UserResponse: { $ref: "#/components/schemas/User" },
  },
  components: {
    schemas: {
      User: userSchema.properties,
      Signin: signinSchema.properties,
      Singup: userSchema.properties,
    }
  },
};


const outputFile = 'swagger_doc.json';
const routes = [
  'src/routes/app-routes.ts',
  'src/routes/user-routes.ts'
];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: '3.0.0' })(outputFile, routes, doc);