import coversion_of_csv_to_excel as con
import pytest


def test_check_file_exists():
    assert con.check_file_exists() == True


def test_check_size():
    assert con.check_size() == True


# def test_check_rows():
#     assert con.check_rows() == True


# def test_check_columns():
#     assert con.check_columns() == False


