from typing import Literal


AHT_I2C_ADDR = 0x38  # Default I2C address
AHT_STATUS_BUSY = 0x01  # Status bit for busy
AHT_STATUS_CALIBRATED = 0x10  # status bit for calibrated
AHT_CMD_INIT = 0xBE  # command for initialization
AHT_CMD_TRIGGER = 0xAC  # command for trigger measurement
AHT_CMD_RESET = 0xBA  # command for soft reset
AHT_CRC_POLYNOMIAL = 0x31  # Polynomial representation
AHT_CRC_MSB = 0x80  # Most significant bit
AHT_CRC_INIT = 0xFF  # Initial value of CRC
INVALID_MEASUREMENT = -999

class AHT2x:
    """Class based on AHT20 and AHT21 documentation."""

    def __init__(self, i2c, address=AHT_I2C_ADDR, crc=False): ...

    @property
    def is_busy(self) -> bool: ...

    @property
    def is_calibrated(self) -> bool: ...

    def _status(self) -> Literal[1]: ...

    @property
    def humidity(self) -> float: ...

    @property
    def temperature(self) -> float: ...

    @property
    def status(self) -> Literal[0, 1]:
        '''The status of the aht21 sensor
        0: Not OK
        1: OK'''

    def reset(self):
        """The soft reset command is used to restart the sensor system without
        turning the power off and on again. After receiving this command, the
        sensor system begins to re-initialize and restore the default setting
        state"""

    def _calibrate(self):
        """Internal function to send initialization command.
        Note: The  calibration  status  check  in  the  first  step
            only  needs  to  be  checked  at  power-on.  No  operation is
            required during the normal acquisition process."""

    def _crc8(self) -> int:
        """Internal function to calcule the CRC-8-Dallas/Maxim of current
        message. The initial value of CRC is 0xFF, and the CRC8 check
        polynomial is: CRC [7:0] = 1+X^4 +X^5 +X^8"""

    def _measure(self):
        """Internal function for triggering the AHT to read temp/humidity"""
