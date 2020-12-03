docker build -t build-react-app:latest .

docker create -ti --name dummy build-react-app:latest sh

docker cp dummy:/app/node_modules $(pwd)
docker cp dummy:/app/public $(pwd)
docker cp dummy:/app/src $(pwd)

docker rm -f dummy
docker rmi build-react-app:latest

mv dockerfile dockerfile.builder
mv dockerfile.development dockerfile
