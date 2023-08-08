import {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://127.0.0.1:1337/graphql",
    documents: "src/**/*.{tsx.ts.js,jsx}",
    ignoreNoDocuments: true,
    generates: {
        "./src/gql/": {
            documents: ['./src/**/*.ts'],
            preset: "client",
            plugins: []
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    }
}


export default config;
// "@graphql-codegen/cli": "^5.0.0",
//     "@graphql-codegen/client-preset": "^4.1.0",
//     "@graphql-codegen/introspection": "^4.0.0",
// "graphql": "^16.7.1",

// works fine

// "@graphql-codegen/cli": "2.13.11",
//     "@graphql-codegen/client-preset": "1.1.3",
//     "@graphql-codegen/introspection": "2.2.1",
