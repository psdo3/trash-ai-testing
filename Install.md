## Install.md
Front end side:
 - Install Nodejs if you do not have it
 - 1.git clone https://github.com/psdo3/trash-ai-testing.git 
 - 2.cd frontend-react
 - 3.npm install
 - 4.npm run start (should open inside http://localhost)
  
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

If you already have these packages installed, you can skip the following steps. We suggest keeping the packages in a virtual environment using **[Miniconda](https://docs.conda.io/en/latest/miniconda.html)**. Once Miniconda is installed, use the following conda commands to install the packages:

- conda create --n trashai python=3.7.6
- conda activate trashai
- pip install tensorflow==2.4.0
or
- pip install tensorflow-gpu==2.4.0 (Tensorflow GPU if you have NVIDIA GPU with CUDA and cuDNN installed)
- pip install keras==2.4.3 numpy==1.19.3 pillow==7.0.0 scipy==1.4.1 h5py==2.10.0 matplotlib==3.3.2 opencv-python keras-resnet==0.2.0
- pip install imageai --upgrade

Then, download the **[RetinaNet object detection model](https://github.com/OlafenwaMoses/ImageAI/releases/download/essentials-v5/resnet50_coco_best_v2.1.0.h5)**. Once the model is installed, place it in the _models_ folder located in _trash-ai-testing/backend-nodejs_. 
## Running the client and server

In a command shell, navigate to _trash-ai-testing/backend-nodejs_ and start the server.
```bash
node server.js
```

In another command shell, navigate to _trash-ai-testing/frontend-react_ and start the frontend.
```bash
npm run start
```

This should prompt a new browser window. If not, head to ‘localhost:3000’ in your browser. From there, upload an image and then wait for the backend model to process it. You will be notified in the server terminal upon completion. Finally, head to ‘localhost:5000/{image_file_name}’ to view the results. Note: you may upload multiple images and view their results using the URL with the respective image file name.
