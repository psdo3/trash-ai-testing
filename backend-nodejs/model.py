from imageai.Detection import ObjectDetection
import sys
import os

BACKEND_PATH = os.getcwd()
file_name = str(sys.argv[1])

detector = ObjectDetection()
detector.setModelTypeAsRetinaNet()
detector.setModelPath(os.path.join(BACKEND_PATH, "models/resnet50_coco_best_v2.1.0.h5"))
detector.loadModel()

detections = detector.detectObjectsFromImage(
    input_image=os.path.join(BACKEND_PATH, "images/", file_name), 
    output_image_path=os.path.join(BACKEND_PATH, "output/", file_name), 
    minimum_percentage_probability=30,
    display_percentage_probability=True,
    display_object_name=True,
    #extract_detected_objects=True
)

for eachObject in detections:
    print(eachObject["name"], " : ", eachObject["percentage_probability"], " : ", eachObject["box_points"])