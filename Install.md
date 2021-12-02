Install.md
Front end side:
  Install Nodejs if you do not have it
  1.git clone https://github.com/psdo3/trash-ai-testing.git 
  2.cd frontend-react
  3.npm install
  4.npm run start (should open inside http://localhost)
  
  Back end side:
    # Setup
      cd backend-nodejs
      npm install
      npm run start (should open listening port 5000)
## Object Detection Model

The server uses ImageAI with the RetinaNet model. For it to work, you must have installed the following dependencies before installing ImageAI:

 - Python 3.7.6
 - Tensorflow 2.4.0
 - OpenCV
 - Keras 2.4.3

If you already have these packages installed, you can skip the following steps. We suggest keeping the packages in a virtual environment using 
