"""
สำหรับสร้าง folder ย่อยเน้อ
"""
import os

def make_directiory( count):
    curDir = os.getcwd()
    for i in range(count):
        path = f"/{i}"
        try:
            os.mkdir(curDir + path)
        except OSError as error:
            pass
        sub_path = f"/{i}/images"
        try:
            os.mkdir(curDir + sub_path)
        except OSError as error:
            pass

make_directiory(90)
