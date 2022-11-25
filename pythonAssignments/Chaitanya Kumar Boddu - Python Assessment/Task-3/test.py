import pandas as pd
import xlrd as xl
from os.path import exists
import datetime


def check_columns():
    loc = "25_Nov_2022.xls"  # Giving the location of the file

    wb = xl.open_workbook(loc)  # opening & reading the excel file
    s1 = wb.sheet_by_index(0)  # extracting the worksheet
    # initializing cell from the excel file mentioned through the cell position
    s1.cell_value(0, 0)
    # Counting & Printing thenumber of cols respectively
    print(s1.ncols)

    # count no. of lines in csv


# ===> reads in all the rows, but skips the first one as it is a header.
    df = pd.read_csv("realestate.csv")

    total_cols = len(df.axes[1])  # ===> Axes of 0 is for a column

    print(total_cols)

   

(check_columns())