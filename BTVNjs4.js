//B1
//1.input các biến
//kiểm tra biến hợp lệ

//2.kiểm tra biến tuổi đã đủ 18 chưa

//3.chuyển ký tự trong biến tên thành ký tự viết hoa

//4.tạo phím thoát.

// let name = "";
// let age = 0;

// while (true) {
//   let n = +prompt(`
//         === MENU QUẢN LÝ THÔNG TIN ===

//     1. Nhập tên người dùng
//     2. Nhập tuổi người dùng
//     3. Kiểm tra người dùng đủ tuổi trưởng thành chưa
//     4. In ra tên viết hoa
//     5. Thoát
//     Lựa chọn của bạn: `);

//   if (n === 1 || n === 4) {
//     if (n === 1) {
//       name = prompt("Nhập tên người dùng");
//       console.log(name);
//     } else {
//       name = prompt("Nhập tên người dùng");
//       console.log(name.toUpperCase());
//     }
//   } else if (n === 2 || n === 3) {
//     if (n === 2) {
//       n = +prompt("Nhập tuổi người dùng");
//       console.log(n);
//     } else {
//       n = +prompt("Nhập tuổi người dùng");
//       if (n < 18) {
//         console.log("chưa đủ tuổi");
//       } else {
//         console.log("Đã đủ tuổi");
//       }
//     }
//   } else if (n === 5) {
//     console.log("Thoát");
//     break;
//   } else {
//     console.log("error");
//   }
// }

//B2
//xác định vòng lặp While-break
//gọi từng biến riêng
//5 chỉ được chọn sau khi đã hoàn thành hết
//cả 1,2,3,4

// let name = "";
// let age = 0;
// let math = 0;
// let literature = 0;
// let english = 0;
// let average = 0;
// while (true) {
//   let n = +prompt(`=== MENU QUẢN LÝ HỌC SINH ===

//     1. Nhập tên học sinh
//     2. Nhập tuổi học sinh
//     3. Nhập điểm Toán, Văn, Anh
//     4. Tính điểm trung bình và xếp loại
//     5. Hiển thị thông tin học sinh
//     6. Thoát
//     Lựa chọn của bạn: `);
//   if (n === 1) {
//     name = prompt("Nhập tên người dùng");
//   } else if (n === 2) {
//     age = +prompt("Nhập tuổi");
//   } else if (n === 3) {
//     math = +prompt("Điểm toán");
//     literature = +prompt("Điểm văn");
//     english = +prompt("Điểm anh");
//   } else if (n === 4) {
//     average = (math + literature + english) / 3;
//   } else if (n === 5) {
//     console.log(name);
//     console.log(age);
//     console.log(math);
//     console.log(literature);
//     console.log(english);
//     console.log(average);
//   } else if (n === 6) {
//     break;
//   } else {
//     console.log("error");
//   }
// }

//B3
//input từng giá trị từ 1-7
//1-tạo vòng lặp với i chạy từ 1 đến 9
//mỗi lần lặp i sẽ nhân với n
//2-nhập giá trị của n trong bảng cửu chương
//3-nhập hai số bất kỳ và hiển thị kết quả của chúng
//4-tạo vòng lặp với i-1 và n-1
//5-tạo số lần ngẫu nhiên ra phép nhân
//6-hiển thị số lần đúng sai
//7-thoát vòng lặp

// let number1 = 0;
// let number2 = 0;
// let result = 0;
// let count = 0;
// let answer = 0;
// let corect = 0;
// let wrong = 0;

// while (true) {
//   let n = +prompt(`
//     === MENU BẢNG CỬU CHƯƠNG NÂNG CAO ===

// 1. Hiển thị bảng cửu chương từ 1 đến 9
// 2. Hiển thị bảng cửu chương của một số cụ thể
// 3. Kiểm tra kết quả phép nhân
// 4. Hiển thị bảng cửu chương ngược
// 5. Luyện tập bảng nhân với số lần tùy chọn
// 6. Thống kê kết quả đúng/sai
// 7. Thoát
// Lựa chọn của bạn: `);
//   if (n === 1) {
//     for (i = 1; i <= 10; i = i + 1) {
//       for (m = 1; m <= 10; m = m + 1) console.log(`${i}x${m}=${i * m}`);
//     }
//   } else if (n === 2) {
//     m = +prompt("Nhập 1 bất kỳ số từ 1-9");
//     if (m >= 1 && m <= 10) {
//       for (i = 1; i <= 10; i = i + 1) {
//         console.log(`${m}x${i}=${m * i}`);
//       }
//     } else {
//       console.log("error");
//     }
//   } else if (n === 3) {
//     number1 = +prompt("nhập số thứ nhất");
//     number2 = +prompt("nhập số thứ hai");
//     if (
//       Number.isNaN(number1) ||
//       Number.isNaN(number2) ||
//       !Number.isInteger(number1) ||
//       !Number.isInteger(number2)
//     ) {
//       console.log("error");
//     } else {
//       result = number1 * number2;
//       console.log(`${number1}x${number2}=${result}`);
//     }
//   } else if (n === 4) {
//     for (i = 10; i >= 1; i = i - 1) {
//       for (m = 10; m >= 1; m = m - 1) console.log(`${i}x${m}=${i * m}`);
//     }
//   } else if (n === 5) {
//     count = +prompt("nhập số lần");
//     if (Number.isNaN(count) || !Number.isInteger(count)) {
//       console.log("error");
//     } else {
//       for (i = 1; i <= count; i = i + 1) {
//         number1 = +prompt("nhập số thứ nhất");
//         number2 = +prompt("nhập số thứ hai");
//         answer = +prompt("kết quả");
//         if (
//           Number.isNaN(number1) ||
//           Number.isNaN(number2) ||
//           Number.isNaN(answer) ||
//           !Number.isInteger(number1) ||
//           !Number.isInteger(number2) ||
//           !Number.isInteger(answer)
//         ) {
//           console.log("error");
//         } else {
//           result = number1 * number2;
//           if (answer !== result) {
//             console.log(`${number1}x${number2}=${answer}` + "--->Wrong");
//             console.log(`${number1}x${number2}=${result}` + "--->Right");
//             wrong = wrong + 1;
//           } else {
//             console.log(`${number1}x${number2}=${result}` + "--->Corect");
//             corect = corect + 1;
//           }
//         }
//       }
//     }
//   } else if (n === 6) {
//     console.log(`Số câu bạn làm sai là: ${wrong}`);
//     console.log(`Số câu bạn làm đúng là: ${corect}`);
//   } else if (n === 7) {
//     break;
//   } else {
//     console.log("error");
//   }
// }

