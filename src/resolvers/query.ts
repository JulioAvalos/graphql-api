import { IResolvers } from "graphql-tools";

const query: IResolvers = {
  Query: {
    hola(): string {
      return "Hola Mundoooo!";
    },
    holaConNombre(__: void, { nombre }): string {
      return `Hola Mundo ${nombre}!`;
    },
    holaAlCursoGraphQL(): string {
      return "Hola mundo en el curso de GraphQL";
    },
  },
};

export default query;
