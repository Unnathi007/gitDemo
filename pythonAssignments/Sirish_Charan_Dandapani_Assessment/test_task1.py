import pytest
import Task1 

@pytest.mark.parametrize("password", ["ABd1234@1", "Sirish123@", "P@ss12389", "123@bcdA"])
def test_postive_test_case(password):
     password = Task1.Password(password)
     result = password.passVerification()
     assert result

@pytest.mark.parametrize("password", ["aF1#\"","2w3E*","2We3345","123Abc"])
def test_negative_test_case(password):
     try:
          password = Task1.Password(password)
          result = password.passVerification()
     except Task1.InvaildPassword as err:
          assert err

@pytest.mark.skip
@pytest.mark.parametrize("password", ["ABd1234@1", "Sirish123@", "P@ss12389", "123@bcdA"])
def test_regex_postive_test_case(password):
     password = Task1.Password(password)
     result = password.passVerificationRegex()
     assert result

@pytest.mark.skip
@pytest.mark.parametrize("password", ["aF1#\"","2w3E*","2We3345","123Abc"])
def test_regex_negative_test_case(password):
     try:
          password = Task1.Password(password)
          result = password.passVerificationRegex()
     except Task1.InvaildPassword as err:
          assert err