//B4
//gọi biến n và menu
//1
//xét vòng lặp là căn bậc hai của n

//sử dụng kỹ thuật "cắm cờ" gắn biến với true/false
//để dừng vòng lặp khi đã thỏa mãn đk

//2
//tính tổng các số từ 1 đến N bằng cách sử dụng vòng lặp for
//1+2+3+4...+n

//3
//tính giai thừa của một số với vòng lặp
//n x (n-1) x (n-2)...x 2 x 1.

//4
//bảng nhân của N là sử dụng vòng lặp
// n x 1,n x 2,n x 3....n x 10

//5
//xét n có chia hết cho số nào trong khoảng từ 1 đến n không
//nếu có thì số ước = số ước + 1

//6
//khi các phần từ bên trong đều là bội của tổng

//7
//các số từ 1, 2, 3,.... n. trong vòng lặp
//thỏa mãn điều kiện chia cho 3 và 5

//8
//hiển thị các số 1,2,3...n mà không chia hết cho 2

let n = +prompt("Nhập n");
if (Number.isNaN(n) || !Number.isInteger(n) || n <= 0) {
  console.log("error");
} else {
  while (true) {
    let menu = +prompt(`=== MENU XỬ LÝ SỐ NGUYÊN N ===
        (N là số nguyên dương bạn nhập ban đầu)
        
        1. Kiểm tra N có phải số nguyên tố
        2. Tính tổng các số từ 1 đến N
        3. Tính giai thừa của N (N!)
        4. In bảng nhân của N
        5. Đếm số ước của N
        6. Kiểm tra N có phải số hoàn hảo
        7. In tất cả số chia hết cho 3 và 5 từ 1 đến N
        8. In tất cả số lẻ từ 1 đến N
        9. Thoát
        Lựa chọn của bạn: `);
    if (menu === 1) {
      let isPrime = true;
      for (i = 2; i <= Math.sqrt(n); i = i + 1) {
        if (n % i === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        console.log(`${n} là số nguyên tố`);
      } else {
        console.log(`${n} không phải là số nguyên tố`);
      }
    } else if (menu === 2) {
      let sumA = 0;
      for (i = 1; i <= n; i = i + 1) {
        sumA = sumA + i;
      }
      console.log(`tổng của 1 + 2 + 3 +...+ ${n} = ${sumA}`);
    } else if (menu === 3) {
      let result = 1;
      for (i = n; i > 1; i = i - 1) {
        result = result * i;
      }
      console.log(`${n} x (${n}-1) x (${n}-2)...x 2 x 1 = ${result}`);
    } else if (menu === 4) {
      let result1 = 0;
      for (i = 1; i <= 10; i = i + 1) {
        result1 = n * i;
        console.log(`${n}x${i}=${result1}`);
      }
    } else if (menu === 5) {
      let factor = 0;
      for (i = 1; i <= n; i = i + 1) {
        if (n % i === 0) {
          factor = factor + 1;
        }
      }
      console.log(`có tất cả ${factor} ước số từ 1 đến ${n}`);
    } else if (menu === 6) {
      let factor1 = 0;
      for (i = 1; i < n; i = i + 1) {
        if (n % i === 0) {
          factor1 = factor1 + i;
        }
      }
      if (factor1 === n) {
        console.log(`${n} là số hoàn hảo`);
      } else {
        console.log(`${n} không phải là số hoàn hảo`);
      }
    } else if (menu === 7) {
      for (i = 1; i <= n; i = i + 1) {
        if (i % 3 === 0 && i % 5 === 0) {
          console.log(`${i} là số chia hết cho cả 3 và 5`);
        }
      }
    } else if (menu === 8) {
      for (i = 1; i <= n; i = i + 1) {
        if (i % 2 !== 0) {
          console.log(`${i} là số lẻ trong dãy số từ 1 đến ${n}`);
        }
      }
    } else if (menu === 9) {
      break;
    } else {
      console.log("error");
    }
  }
}
