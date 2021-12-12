# open-api-gen-poc-client

## Create from scratch

install yarn or npm, then:
```
npx create-react-native-app poc-client --template with-typescript
```
cd into the project:
```
cd poc-client
```
add project dependencies:
```
yarn add axios url
```
add openapi generator cli as dev dependency
```
yarn add -D @openapitools/openapi-generator-cli
```
create Api folder that will host the generated client code and everything else api related
```
mkdir Api
```
put your **openapi spec file** in the Api folder.

add this to your package.json scripts:
```
"generate-sources": "openapi-generator generate -i ./Api/todo.yaml -g typescript-axios -o ./Api/generated"
```
generate the client code (requires a JDK):
```
yarn generate-sources
```
