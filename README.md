# React App Skeleton Builder  
Build your react-app completely from docker without any dependencies on your local machine.

## Instructions  
Change build.sh mode to be executable and then run the buil script.  
```bash 
chmod +x build.sh  
./build.sh
```  

Edit package.json with any text editor in order to choose packages version (you can also use the default without editing)   

Run the react-app with docker compose.  
```bash  
docker-compose up
```  

react-app will be hosted on localhost:3000
