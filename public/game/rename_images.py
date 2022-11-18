"""
เอาไว้เปลี่ยนชื่อไฟล์รูปทุกแบบให้เป็นตัวเลขและ convert ไฟล์รูปเป็น jpg โดยใช้ PIL library
"""

import os
from PIL import Image

def filter_thumbnail(file):
    if (file.startswith('thumbnail') or file.startswith('thumbnail-wide')):
        return True
    return False
        

def rename_images():
    cur_dir = os.getcwd()
    for i in range(90):
        # รัน loop เปลี่ยนนามสกุลไฟล์ thumbnail และ thumbnail-wide ให้เป็น jpg
        path = f"/{i}/"
        file_in_dir = os.listdir( cur_dir + path )
        for j in filter(filter_thumbnail, file_in_dir):
            if not (j.endswith('.jpg')):
                new_image = Image.open(cur_dir + path + j).convert('RGB')
                os.remove(cur_dir + path + j)
                new_image.save(cur_dir + path + j.rsplit('.')[0] + '.jpg', 'JPEG')
        
        
        path = f"/{i}/images/"
        os.chdir(cur_dir + path)
        
        # รัน loop ใน folder images
        for j, filename in enumerate(os.listdir()):
            if not (filename.endswith('.jpg')):
                new_name = cur_dir + path + str(j) + ".jpg"
                new_image = Image.open(filename).convert('RGB')
                os.remove(filename)
                new_image.save(new_name, 'JPEG')
rename_images()