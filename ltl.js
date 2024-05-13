var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";


function getKeyStr(e){
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()";
    return e < 0 || e >= t["length"] ? "." : t.charAt(e);
}
function t (e, t) {
    var n = 0
    for (var r = 23; 0 <= r; r--) {
        if (1 === (t >> r & 1)) {
            n = (n << 1) + (e >> r & 1)
        }
    }
    return n;
}
function encode (e) {
    for (var n = "", r = "", a = e["length"], s = 0; s < a; s += 3) {
        var c;
        if (s + 2 < a) {
            c = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2];
            n += getKeyStr(t(c, 7274496)) + getKeyStr(t(c, 9483264)) + getKeyStr(t(c, 19220)) + getKeyStr(t(c, 235));
        } else {
            var u = a % 3;
            if (2 == u) {
                c = (e[s] << 16) + (e[s + 1] << 8)
                n += getKeyStr(t(c, 7274496)) + getKeyStr(t(c, 9483264)) + getKeyStr(t(c, 19220))
                r = "."
            } else if (1 == u) {
                c = e[s] << 16
                n += getKeyStr(t(c, 7274496)) + getKeyStr(t(c, 9483264))
                r = ".."
            }
        }
    }
    return n + r;
}



function decode(input) {
    var outputArr = [];
    var i = 0;
    while (i < input.length) {
        var enc1 = _keyStr.indexOf(input.charAt(i++));
        var enc2 = _keyStr.indexOf(input.charAt(i++));
        var enc3 = _keyStr.indexOf(input.charAt(i++));
        var enc4 = _keyStr.indexOf(input.charAt(i++));

        if (enc3 === -1) {
            var arr = new Array(24).fill(0);
            fillEl(arr, [22,21,19,18,17,16], enc1)
            fillEl(arr, [23,20,15,13,12,10], enc2)
            var d = parseInt(arr.join(''), 2)
            var chr1 = (d >> 16) & 0xFF;
            outputArr.push(chr1)
            continue
        }

        if (enc4 === -1) {
            var arr = new Array(24).fill(0);
            fillEl(arr, [22,21,19,18,17,16], enc1)
            fillEl(arr, [23,20,15,13,12,10], enc2)
            fillEl(arr, [14,11,9,8,4,2], enc3)
            var d = parseInt(arr.join(''), 2)
            var chr2 = (d >> 8) & 0xFF;
            var chr1 = (d >> 16) & 0xFF;
            outputArr.push(chr1, chr2)
            continue
        }

        var arr = [];
        fillEl(arr, [22,21,19,18,17,16], enc1)
        fillEl(arr, [23,20,15,13,12,10], enc2)
        fillEl(arr, [14,11,9,8,4,2], enc3)
        fillEl(arr, [7,6,5,3,1,0], enc4)
        var d = parseInt(arr.join(''), 2)
        var chr3 = d & 0xFF;
        var chr2 = (d >> 8) & 0xFF;
        var chr1 = (d >> 16) & 0xFF;
        outputArr.push(chr1, chr2, chr3)
    }
    let hexString = outputArr.map(num => num.toString(16)).join('');
    console.log(hexString)
}

function fillEl(source, indexArr, item) {
    item = item.toString(2).padStart(6, '0')
    for (let i = 0; i < indexArr.length; i++) {
        source[23 - indexArr[i]] = item.charAt(i);
    }
}


decode("uUD4)ODQlXGBwBVopP5X(1JjeHSfbKC2)x(K7NNRShOl6GxGBrHZo0j7DmoDxBSNeRnhrRTLi2szS0tjf2Q)Y8z2U1kDOJO3vkwFbwmFKCAvEDu(EhmyJNkczOCgZrlHv8R5PbT48Al8aj(6v1Kbu1V4p6jWW39lt9tTgnTWPin25s3OSvawpKm)0UKKFsRUL8imQAMJV0hLqRsPZajeC)nQgCGxfdeXnHnrEj24rmGvOBIa2WgwUQCpC)5ZQ6SE0cUiIiYRy6THNd)yuW)PcGXi6xFkU07FY1fILG6bR0GOGyRgVWNGMI7MOv9lKUyAKAb2HVL7fxtA6zP8aQVZX)H52qIoEjgTXp9s1LZGFoEGh2mOv4ktkt0riSHnS9276T(X(7vGkNl7dQHy8xsrj9V5dhxVE7oLZDM22ArB3vfCOXJiEGCcn0SBmsKlfXxKuKh72sDySUkY)1U1Qq88zbYYQNJbTxG1JXdJa1yKTHjXnYS8oe4H7ljFjiD2YFqxitpndREx6bX5Bgt3GX2HuXo(Miug6ZOJBt25HGO4hPHozXwfxLXfhUWbCSUpIGuKy64Tm8)(DdoGnZDmqadOB2NlMKTa8oTxJbF)iKPE5ruTwqda691ML71NZ8ZiH4sB5VAuvonLne25ceNjvEMXdjMRuVc3elRm)lNITQbabbGn(ClotIbkO8wZ4UIIkSp)mmuCaK3)S7zTv1kWntPhIEvSa(rs2)GtNYKSGJisu3UJ6GSHjYlHVovzrdXV4A2kPGwaZs)zBdn9b30T7GdYN3(u5Sq9ZC85UhdEYCMcrhM.")

// 0000000000000000
