// 定义字符集
const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";

// 计算给定值与掩码位操作的结果，并根据结果在字符集中查找对应字符
function getCharByIndex(value) {
    if (value < 0 || value >= keyStr.length) {
        return ".";
    }
    return keyStr.charAt(value);
}

// 对输入数据进行二进制位操作并返回处理结果
function bitOperationOnData(data, shiftValue) {
    let result = 0;
    for (let i = 23; i >= 0; i--) {
        if ((shiftValue >> i & 1) === 1) {
            result = (result << 1) + (data >> i & 1);
        }
    }
    return result;
}

// 对输入数组进行编码
function encode(inputArray) {
    let encodedString = "";
    let remainder;

    for (let i = 0, len = inputArray.length; i < len; i += 3) {
        let combinedValue;

        // 处理剩余不足3个元素的情况
        if (i + 2 < len) {
            combinedValue = (inputArray[i] << 16) + (inputArray[i + 1] << 8) + inputArray[i + 2];
            encodedString +=
                getCharByIndex(bitOperationOnData(combinedValue, 7274496), keyStr.length) +
                getCharByIndex(bitOperationOnData(combinedValue, 9483264), keyStr.length) +
                getCharByIndex(bitOperationOnData(combinedValue, 19220), keyStr.length) +
                getCharByIndex(bitOperationOnData(combinedValue, 235), keyStr.length);
        } else {
            remainder = len % 3;
            if (remainder === 2) {
                combinedValue = (inputArray[i] << 16) + (inputArray[i + 1] << 8);
                encodedString +=
                    getCharByIndex(bitOperationOnData(combinedValue, 7274496), keyStr.length) +
                    getCharByIndex(bitOperationOnData(combinedValue, 9483264), keyStr.length) +
                    getCharByIndex(bitOperationOnData(combinedValue, 19220), keyStr.length);
                encodedString += ".";
            } else if (remainder === 1) {
                combinedValue = inputArray[i] << 16;
                encodedString +=
                    getCharByIndex(bitOperationOnData(combinedValue, 7274496), keyStr.length) +
                    getCharByIndex(bitOperationOnData(combinedValue, 9483264), keyStr.length);
                encodedString += "..";
            }
        }
    }

    return encodedString;
}

// 示例：对[1,2,3,4,5,6,7,8,9,10]进行编码
const result = encode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(encode([177,96,136,67,70,244,204,204,27,137,130,213,208,45,235,66,25,16,107,19,110,117,211,192,210,72,170,29,165,203,207,161,248,166,122,78,173,244,92,30,100,77,53,76,160,121,94,42,186,189,88,88,55,94,58,10,30,212,36,228,70,27,59,241,254,207,248,145,36,61,182,22,34,89,227,94,35,247,36,36,65,184,53,125,207,6,18,227,39,164,245,244,169,204,35,89,144,221,238,92,191,118,94,59,112,101,120,227,13,169,211,126,98,228,191,63,139,43,13,58,194,14,211,245,221,211,121,223,102,198,114,76,195,205,51,233,159,95,114,255,26,156,50,73,216,88,175,19,115,65,229,30,119,32,42,111,203,254,222,148,113,24,85,247,180,21,164,37,54,252,78,175,42,32,173,165,203,161,105,229,239,37,205,115,233,136,171,188,110,187,177,84,83,30,177,234,154,88,254,25,143,64,128,159,201,103,247,180,164,189,145,155,71,227,246,180,162,3,29,152,174,112,27,68,38,46,239,56,29,187,43,228,85,222,46,125,186,37,234,10,90,96,241,167,118,71,128,209,30,152,82,224,229,144,239,3,127,121,0,13,164,153,138,74,5,143,216,50,13,8,170,124,219,148,26,222,77,128,125,147,156,70,15,109,33,25,189,251,248,81,121,182,143,109,241,98,251,198,145,127,152,69,125,103,176,154,200,16,5,218,170,233,170,160,20,221,135,207,150,171,227,210,179,219,62,209,218,229,180,231,235,58,38,106,209,200,85,72,37,208,119,48,187,238,93,170,86,168,101,47,183,85,76,167,28,36,50,215,73,173,228,239,95,174,223,178,46,131,203,177,235,27,229,199,107,140,123,119,217,73,53,30,3,173,140,134,75,190,126,16,120,71,239,145,223,126,76,245,198,233,134,58,202,31,5,36,247,232,210,15,202,46,17,163,107,111,93,18,193,65,59,21,106,206,196,248,136,60,226,128,87,7,87,26,245,41,159,147,176,105,25,179,214,99,186,177,124,224,178,225,20,173,89,158,120,115,15,241,95,34,51,175,120,1,164,214,235,93,141,247,206,250,36,85,164,82,135,37,96,157,157,145,249,95,182,235,179,160,12,231,225,104,254,168,166,84,93,76,20,251,230,171,205,183,140,163,166,216,93,138,239,53,160,187,64,207,18,98,189,225,244,170,104,243,151,213,203,100,136,107,220,116,9,117,38,67,242,230,107,123,23,201,13,73,119,65,58,224,214,50,73,140,205,141,11,65,36,232,183,39,250,13,207,119,27,221,61,183,36,200,173,183,245,70,240,127,153,230,144,182,217,45,189,234,147,84,27,155,160,2,147,39,58,160,149,198,179,35,88,50,157,199,183,46,64,249,224,112,91,153,184,167,119,89,24,158,227,138,104,155,35,14,234,34]));

console.log(result);
