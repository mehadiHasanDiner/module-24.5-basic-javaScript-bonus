function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[4]);
}

add(12, 13, 14, 15, 12);

// [Arguments] { '0': 12, '1': 13, '2': 14, '3': 15, '4': 12 }
// এটা হচ্ছে  ্এ্যারে লাইক অবজেক্ট এটা পুরোপুরি ্এ্যারে না।
function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[4]);
}

add(12, 13, 14, 15, 12);

// [Arguments] { '0': 12, '1': 13, '2': 14, '3': 15, '4': 12 }
// এটা হচ্ছে  ্এ্যারে লাইক অবজেক্ট এটা পুরোপুরি ্এ্যারে না।
