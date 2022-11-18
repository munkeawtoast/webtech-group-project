"""
เอาไว้เปลี่ยนชื่อไฟล์รูปทุกแบบให้เป็นตัวเลขและ convert ไฟล์รูปเป็น jpg โดยใช้ PIL library
"""

import os
from PIL import Image

def rename_images():
    cur_dir = os.getcwd()
    for i in range(90):
        
        # รันหาไฟล์ใน folder ที่ชื่อไม่ใช้ thumbnail หรือ thumbnail-wide และเปลี่ยนให้เป็น thumbnail และ thumbnail-wide ตาม aspect ratio ของรูป
        path = f"/{i}/"
        files_in_dir = [j for j in os.listdir(cur_dir + path) if os.path.isfile(cur_dir + path + j)]
        for j in files_in_dir:
            if not (j != "thumbnail.jpg" and j != "thumbnail-wide.jpg"):
                continue
            img = Image.open(cur_dir + path + j).convert('RGB')
            os.remove(cur_dir + path + j)
            if img.width > img.height:
                img.save(cur_dir + path + 'thumbnail-wide.jpg')
            else:
                img.save(cur_dir + path + 'thumbnail.jpg')
        
        
        path = f"/{i}/images/"
        os.chdir(cur_dir + path)
        
        # รัน loop ใน folder images
        for j, filename in enumerate(os.listdir()):
            if not (filename.endswith('.jpg')):
                new_name = cur_dir + path + str(j) + ".jpg"
                new_image = Image.open(filename).convert('RGB')
                os.remove(cur_dir+path+filename)
                new_image.save(new_name, 'JPEG')
rename_images()